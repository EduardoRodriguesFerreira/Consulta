
//botão
var add = document.querySelector('#Adicionar')
var Pes = document.querySelector('#Pesquisar')
//

// evento click

add.addEventListener('click' , function(){
   //Recuperando valores 
    var ano= document.querySelector('.ano').value
    var mes=document.querySelector('.mes').value
    var dia=document.querySelector('.dia').value
    var tipo=document.querySelector('.tipo').value
    var descrição=document.querySelector('.descriçao').value
    var valor=document.querySelector('.Valor').value
   /////

   //atribuir estes valores  numa class
class despesa{
    constructor(ano,mes,dia,tipo,descrição,valor){
        this.ano =ano
        this.mes =mes
        this.dia = dia
        this.tipo=tipo
        this.descrição=descrição
        this.valor=valor
    }
      validarDados(){
            for (let i in this) {
              console.log(i)

              if(this[i]==undefined ||this[i]==null || this[i]=="" ){
              
                    return false
              }
            }
            return true
      }

}


///adicionando valores no objeto
   var Despesa = new despesa(

    ano,
    mes,
    dia,
    tipo,
    descrição,
    valor

   )
   
  if(Despesa.validarDados()) {
    bd.gravar(Despesa)
    alert('Enviado com sucesso.')
    
    var ano= document.querySelector('.ano').value=""
    var mes=document.querySelector('.mes').value=""
    var dia=document.querySelector('.dia').value=""
    var tipo=document.querySelector('.tipo').value=""
    var descrição=document.querySelector('.descriçao').value=""
    var valor=document.querySelector('.Valor').value=""
  }
  else{
    alert('Preencha todos os dados.')
  }
 

   /////


})

class Bd {
   constructor(){
    let id = localStorage.getItem('id')

    if(id==null){
        localStorage.setItem('id',0)
    }
   }
   getProximoId(){
    let proximo = localStorage.getItem('id')
  return parseInt(proximo) + 1
}


  gravar(d){
    var id = this.getProximoId()
    localStorage.setItem(id, JSON.stringify(d)) 
    localStorage.setItem( "id", id)
    }
    /// recuperação dos dados no localstorage
    recuperarRegistros(){

       let despesas = Array()



      let id = localStorage.getItem("id")
      
      // recuperar a despesa
      for(let i =1; i<= id; i++){
       let despesa = JSON.parse(localStorage.getItem(i))
     

         if(despesa == null){
          continue
         }
         despesas.push(despesa)
         }
         return despesas
      
      }

      pesquisar(despesa){

      
           let despesasF = Array()
           despesasF =this.recuperarRegistros()

        
           console.log(despesa)
           console.log(despesasF)

           //ano
            if(despesa.ano != ""){
              despesasF = despesasF.filter(d => d.ano == despesa.ano)
            }
           
          //mes

          if(despesa.mes != ""){
            despesasF = despesasF.filter(d => d.mes == despesa.mes)
          }
          //dia

          if(despesa.dia != ""){
            despesasF = despesasF.filter(d => d.dia == despesa.dia)
          }

          //tipo
          if(despesa.tipo != ""){
            despesasF = despesasF.filter(d => d.tipo == despesa.tipo)
      }

         //descriçao
         if(despesa.descrição != ""){
          despesasF = despesasF.filter(d => d.descrição == despesa.descrição)
         }
        //valor
        if(despesa.valor != ""){
          despesasF = despesasF.filter(d => d.valor == despesa.valor)
        }
      return despesasF
        
    }}

  function carregaListaDespesas(){

    let despesas = Array()
    despesas = bd.recuperarRegistros()
    var lista = document.querySelector("#val")

  //percorrendo o array

  despesas.forEach(function(d){
  //Criando a linha

   let linha = lista.insertRow()

   //criar as colunas

   linha.insertCell(0).innerHTML= d.dia + '/' + d.mes + '/'+ d.ano 
   
   switch(d.tipo){
    case "1": d.tipo ="Alimentação"

    break

    case "2": d.tipo ="Educação"

    break

    case "3": d.tipo ="Lazer"

    break

    case "4": d.tipo ="Saúde"

    break

    case "5": d.tipo ="Transporte"

    break
    
    
    
    

   }
   linha.insertCell(1).innerHTML = d.tipo 


   linha.insertCell(2).innerHTML = d.descrição 
   linha.insertCell(3).innerHTML = "R$"+d.valor


  
  })


  }
  
  Pes.addEventListener('click' , function(){
  let ano= document.querySelector('.ano').value
  let mes=document.querySelector('.mes').value
  let dia=document.querySelector('.dia').value
  let tipo=document.querySelector('.tipo').value
  let descrição=document.querySelector('.descriçao').value
  let valor=document.querySelector('.Valor').value
       
  class despesa{
    constructor(ano,mes,dia,tipo,descrição,valor){
        this.ano =ano
        this.mes =mes
        this.dia = dia
        this.tipo=tipo
        this.descrição=descrição
        this.valor=valor
    }}

  let despesas = new despesa (ano,mes,dia,tipo,descrição,valor)
   
  
  
   
    var lista = document.querySelector("#val")
    despesas=  bd.pesquisar(despesas)

    lista.innerHTML =""
  //percorrendo o array

  despesas.forEach(function(d){
  //Criando a linha

   let linha = lista.insertRow()

   //criar as colunas

   linha.insertCell(0).innerHTML= d.dia + '/' + d.mes + '/'+ d.ano 
   
   switch(d.tipo){
    case "1": d.tipo ="Alimentação"

    break

    case "2": d.tipo ="Educação"

    break

    case "3": d.tipo ="Lazer"

    break

    case "4": d.tipo ="Saúde"

    break

    case "5": d.tipo ="Transporte"

    break
    
   }



   
   linha.insertCell(1).innerHTML = d.tipo 


   linha.insertCell(2).innerHTML = d.descrição 
   linha.insertCell(3).innerHTML = "R$"+d.valor


  
  })

  })


  var bd = new Bd()

 
   
   