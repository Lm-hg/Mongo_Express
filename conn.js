async function envoi(url = "",data = {},nom) {
    const span=document.querySelector('span')
    const response = await fetch(url, {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data), 
    });
    if(response.status==200){
        span.style.display='none';
        window.location.href = './accueil.html?nom=' + nom
    }else{
        span.style.display='block';
        span.style.color='red';
    }
  }

const formulaire=document.querySelector('form')
formulaire.addEventListener('submit', async function(e){
    e.preventDefault();
    const nom=document.querySelector('#nom').value;
    const password=document.querySelector('#password').value;
    const data={

        nom:nom,
        password:password,
    };
    envoi('http://localhost:8000/formulaire',data,nom);

    

})
