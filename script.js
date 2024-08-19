document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const campoA = parseFloat(document.getElementById('campoA').value);
    const campoB = parseFloat(document.getElementById('campoB').value);
    const mensagem = document.getElementById('mensagem');

    
    if (campoB > campoA) {
        mensagem.textContent = 'Formulário válido!';
        mensagem.className = 'success-message'; 
    } else {
        mensagem.textContent = 'Número B deve ser maior que o número A.';
        mensagem.className = 'error-message'; 
    }
});
