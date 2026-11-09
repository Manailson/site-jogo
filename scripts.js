let nome = document.querySelector(".nome")
let personagem = document.querySelector(".personagem")
// ()= funciona como capsula transportadora
function escolherPersonagem(nomePersonagem, imagemPersonagem, cor,/*fundo*/) {
   console.log(nomePersonagem, imagemPersonagem)
   nome.innerHTML = nomePersonagem
   personagem.src = imagemPersonagem
   nome.style.color = cor
   // document.body.style.backgroundImage = `url(${fundo})`

}

function lerFoto(foto) {

   let leitor = new FileReader()
   leitor.readAsDataURL(foto.files[0])
   leitor.onload = async function () {
      let desenho = await puter.ai.txt2img("transforme a pessoa dessa foto em um personagem de videogame: contorno preto grosso, cores vivas, meio corpo, mantendo o rosto meio parecido. Fundo totalmente transparente: sem cenário, sem chão e sem sombra", {
         provider: 'openai',
         model: "replicate:openai/gpt-image-2.5-flare",
         input_image: leitor.result,
         quality: "medium",
         providerOptions: { background: "transparent" }
      })
      escolherPersonagem("voce",deseenho,"#b9b604")
   }
}
//   innerHTML = coloca algio dentro do HTML
//  src = coloca algo dentro do src da imagem
// async puter cilicp aqui nj servudor