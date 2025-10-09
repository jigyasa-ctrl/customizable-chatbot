import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf"
import { RecursiveCharacterTextSplitter, TextSplitter } from "@langchain/textsplitters";
import { OpenAIEmbeddings } from "@langchain/openai";
import { PineconeStore } from "@langchain/pinecone";
import { Pinecone as PineconeClient } from "@pinecone-database/pinecone";
import { Chroma } from "@langchain/community/vectorstores/chroma";
import { OllamaEmbeddings } from "@langchain/community/embeddings/ollama";
import 'dotenv/config';

const embeddings = new OllamaEmbeddings({ model: "nomic-embed-text" });

// const embeddings = new OpenAIEmbeddings({ // library reads api key from env file 
//   model: "text-embedding-3-small"
// });

const pinecone = new PineconeClient();
const pineconeIndex = pinecone.Index(process.env.PINECONE_INDEX_NAME)

export const vectorStore = new Chroma(embeddings, {
    collectionName: "docs",
    persistDirectory: "./chroma_db",
    numDimensions: 768,
    url: process.env.CHROMA_URL || "http://127.0.0.1:8001",
});
  
// export const vectorStore = await PineconeStore.fromExistingIndex(embeddings, { // // PineconeClient communicates with the Pinecone database // library reads api key from env file 
//     pineconeIndex, // // this is the vectorIndex that we use to do fast searching
//     maxConcurrency: 5,
//   });

 export async function indexTheDocument(filepath) {
    const loader = new PDFLoader(filepath, {splitPages: false}) // to load pdf and not split the pages
    const docs = await loader.load()
    // console.log(docs[0].pageContent) // each page is a new documents and comes in array
    const splitter = new RecursiveCharacterTextSplitter({
        chunkSize: 500,
        chunkOverlap: 100
    }) // creates chunks

    const text = await splitter.splitText(docs[0].pageContent)
    const documents = text.map((chunk) => {
        return {
            pageContent: chunk,
            metadata: docs[0].metadata
        }
    })
    const documentIds = await vectorStore.addDocuments(documents);
    console.log(documentIds)
    console.log(`Indexed ${documentIds.length} chunks into Chroma collection "${"docs"}"`)
} 