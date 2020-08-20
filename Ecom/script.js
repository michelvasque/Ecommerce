function Menu(){
    let botao= document.getElementsByClassName("button");
   let a = 	"#008000";
    //document.getElementsById("me").style.color="red";
    document.getElementById("me").style.backgroundColor="#008000";
   // div.style.backgroundColor="green";

}
function Menudiv(){
    document.getElementById("div").style.backgroundColor="yellow";

}
var cond=false;
function MostrarMenu(){
    
    
    if(cond ==false){
        
        document.getElementById("list").style.visibility="visible";
          cond = true;
        
    }else{ document.getElementById("list").style.visibility="hidden";
         cond =false;
        
    }
       
    }
     
   

   //async function PegarItens(resolve , rejeita){
   
      var p ;   
      //function dad(){
      fetch('http://localhost:3001/').then(function(response){
        return response.json();


        }).then (   function dad(data){
          
       // console.log(data); 
       // Produtos= (data);
       
       p = JSON.parse(data);
      
      // console.log((p));
        
          return p;
          
        }).catch(e => console.log("erro"+e.message));

       
         
          
      //  }
        var Produtos;
        Produtos = dad();
        console.log(Produtos)
       
    //}
    
    
    
    
   
   
   
      //Funcao que chama os itens do banco quando a pagina é carregada    //
    Carregaritens=()=>{
        item=Produtos.map(function(i){
            return i;
        });
        t=0;
            while (t<item.length) {
            //console.log(item);
            document.getElementById("con").innerHTML+=`
            <div class="conteudoitem">
            <img src=`+item[t].imagem+`></img>
              <div class="divProduto">     
                <h2>`+item[t].nome+`</h2>
               
                <h1>`+item[t].preco+`</h1>
               </div>
                <div class="divBotao">
                <button id="btnComprar" onclick="Comprar(`+item[t].id+`)">Comprar</button>
                <button id="btnCarrinho" onclick="Carrinho(`+item[t].id+`)">Adicionar Carrinho</button>
                </div>
            </div>   
            `;                
                       
            t++;
        }
       
        }
        var ArmazenaCarrinho=[];
          //Função que pega o valor do id do item mandado para o carrinho e armazena na Array
          //global ArmezaCarrinho para vizualizar o total de itens no carrinho 
        Carrinho=(event)=>{
            
            if (event) {
                i=ArmazenaCarrinho.length;
                ArmazenaCarrinho[i]=event;
                
            }
           // console.log(ArmazenaCarrinho);
           

        }
        var MudaPagina =[];
        //função que entra no carrinho da loja virtual com itens escolhidos pelo o user
        EntrarCarrinho=()=>{
           
                      
                 /*   document.getElementById("conteinerCarrinho").innerHTML+=`<div class="mcarrinho">
                     <img src=`+item[j].imagem+
                     `></img><h4>`+item[j].nome+`</h4><h4>`+item[j].preco+`</h4>
                    </div>
                    `;      */
                    
         
                       
                  if(MudaPagina.length>0){
                    let car=  JSON.stringify(MudaPagina)
                    console.log(MudaPagina)
                    localStorage.setItem("MudaPagina", car)
                     window.open("carrinho.html")
                    
                 }else{alert("sem itens")} 
               

            }
            var r =[];
            /* Função que pega o itens colocado no carrinho atravezdo botão "adicionar carrinho" e da ao user uma pré visualização
            dos itens sem mudar de pagina  */
        MostrarDivCarrinho=()=>{
           
            let item=Produtos;
        if(r!=MudaPagina){    
            console.log(ArmazenaCarrinho)
         if(ArmazenaCarrinho.length!=0){ 
          for (let i = 0; i< ArmazenaCarrinho.length; i++) {
              for (let j = 0; j< item.length; j++){
                  if(item[j].id==ArmazenaCarrinho[i]){
                   MudaPagina[i]=item[j] ;
                   document.getElementById("mini").innerHTML+=`
                   <img id="imgcarrinho" src=`+item[j].imagem+
                   `></img><h4>`+item[j].nome+`</h4><h4>`+item[j].preco+`</h4>
                                    `;
                }}}}r = MudaPagina;  }else{}    
            document.getElementById("mini").style.visibility="visible";
            
              }        
            
        /* Deixar a div de pré visualização invivel quando o mouse e movido p/ fora do mbotão carrinho*/
        TirarDivCarrinho=()=>{
            
            document.getElementById("mini").style.visibility="hidden";
            document.getElementById("mini").innerHTML="";
            MudaPagina=[];
           
            
        }
        /* redireciona p/ a pagina de pagamento com um unico item escolhido */ 
        Comprar=(event)=>{
                console.log(event)    
            let item = Produtos;            
                var total =[];  
                for (let index = 0; index < item.length; index++) {
                      if (item[index].id == event) {
                          total=item[index];
                          console.log(total)
                          t= JSON.stringify(total)
                          localStorage.setItem("total",t);
                          
                          window.open("comprar.html");
                      }
                      
                  }

        }
        function Procura(){
            evento=document.getElementById("inputprocura").value;
            let primeiraletra = evento.slice(0,1);
            let pletramaiuscula=primeiraletra.toUpperCase();
            let resto = evento.slice(1);
            event=pletramaiuscula+resto;
            Item = Produtos;
            var achou =[]
            console.log(event);
            document.getElementById("con").innerHTML="";
            for (let index = 0; index < Item.length; index++) {
                  if (event==Item[index].nome) {
                    console.log(Item[index].nome);
                       achou[index] = Item[index]
                      
                      document.getElementById("con").innerHTML+=`
                      <div class="conteudoitem">
                      <img src=`+achou[index].imagem+`></img>
                        <div class="divProduto">     
                          <h2>`+achou[index].nome+`</h2>
                         
                          <h1>`+achou[index].preco+`</h1>
                         </div>
                          <div class="divBotao">
                          <button id="btnComprar" onclick="Comprar(`+achou[index].id+`)">Comprar</button>
                          <button id="btnCarrinho" onclick="Carrinho(`+achou[index].id+`)">Adicionar Carrinho</button>
                          </div>
                      </div>   
                      `





                      /* `<img id="imgcarrinho" src=`+achou[index].imagem+
                      `></img><h4>`+achou[index].nome+`</h4><h4>`+achou[index].preco+`</h4>
                      
                      <button id="btnComprar" onclick="Comprar(`+achou[index].id+`)">Comprar</button>
                      <button id="btnCarrinho" onclick="Carrinho(`+achou[index].id+`)">Adicionar Carrinho</button>
                     
                     `*/
                  }else{console.log("Nao ha resul")}
                
            }
        }
       function Categorias(event){
           item = Produtos;
          
          const evento = event;
           cat =[];
           i=0
           console.log(cat);
          document.getElementById("con").innerHTML="";
          for (let index = 0; index < item.length; index++) {
            if (evento==item[index].nome) {
                cat[i]=item[index];   
                i++;
              }   
                                  } 
         // console.log(cat);
          for (let index = 0; index < cat.length; index++) {
            document.getElementById("con").innerHTML+=`
            <div class="conteudoitem">
            <img src=`+cat[index].imagem+`></img>
              <div class="divProduto">     
                <h2>`+cat[index].nome+`</h2>
               
                <h1>`+cat[index].preco+`</h1>
               </div>
                <div class="divBotao">
                <button id="btnComprar" onclick="Comprar(`+cat[index].id+`)">Comprar</button>
                <button id="btnCarrinho" onclick="Carrinho(`+cat[index].id+`)">Adicionar Carrinho</button>
                </div>
            </div>   
            `
              
          }


       }
      
     
   // console.log( "p"+Produtos)    
    //Carregaritens();
    

    



