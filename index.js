const express = require ('express');
const cors=require('cors');
const {MongoClient}=require('mongodb')
const port = 8000;
const app = express();
app.use(express.json())
app.use(cors())

app.use((req,res,next)=>{
    console.log(`Chemin ${req.path}`);
    next();
})
 

// on vérifie s'il les données envoyées existent dans notre base de données
app.post('/formulaire',async function(req,res){
    const data=req.body
    const donne=JSON.stringify(data)
    const uri='mongodb://localhost:27017';
    const  client = new MongoClient(uri);

    await client.connect();

    const dbname='express';
    const collectionName = 'utilisateurs';

    const database = client.db(dbname);
    const collection = database.collection(collectionName)

    const documents = await collection.find(data).toArray();
    if(documents.length!==0){

        res.status(200).json();
    }else{
        res.status(504).json();
        
    }
})


//on envoie les infos de l'utilisateur
app.get('/info', async(req,res)=>{
    const data = req.query
    const uri='mongodb://localhost:27017';
    const  client = new MongoClient(uri);

    await client.connect();

    const dbname='express';
    const collectionName = 'utilisateurs';

    const database = client.db(dbname);
    const collection = database.collection(collectionName)

    const documents = await collection.find(data).toArray();
    res.json({documents});
})

// On enregistre les utilisateurs
app.post('/form', async function (req,res){
    const data = req.body
    const uri='mongodb://localhost:27017';
    const  client = new MongoClient(uri);

    await client.connect();

    const dbname='express';
    const collectionName = 'utilisateurs';

    const database = client.db(dbname);
    const collection = database.collection(collectionName)

    const recipes =[]
    recipes.push(data)

    const insert= await collection.insertMany(recipes)
    res.status(200).json();
})



app.use((req,res)=>{
    console.log("about");
    res.status(400).send('chemin non trouvé')
})


app.listen(port,()=>{
    console.log(`Serveur tourne sur le port ${port}`);
})