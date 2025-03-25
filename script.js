function novoArquivo() {
    document.getElementById('text-area').value = ''; 
}

function abrirArquivo() {
    const arquivo = document.createElement('input');
    arquivo.type = 'file';
    arquivo.accept = '.txt';
    arquivo.onchange = function(event) {
        const reader = new FileReader();
        reader.onload = function() {
            document.getElementById('text-area').value = reader.result;  
        };
        reader.readAsText(event.target.files[0]);
    };
    arquivo.click();  
}

function salvarArquivo() {
    const texto = document.getElementById('text-area').value;  
    const blob = new Blob([texto], { type: 'text/plain' });  
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);  
    link.download = 'documento.txt';  
    link.click();  
}
