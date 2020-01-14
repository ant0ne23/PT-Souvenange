const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()



app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const news =
[
  {
  
    "id": 10,
    "author" : "Talbot",
    "title" : "Convention signée à Montpellier",
    "description" : "Nous avons signé notre 29ème convention de partenariat avec le CHU de Montpellier ",
    "date" : "posté le 03 octobre 2019",
    "img" : '/chuMontpellier.jpg',

    
  },
  
   {
    "id": 20,
    "author" : "Talbot",
    "title" : "Nouvelle convention de signée à Annemasse",
    "description" : "Nous venons de signer une nouvelle convention de partenariat avec l 'Hôpital Privé Pays de Savoie à Annemasse. Merci aux personnels pour leur confiance et leur bienveillance, et aux bénévoles du secteur pour leur implication",
    "date" : "posté le 20 juin 2018",
    "img" : '/Annemasse.jpg',
   },

  
   {
   "id": 30,
    "author" : "Talbot",
    "title" : "Convention signée à Laval",
    "description" : "Cet été, Souvenange a signé sa 27ème convention de partenariat avec le CH de Laval ",
    "date" : "posté le 16 septembre 2019",
    "img" : '/laval.jpg',
   } 
 ]

 const mecenes =
[
  {
  
    "id": 10,
    "author" : "Talbot",
    "title" : "Regard d'auteur",
    "description" : "Regard d’auteur est né grâce à une communauté de photographes ayant un objectif commun : celui de rendre ses lettres de noblesse à la photographie sociale en France",
    "content" : "jui le CONTENU",
    "img" : '/regarddauteur.jpg',

  },
 ]

 const friends =
 [
   {
     "id" : 1,
     "lien" : "https://assoviviane.jimdofree.com/",
     "description" : "L'Association Viviane est une association à but non lucratif siégeant en principauté de Monaco. Elle a pour but de soutenir les familles d'enfants gravement malades et/ou handicapés ainsi que les parents en deuil d'enfants : soutien moral, aide administrative, financière… À noter : pour les parents trop éloignés géographiquement de l'Association Viviane, notre association s'est forgée au fil des ans un très large réseau d'associations de parents en deuil francophones (France métropolitaine, DOM-TOM, Canada, Belgique, Suisse). Nos membres seront toujours heureux de vous aiguiller vers l'association ou le groupe de parole le plus proche de chez vous si vous le désirez, il suffit de nous adresser un simple mail à assoviviane@gmail.com !",
     "img" : "/viviane.png",
     
   },
  ]

 const personnes =
[
  {
  
    "id": 1,
    "nom" : "Delarbre Faugeras",
    "prenom" : "Hélène",
    "description" : "PRÉSIDENTE",
    "img" : '/helene.jpg',

    
  },
  
   {
    "id": 2,
    "nom" : "Faugeras",
    "prenom" : "Jean",
    "description" : "TRÉSORIER/SECRÉTAIRE",
    "img" : '/jean.jpg',
   },

   {
    "id": 3,
    "nom" : "Faugeras",
    "prenom" : "Arthur",
    "description" : "WEBMASTER",
    "img" : '/arthur.jpg',
   },
 ]

 const article =
 [
   
  {
    "id": 20,
    "author" : "Talbot",
    "title" : "Nouvelle convention de signée à Annemasse",
    "description" : "Lors de la journée mondiale du deuil périnatal, une équipe de France 3 est venue à Verneuil rencontrer Camille, qui a perdu récemment son fils à son 7e mois de grossesse…",
    "content" : "jui le CONTENU",
    "lien" : "https://actu.fr/normandie/verneuil-sur-avre_27679/mort-bebe-eure-verneuil-deuil-perinatal-eure-souvenir-photographique-drame_28781844.html?fbclid=IwAR1LpcHgwCscSDjPQgsKZOcPEhSXQ_M2pkk6fdeJ0RMBwZmXln0euG8hlxg",
    "img" : '/articlefr.jpg',
    "logo" : '/actufr.png'
   },
  ]

 const temoignages =
 [
   {
     "id" : 1,
     "title" : "Témoignage de Rhéa après son accompagnement en maternité",
     "description" : "Petit bonhomme, \n Il y a une goutte d’eau sur ton doigt. Tes mains étaient près de ton visage, c’est une larme peut être. \n Tandis que je retouche les photos de toi, et que parfois je me sens triste, cette goutte sur ta peau m’a fait l’effet d’un océan de vie. \n Merci p’tit gars. \n ------------------------- \n Cher petit bonhomme, \n ..."
   },
{
     "id" : 2,
     "title" : "Retour émouvant de Charlotte",
     "description" : "Bonjour Anne, \n Par ce mail, je souhaite sincèrement et du fond du cœur vous remercier pour l'accompagnement que vous avez fait le mardi 21 Mai 2019. Maximilien et moi avons connu le pire drame qu'il puisse arriver à une famille, celle de perdre son bébé. \n Notre toute petite fille était malade ; nous avons fait le choix de l'amour pour qu'elle puisse être en paix. \n \n Votre travail a consisté à prendre des photos de mon bébé mort. Cela peut sembler trivial et peut en choquer plus d'un. \n Mais quand je vois les photos, je ne peux que vous féliciter de votre action bénévole ! \n Vous avez su capter et retranscrire les moments d'amour et de tendresse, les regards sereins que j'ai eus envers Aliénor. \n C'est le premier et le seul souvenir que j'ai d'elle, et cela rend votre intervention fantastique. \n"
   },
{
    "id" : 3,
    "title" : "Témoignage d'une maman après l'intervention des bénévoles de l'association",
    "description" : "J’ai accouché à 32 SA par césarienne en mars dernier suite à une prééclampsie \n \n 10 jours après mon bébé est décédé. Ça a été très très dur pour moi, mon mari ainsi que notre entourage. \n Quelques mois après, j’ai entendu parler de Souvenange dans une émission télé, sans tarder j’ai envoyé un mail et j’ai obtenu une réponse très rapidement en m’expliquant la démarche à suivre pour envoyer mes photos. \n Merci à toute l’équipe de Souvenange pour ce que vous faites. \n Merci à Hélène pour votre réactivité et à Laurence pour ces retouches. \n Â la réception des photos j’en ai pleuré d’émotions…., elles sont démédicalisées et plus douce à voir. \n Mon mari et moi remercions toute l’équipe du fond du cœur. \n"
  }
 ]
 
 app.get('/api/friends',(req,res) => 
 {
   res.send(friends.map(({id,lien,description,img}) => ({id,lien,description,img})))
 })

 app.get('/api/news',(req,res) => 
 {
   res.send(news.map(({id,title,date,description,img }) => ({id,title,date,description,img})))
 })

  
 app.get('/api/mecenes',(req,res) => 
 {
   res.send(mecenes.map(({id,title,description,img }) => ({id,title,description,img})))
 })

 app.get('/api/article',(req,res) => 
 {
   res.send(article.map(({id,title,lien,description,img,logo }) => ({id,title,lien,description,img,logo})))
 })

 app.get('/api/trombinoscope',(req,res) => 
 {
   res.send(personnes.map(({id,nom,prenom,description,img }) => ({id,nom,prenom,description,img})))
 })

 app.get('/api/temoignages',(req,res) =>{
  res.send(temoignages.map(({id,title,description}) => ({id, title, description})))
})


 

const todos = [
  { id: 0, title: 'finish the documentation' },
  { id: 1, title: 'an other' },
]

app.get('/api/todos', (req, res) => {
  res.send(todos)
})

app.post('/api/todo', function(req, res) {
  const { title } = req.body

  if (!title) {
    res.status(500)
    res.send(null)
    return
  }
  const todo = {
    id: todos.length,
    title,
  }
  todos.push(todo)
  res.send(todo)
})

app.listen(5000, function() {
  console.log('Example app listening on port 5000!')
})
