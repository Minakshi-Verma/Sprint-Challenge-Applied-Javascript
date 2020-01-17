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

entryPoint = document.querySelector(".cards-container")


axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
.then(response=>{
console.log("I am the response from axios call", response)

for(let i= 0; i<response.data.articles; i++){
    response.data.articles.forEach(item =>{
       response.data.articles.forEach(item =>{
       console.log(item)
    // newArticle = articleCreater(item);
    // entrypoint.append.newArticle

})
        newArticle = articleCreater(item);
        entrypoint.append.newArticle
    
    }) 

}

    
})
.catch(error => {
    console.log("The data was not returned", error);
  });


function articleCreater(obj){
    //create Elements----
    const card = document.createElement("div");
    const headline = document.createElement("div");
    const author = document.createElement("div");
    const imgContainer = document.createElement("div");
    const image = document.createElement("img");
    const authorName = document.createElement("span");

    //append new elements to their parents---

    card.append(headline);
    card.append(author);
    author.append(imgContainer);
    imgContainer.append(image);
    author.append(authorName);


    //add classes to created elements--

    card.classList.add("card");
    headline.classList.add("headline");
    author.classList.add("author");
    imgContainer.classList.add("img-container");

    //add textContent-----
    headline.textContent =obj.data.article.headline;
    
    image.setAttribute("src", obj.data.article.authorPhoto);
    authorName.textContent ="By" + obj.data.article.authorName;

return card
}