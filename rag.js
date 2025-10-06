// Implementation of plan
// Stage 1 -  Indexing 
// 1. load the document - completed
// 2. chunk the document - completed
// 3. generate vector embeddings - completed
// 4. store vector embeddings in vector database - completed

// Stage 2 : using the chatbot
// 1. setup llm - done
// 2. add retrieval step - done
// 3. Pass input  + relevant information to LLM - done
// 4. Congratulations - yayy!

import { indexTheDocument } from "./prepare.js";
const filepath = "./cg-internal-docs.pdf"

indexTheDocument(filepath)