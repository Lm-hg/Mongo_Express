const url = new URLSearchParams(window.location.search);
const nom = url.get("nom");

async function afficher() {
    const div=document.querySelector('div')
    const reponse = await fetch(`http://localhost:8000/info/?nom=${encodeURIComponent(nom)}`);
    const user = await reponse.json();
    console.log(user.documents[0].prenom);
    const h1=document.createElement('h1')
    h1.innerHTML=`Bienvenue ${nom}`
    div.appendChild(h1)
    const img=document.createElement('img');
    img.setAttribute('src',user.documents[0].avatar);
    div.appendChild(img);

}

afficher();
