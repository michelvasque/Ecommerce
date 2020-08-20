Recebe= JSON.parse( localStorage.getItem("MudaPagina"));
console.log(Recebe)


MostrarDadosNoCarrinho=()=>{
  for (let index = 0; index < Recebe.length; index++) {
    document.getElementById("conteinerCarrinho").innerHTML+=` <img id="imgcarrinho" 
    src=`+Recebe[index].imagem+`></img> <h4>`+Recebe[index].nome+`</h4>
    <h4>`+Recebe[index].preco+`</h4><h5>`+Recebe[index].tamanho+`</h5>`;
      
  }
  

}
MostrarDadosNoCarrinho();