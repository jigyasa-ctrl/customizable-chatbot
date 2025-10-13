import { useState} from 'react'
import header from "./header-bot.jpg"
import './App.css';
import ChatbotBody from './components/ChatbotBody';
import Footer from "./components/Footer"
import ChatbotHeader from "./components/ChatbotHeader"
import { constants } from "./constants/index"
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const {init_message} = constants
  const default_message = {role: "bot", message: init_message}
  const [showBot, setShowBot] = useState("hidden")
  const [showAgentIcon, setShowAgentIcon] = useState("block")
  const [messages, setMessages] = useState([default_message])

function handleToast(type, message,  toastObj){
  if(type == "error"){
    toast.error(message, toastObj);
  }
}

function handleBotClick(){
    setShowBot("block")
    setShowAgentIcon("hidden")
}

function handleSend(result) {
  setMessages(prev => [...prev, result])
}

function handleBotClose() {
    setShowBot("hidden")
    setShowAgentIcon("block")

}
  return (
    <div className="App">
     <div id="chat_body" className={`chatbot_wrapper ${showBot} z-9999`}>
        <div  className="main_chatbot">
            {/* <!-- Header section --> */}
            <ChatbotHeader handleBotClose={handleBotClose} />
            {/* <!-- Chat body section --> */}
           <ChatbotBody messages={messages}/>
            {/* <!-- Footer Section --> */}
           <Footer handleSend={handleSend} handleToast={handleToast} />
           <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
              // transition={Bounce}
          />
        </div>
    </div>
    {/* <!-- Chat icon --> */}
    <div id="chatIcon" onClick={handleBotClick} className={`absolute bottom-0 right-0 cursor-pointer z-999 ${showAgentIcon}`}>
        <img src={header} alt="chat icon" height="50px" width="50px" className="rounded-full float-right m-3" />
    </div>
    </div>
  );
}

export default App;
