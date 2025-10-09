# customizable-chatbot
company-chatbot implementation using RAG(Retrieval Augmented Generation)

command to run in local -> 

# Stop any running Chroma
pkill -f "chroma" || true

# Backup and wipe the old DB
mv /Users/jigyasaupadhyay/Documents/Work/customizable-chatbot/chroma_db \
   /Users/jigyasaupadhyay/Documents/Work/customizable-chatbot/chroma_db.bak.$(date +%s)
mkdir -p /Users/jigyasaupadhyay/Documents/Work/customizable-chatbot/chroma_db

# Start Chroma pinned to 0.4.24 (matches your earlier plan)
python3 -m venv /Users/jigyasaupadhyay/Documents/Work/customizable-chatbot/.venv && \
source /Users/jigyasaupadhyay/Documents/Work/customizable-chatbot/.venv/bin/activate && \
pip install 'chromadb==0.4.24' 'numpy<2' && \
/Users/jigyasaupadhyay/Documents/Work/customizable-chatbot/.venv/bin/chroma run \
  --host 127.0.0.1 --port 8001 \
  --path /Users/jigyasaupadhyay/Documents/Work/customizable-chatbot/chroma_db



  re-index and chat->
  node rag.js
  node chat.js
