import header from "../header-bot.jpg"
export default function ChatbotHeader({handleBotClose}) {
    return <header className="chat_header">
    <div className="flex gap-2 justify-center items-center text-white">
        <img src={header} alt="header icon" height="10px" width="30px" className="rounded-full ml-2"  />
        <h4>Chatty</h4>
    </div>
    <span onClick={handleBotClose} className="mr-2 text-white cursor-pointer">X</span>
</header>
}