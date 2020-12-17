
function verificar(){

  var txtAno = window.document.getElementById('txtano')
  var data = new Date()
  var ano = data.getFullYear()
  var res = window.document.getElementById('res')

  if(txtAno.value.length == 0 || Number(txtAno.value) > ano){
  window.alert(`Dados incorretos!`)

  }else{
    var fsex = window.document.getElementsByName('radsex')
    var idade = ano - Number(txtAno.value)
    var gênero = ''
    var img = window.document.getElementById('imagem')
    if(fsex[0].checked){
      gênero = 'Masculino'
      document.body.style.background = 'darkblue'



      // CRIANÇA
      if(idade >= 0 && idade < 14){
        
        img.src ='foto-bebe-m.png'
        res.innerHTML = `<strong> Criança: ${gênero} com ${idade} anos</strong>`

      // JOVEM
      }else if (idade < 35){
        res.innerHTML = `<strong> Jovem: ${gênero} com ${idade} anos</strong>`
        img.src ='foto-jovem-m.png'

      // ADULTO
      }else if(idade < 65){
        res.innerHTML = `<strong> Adulto: ${gênero} com ${idade} anos</strong>`
        img.src='foto-adulto-m.png'

      // IDOSO
      }else{
        res.innerHTML = `<strong> Idoso: ${gênero} com ${idade} anos</strong>`
        img.src='foto-idoso-m.png'
        
      }
      
    }else if(fsex[1].checked){
      gênero = 'Feminino'
      document.body.style.background = 'pink'

   // CRIANÇA
      if(idade >= 0 && idade < 14){
        res.innerHTML =`<strong> Criança: ${gênero} com ${idade} anos</strong>`
        img.src = 'foto-bebe-f.png'
        

    // JOVEM
      }else if (idade < 35){
        res.innerHTML =`<strong> Jovem: ${gênero} com ${idade} anos</strong>`
        img.src = 'foto-jovem-f.png'


    // ADULTA
      }else if(idade < 65){
        res.innerHTML =`<strong> Adulta: ${gênero} com ${idade} anos</strong>`
        img.src = 'foto-adulto-f.png'

    // IDOSA
      }else{
        res.innerHTML =`<strong> Idosa: ${gênero} com ${idade} anos</strong>`
        img.src = 'foto-idoso-f.png'
        
      }
    }
    res.style.textAlign = 'center'
   // res.innerHTML = `<strong>Detectamos: ${gênero} com ${idade} anos</strong>`
  }


}