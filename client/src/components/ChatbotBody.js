
import React from "react";

function ChatbotBody({ messages }) {
    return (
        <section className="chat_body flex flex-col">
            {messages.length > 0 && messages?.map((data, index) => {
                return data.role == "bot" ? <div key={index} className="bot_message">
                <div className="avatar">🤖</div>
                <div className="message-content">{data.message}</div>
            </div> : <div key={index} className="user_message">
                <div className="message-content">{data.message}</div>
                <div className="avatar">👤</div>
            </div>
            })}
        </section>
    );
}

export default React.memo(ChatbotBody);
