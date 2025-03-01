document.getElementById('contato-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Sua mensagem foi enviada com sucesso!");
});

document.getElementById('nivelamento-form').addEventListener('submit', function(event) {
    event.preventDefault();
    window.location.href = "https://calendly.com/seu-link-de-agendamento";
});
