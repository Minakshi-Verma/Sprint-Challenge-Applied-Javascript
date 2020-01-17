// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
.then(response=>{
    console.log(response)

       response.data.topics.forEach(item=>{

        //create element for new tab component
        const newTabComponent = document.createElement("div");

       //append to parent(class-tabs) but first grab the parent--
       const tabs = document.querySelector(".tabs");
       tabs.append(newTabComponent);

       // add class to the new tab component
       newTabComponent.classList.add("tab");

       //add textContent to the new tab component
       newTabComponent.textContent = "topic here"

       

    })

})

