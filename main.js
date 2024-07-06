// Arquivo main.js

document.addEventListener("DOMContentLoaded", function() {
    // Menu responsivo
    const menuButton = document.getElementById("menu-button");
    const menu = document.getElementById("menu");

    if (menuButton && menu) {
        menuButton.addEventListener("click", function() {
            menu.classList.toggle("show-menu");
        });
    }

    // Formulário de contato
    const form = document.getElementById("contact-form");

    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();

            // Obter os valores dos campos do formulário
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            // Validar se os campos não estão vazios
            if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
                alert("Por favor, preencha todos os campos.");
                return;
            }

            // Simular envio do formulário (neste exemplo, apenas um console.log)
            console.log("Formulário enviado com sucesso!");
            console.log("Nome: " + name);
            console.log("Email: " + email);
            console.log("Mensagem: " + message);

            // Limpar os campos do formulário
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
        });
    }
});
