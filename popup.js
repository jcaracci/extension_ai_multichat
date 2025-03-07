document.addEventListener("DOMContentLoaded", function () {
    console.log("popup.js cargado correctamente");

    let queryInput = document.getElementById("query");
    let askBtn = document.getElementById("askBtn");

    function sendQuery() {
        let query = queryInput.value.trim();
        if (!query) {
            console.warn("Pregunta vacía, no se abrirán pestañas.");
            return;
        }

        let chatGPTUrl = `https://chat.openai.com/?q=${encodeURIComponent(query)}`;
        let grokUrl = `https://grok.com/chat?q=${encodeURIComponent(query)}`;

        chrome.tabs.create({ url: chatGPTUrl });
        chrome.tabs.create({ url: grokUrl });

        console.log("Ventanas abiertas con la consulta:", query);
    }

    askBtn.addEventListener("click", sendQuery);
    queryInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            sendQuery();
        }
    });
});
