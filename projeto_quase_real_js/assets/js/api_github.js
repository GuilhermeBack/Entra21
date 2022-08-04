function renderiza_foto(foto) {
    const img_foto = document.getElementById('foto')
    img_foto.src = `${foto}`
}
fetch("https://api.github.com/users/gabrielback")
.then(response => response.json())
.then(data => {
    renderiza_foto(data.avatar_url)
    document.getEelementById('nome').innerText = data.name
})
.catch( error =>{
    console.error('algo deu errado na requisição', error);

}).finally(() => {
    console.warn('sempre cai aqui')
})