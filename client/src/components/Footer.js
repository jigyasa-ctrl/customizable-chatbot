import { useState } from "react"
import {sanitizeText} from "../utils/index"

export default function Footer({handleSend, handleToast}){
    const [input, setInput] = useState("")
    function handleEnter() {
        const santizedText = sanitizeText(input)
        const userMessage = {
            role: "user",
            message: santizedText
        }   
        if(userMessage.message){
            handleSend(userMessage)
            setInput("")
        } else {
            setInput("")
            handleToast('error', "Please Enter Valid text", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })
        }
           
    }
    return  <footer className="chat_footer flex h-10 m-2 p-2 rounded-[1rem]">
    <input onKeyUp={(e) => e.key == "Enter" && handleEnter()} value={input} onChange={(e) => setInput(e.target.value)} name="chat" className="w-80 outline-none border-none" placeholder="Say Hello!" />
    <button onClick={() => handleEnter()}>Send</button>
</footer>
}