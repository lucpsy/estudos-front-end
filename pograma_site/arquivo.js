function mostrarResultado(resultado)
{
    alert(resultado);
    let veredito = confirm('Sacou?');
    if(veredito)
        {
            alert("ebaa");
        }
    else
        {alert("Que pena!")};
}
function pegarResultado() {
    let resultado = prompt('quantos anos você tem?','');
    console.log(resultado);
    let mensagem = resultado < 3 ? 'oi,bêbe':
    resultado < 18 ? 'olá':
    resultado < 100 ? 'saudações':
    'Jurássico.'
    mostrarResultado(mensagem);
  }

