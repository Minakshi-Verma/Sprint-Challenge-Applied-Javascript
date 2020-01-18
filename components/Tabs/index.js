// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topics = document.querySelector(".topics")
axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
.then(response=>{
    console.log("I am the axios call from the tab", response)
    response.data.topics.forEach(item=>{

   topics.append(createTab(item))
    })


})
.catch(error=>{
    console.log("error")
})

function createTab(text){

const div1 = document.createElement("div");
div1.classList.add("tab")
div1.textContent = text;
return div1


}