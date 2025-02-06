document.addEventListener("DOMContentLoaded", function () {
    const chatMessages = document.getElementById("chat-messages");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-button");
    const typingIndicator = document.getElementById("typing-indicator");

    if (!chatMessages || !userInput || !sendButton) {
        console.error("Erro: Elementos do chat não foram encontrados.");
        return;
    }

    async function sendMessage() {
        const message = userInput.value.trim();
        if (message === "") return;

        // Adiciona mensagem do usuário ao chat
        const userMessage = document.createElement("div");
        userMessage.className = "chat-message user-message p-2 mb-2 bg-primary text-white rounded";
        userMessage.textContent = message;
        chatMessages.appendChild(userMessage);

        userInput.value = "";
        typingIndicator.classList.remove("d-none");

        try {
            const response = await fetch("https://backend-llms.azurewebsites.net/api/chat_deepseek", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ message: message, user_id: "default_user" })
            });

            const data = await response.json();
            typingIndicator.classList.add("d-none");

            if (data.response) {
                let cleanResponse = data.response;

                // Remover qualquer <thinking> ou trechos desnecessários
                cleanResponse = cleanResponse.replace(/<thinking>[\s\S]*?<\/thinking>/g, "").trim();
                cleanResponse = cleanResponse.replace(/^\*\*Aqui está sua resposta:\*\*/g, "").trim();

                // Exibir a resposta filtrada
                if (cleanResponse) {
                    const botMessage = document.createElement("div");
                    botMessage.className = "chat-message bot-message p-2 mb-2 bg-light rounded";
                    botMessage.innerHTML = cleanResponse.replace(/\n/g, "<br>");
                    chatMessages.appendChild(botMessage);
                } else {
                    throw new Error("Resposta inválida após limpeza.");
                }
            } else {
                throw new Error("Resposta inválida da API.");
            }
        } catch (error) {
            console.error("Erro ao enviar mensagem:", error);
            typingIndicator.classList.add("d-none");
        }

        // Rolagem automática para a última mensagem
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    sendButton.addEventListener("click", sendMessage);
    userInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });
});