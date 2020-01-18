// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardContainer = document.querySelector(".cards-container");

axios.get(`https://lambda-times-backend.herokuapp.com/articles`)   
.then(response => {
    console.log(" I am the axios call from cards", response)
    Object.values(response.data.articles).forEach(items => {
        items.forEach(item => {
            cardContainer.append(cardCreater(item))
        })

    })
})




function cardCreater(obj){

// create element

const card = document.createElement("div"),
      headline = document.createElement("div"),
      author = document.createElement("div"),
      imgContainer = document.createElement("div"),
      image = document.createElement("img"),
      authorName = document.createElement("span")

// add classname
  
     card.classList.add("card");
     headline.classList.add("headline");
     author.classList.add("author");
     imgContainer.classList.add("img-container");


  //add textContent
  
    headline.textContent = obj.headline;
    image.setAttribute("src", obj.authorPhoto);
    authorName.textContent = "By" + obj.authorName;

    //append to parent

    card.append(headline);
    card.append(author);
    author.append(imgContainer)
    imgContainer.append(image);
    author.append(authorName);


return card

}



