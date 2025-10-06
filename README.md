# customizable-chatbot
company-chatbot implementation using RAG(Retrieval Augmented Generation)


Bot able to answer question related to information present in the Doc. ->

<img width="766" height="529" alt="Screenshot 2025-10-06 at 11 41 35 PM" src="https://github.com/user-attachments/assets/6beb922c-14e1-4d29-8fee-2e52f31275d1" />


Tip: chromadb@1.7.3 works well with LangChain’s camelCase request body.

# Run a local Chroma server (Python, isolated venv)

python3 -m venv .venv && source .venv/bin/activate
pip install 'chromadb==0.4.24' 'numpy<2'
/Users/you/path/.venv/bin/chroma run \
  --host 0.0.0.0 --port 8001 \
  --path /absolute/path/to/chroma_db


  <h5>check if it is running?</h5>
  
  curl -s http://127.0.0.1:8001/api/v1/heartbeat

 <h5> Why these versions:</h5>
Server: 0.4.24 exposes v1 REST routes used by LangChain’s Chroma integration.
NumPy < 2 fixes the np.float_ import error for 0.4.x.
JS client 1.7.3 honors LangChain’s camelCase request fields.
