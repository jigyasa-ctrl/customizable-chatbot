function handleBotClick(){
    const elem = document.getElementById("chat_body")
    const agentIcon = document.getElementById("chatIcon")
    elem.classList.remove("hidden")
    agentIcon.classList.add("hidden")

}

function handleBotClose() {
    const elem = document.getElementById("chat_body")
    const agentIcon = document.getElementById("chatIcon")
    elem.classList.add("hidden")
    agentIcon.classList.remove("hidden")

}