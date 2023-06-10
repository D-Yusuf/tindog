import dogsData from "./public/data.js";
import Dog from "./public/Dog.js";
let canRate = true;
let dog = new Dog(dogsData[0]); //first dog
let dogsClone = [...dogsData]
function getNewDog() {
  dogsClone.shift();
  return dogsClone.length > 0 ? new Dog(dogsClone[0]) 
  : dogsClone = [...dogsData], new Dog(dogsClone[0]) 
}

document.addEventListener("click", (e) => {
    // Get like button name
  if (e.target.dataset.btnName) {
    useLikeRejectBtns(e.target.dataset.btnName);
  }
});

function useLikeRejectBtns(btnId) {
  const likeRejectImg = document.getElementById("like-reject-imgs");
  //Check if user can rate so spamming rate doesnt happen
  if (canRate) { 
  // Get boolean values
    dog.hasBeenSwiped = true;
    dog.hasBeenLiked = btnId.includes(dog.name) && btnId.includes("accept");

    // Show Like or Nope images after cliking on heart or cross buttons
    if (!dog.hasBeenLiked) {
      likeRejectImg.innerHTML = `
               <img class="badge" src="./images/badge-nope.png" alt="badge">
               `;
    } else {
      likeRejectImg.innerHTML = `
               <img class="badge" src="./images/badge-like.png" alt="badge">
       `;
    }
    canRate = false
    setTimeout(()=>{
        if (dog.hasBeenSwiped) {
          dog = getNewDog();
          console.log(dog)
          canRate = true
          render();
        }
    }, 1500)
  }

}


function render() {
  document.getElementById("card-container").innerHTML = dog.getDogHtml();
}
render();
