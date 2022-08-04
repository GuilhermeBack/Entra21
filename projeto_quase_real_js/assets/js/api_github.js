function renderiza_foto(foto) {
    const img_foto = document.getElementById('foto')
    img_foto.src = `${foto}`
}
const headers = new Headers();
headers.append ('Authorization', 'token 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');

fetch("https://api.github.com/users/guilhermeback",
{
    headers: headers
}
)
.then(response => response.json())
.then(data => {
    console.log(data)
    renderiza_foto(data.avatar_url)
    document.getEelementById('nome').innerText = data.name
})
.catch( error =>{
    console.error('algo deu errado na requisição', error);

}).finally(() => {
    console.warn('sempre cai aqui')
})