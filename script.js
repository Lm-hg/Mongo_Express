async function envoi(url = "", data = {},page) {
    const response = await fetch(url, {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data), 
    });
    if(response.status==200){
        window.location.href= page
    }else{
        alert("VEUILLEZ REESSAYER")
    }
  }

const formulaire=document.querySelector('form')
const span=document.querySelector('span')
formulaire.addEventListener('submit',function(e){
    e.preventDefault();
    const nom=document.querySelector('#nom').value;
    const prenom=document.querySelector('#prenom').value;
    const password=document.querySelector('#password').value;
    const confirm=document.querySelector('#confirm');
    const avatar=document.querySelector('#avatar').value
    if(password!==confirm.value){
        span.style.display='block'
        span.style.color='red'
        confirm.value='';
    }else{
      span.style.display='none';
        const donnees={
          nom: nom,
          prenom:prenom,
          password:password,
          avatar:avatar,
        };
        envoi('http://localhost:8000/form',donnees,'./connexion.html')
    }
})
