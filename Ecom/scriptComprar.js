   Recebe={}; 
   Recebe= JSON.parse( localStorage.getItem("total"));
   //console.log(Recebe)
   document.getElementById("cont").innerHTML=`<div class="conteudoitem"> <img id="imgcomprar" 
   src=`+Recebe.imagem+`></img> <h4>`+Recebe.nome+`</h4>
   <h4>`+Recebe.preco+`</h4><h5>`+Recebe.tamanho+`</h5></div>`;

  
  Descricao();

   function SetarCores(){


   }
   var t="";
   function Tamanho(event){
      alert("click");
    // console.log(event);   
     t=event  
    return event;  

   }
   var c="";
   function Cores(event){
     if (event == "Black") {
      document.getElementById("optBlack").style.color="white";  
     }if (event=="White") {
      document.getElementById("optWhite").style.color="black";  
     }if (event=="Blue") {
      document.getElementById("optBlue").style.color="black";
     }if (event=="Red") {
      document.getElementById("optRed").style.color="black";
     }
      c=event;
      return event

   }
   function CosultarCep(){
      const meucep=1860120
      const numcep= document.getElementById("numcep").value;
      if (numcep.length != 8) {
         console.log(numcep.length);
         alert("Esté numero de Cep é invalido")
      }
      meucep
      numcep
   }
   function Descricao(){
       const Descricao = Recebe.descricao;
      // console.log(Descricao)
       document.getElementById("descprodutocomprar").innerHTML=`<h2>`+Descricao+`</h2`;

   }
   function PedidoFinal(){
      const tamanho = t;
      const cor = c;
      const Pedido = {nome:Recebe.nome , preco:Recebe.preco , cores:cor , tamanhos:tamanho}
      console.log(Pedido);

   }