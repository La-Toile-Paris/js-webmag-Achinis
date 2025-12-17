function getData() {
   fetch('data.json')
     .then((response) => {
       if (!response.ok) {
         throw new Error('Network response was not ok');
       }
       return response.json();
     })
     .then((data) => {       
      /// EXAM: COMPLÉTEZ LE CODE ICI ! 
      const journal = data;
      console.log(journal);

      // TODO 1: REMPLIR LE HEADER

let titleContainer = document.getElementById("nom-journal") ;
let title = data.title ;
titleContainer.innerHTML += title ;

let strapContainer = document.getElementById("phrase-accroche") ;
let strap = data.strap ;
strapContainer.innerHTML += strap ;

      // TODO 2: REMPLIR LA NAVIGATION

let navBarre = document.getElementById("themes-nav") ;
let buttonAll =`<button class="nav-theme-btn" id="btnAll">Tous</button>`

function navContainer(topics) { 

let nav = topics.title ;
let navIcon = topics.icon ;
let button = `<button class="nav-theme-btn">${navIcon} ${nav}</button>` ;

navBarre.innerHTML += button ;
} ;

navBarre.innerHTML += buttonAll ;

function afficherNav(array) {
        journal.topics.forEach(element => {
  navContainer(element)
});
};
      
afficherNav(journal) ;


      // TODO 3: REMPLIR L'ARTICLE PRINCIPAL

let heroContainer = document.getElementById("article-principal") ;
let hero = data.lead ;

function showLead(lead) {
  let heroImage = lead.imageHero ;
  let heroInfo = lead.description ;
  let heroTitle = lead.headline ;
  let heroBody = lead.body ;
  let heroAuthor = lead.author ;
  let heroDate = lead.date ;

  let leadArticle =`<img id="hero-image" src="${heroImage}" alt="Image de ${heroTitle}">
                <div class="hero-info">
                <p class="theme-badge">${heroInfo}</p>
                <h3 id="hero-titre">${heroTitle}</h3>
                <p id="hero-description">${heroBody}</p>
                <p id="hero-auteur">Par <strong>${heroAuthor}</strong> · ${heroDate}
                </p>                
                <button class="read-article-btn">lire l'Article</button></div>` ;
//pk ça centre pas tout
  heroContainer.innerHTML += leadArticle ;
}
showLead(hero) ;

      // TODO 4: REMPLIR LA GRILLE D'ARTICLES

let storiesContainer = document.getElementById("articles-grid") ;
let stories = data.stories ;

function showStory(story) {
  let storyImage = story.image ;
  let storyTitle = story.titre ;
  let storyBody = story.body ;
  let storyDescription = story.description ;
  let storyAuthor = story.author ;
  let storyDate = story.date ;
  let storyCard = `<div class="article-card">              
                <img src="${storyImage}" alt="Image de ${storyTitle}">
                <div class="article-content">
                  <h2 class="theme-badge">${storyTitle}</h2>  
                  <h3>${storyDescription}</h3>
                  <p>${storyBody}</p>
                  <p class="article-author">Par ${storyAuthor} · ${storyDate}</p>            
                  <button class="read-btn">Lire l'article</button>
                </div>
              </div>` ;

  storiesContainer.innerHTML += storyCard ;
}

stories.forEach(element => {
  showStory(element)
});

      // TODO 5: REMPLIR LES THEMES

let themesContainer = document.getElementById("themes-list")
let themes = data.topics ;

function showTheme(theme) {
  let themeTitle = theme.title ;
  let themeIcon = theme.icon ;
  let themeDescription = theme.description ;

  let themesCard = `<div class="theme-item">
                <h1>${themeIcon}</h1>
                <h3>${themeTitle}</h3>
                <p>${themeDescription}</p>
              </div>`

  themesContainer.innerHTML += themesCard ;
}

themes.forEach(element => {
  showTheme(element)
});

      // TODO 6: REMPLIR LES AUTEURS

let authorContainer = document.getElementById("authors-list") ;
let author = data.contributors ;

function showAuthor(author) {
  let authorImage = author.image ;
  let authorName = author.firstName ;
  let authorRole = author.expertise ;
  let authorBio = author.bio ;
  let authorStats = author.articles ;
  let authorFollowers = author.followers ;

  let authorCard = `<div class="author-card">               
                <img class="author-image" src="${authorImage}" alt="Photo de ${authorName}">
                <h3>${authorName}</h3>
                <p class="author-role">${authorRole}</p>
                <p class="author-bio">${authorBio}</p>
                <p>Articles <br>${authorStats}</p>
                <p>Followers <br>${authorFollowers}</p>
                <p class="author-socials">
                  <a href="#">📷 Instagram</a>
                  <a href="#">🕊️ Twitter</a>
                  <a href="#">💼 LinkedIn</a>
                </p>
              </div>` ;
           
  authorContainer.innerHTML += authorCard ;
}

author.forEach(element => {
  showAuthor(element)
});

      // TODO 7: REMPLIR LE BOUTON CALL TO ACTION

let ctaContainer = document.getElementById("call-to-action") ;
let cta = data.cta ;

function showCta(cta) {
  
  let ctaText = cta.text
  let ctaLabel = cta.label

  let ctaCard = `<p>${ctaText}</p>
              <button class="cta-button">${ctaLabel}</button>`

  ctaContainer.innerHTML += ctaCard ;

  let ctaAlert = document.querySelector(".cta-button") ;
ctaAlert.addEventListener("click", function () {
  alert("Merci pour votre abonnement");
})

}

showCta(cta) ;

      /// FIN DU CODE
     })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();

 // BONUS: 
 // Alert quand on appuie sur le bouton CTA
 // Fonction de filtrage par thème
 // Classer les articles par popularité ou notation
