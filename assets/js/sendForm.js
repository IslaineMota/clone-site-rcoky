var form = document.getElementById("form");
    
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("form-status");
  var data = new FormData(event.target);
  fetch("https://formspree.io/f/moqyrzle", {
    method: 'POST',
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    status.innerHTML = "Obrigado pelo seu interesse, aguarde a nossa equipe logo entrará em contato.";
    form.reset()
  }).catch(error => {
    status.innerHTML = "Erro ao enviar o formulário."
  });
}
form.addEventListener("submit", handleSubmit)