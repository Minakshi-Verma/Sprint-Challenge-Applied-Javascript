// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component


// grab the header container and append header to it

    const headerContainer = document.querySelector(".header-container");

    headerContainer.append(Header());

function Header() {

    //create the elements--
    const header = document.createElement("div");
    const date = document.createElement("span");
    const heading = document.createElement("h1");
    const subInfo = document.createElement("span");

    //append to parent element---
     header.append(date);
     header.append(heading);
     header.append(subInfo);

     //add class names-----

     header.classList.add("header");
     date.classList.add("date");
     subInfo.classList.add("temp");

     //add textContent-----
     date.textContent = "SMARCH 28, 2019";
     heading.textContent = "Lambda Times";
     subInfo.textContent = "98°";
     
     //grab the header container and append header to it

    // const headerContainer = document.querySelector(".header-container");

    // headerContainer.append(header);
     
     return header
  


}




