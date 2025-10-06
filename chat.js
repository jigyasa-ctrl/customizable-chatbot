
import Groq from 'groq-sdk'
import "dotenv/config"
import readline from 'node:readline/promises'
import { vectorStore } from './prepare.js';
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
export async function chat(){ 
    const rl = readline.createInterface({input: process.stdin, output: process.stdout})
    while(true){
        const question = await rl.question("You: ")
        if(question == "/bye"){
            break;
        }
    // retrieval 

    const relevantChunks = await vectorStore.similaritySearch(question, 3)
    const context = relevantChunks.map((data) => data.pageContent).join("\n\n")
   

    const SYSTEM_PROMPT = `you are a smart assitant for question answering tasks Use the following relevant pieces of retrieved context to answer the question. If you dont know the answer, say i dont know.`
    const userQuery = `Question: ${question}
    Context: ${context}
    Answer: `
    const completion = await groq.chat.completions.create({
            model: "llama-3.3-70b-versatile",
            messages: [
                {
                    role: 'system',
                    content: SYSTEM_PROMPT

                },
                {
                    role: "user",
                    content: userQuery
                }
            ],
        });
    console.log(`Asssitant: ${completion.choices[0].message.content}`)
       
    }

    
    rl.close()
}
chat()