import dogs from "./public/data";
import { headerHtml } from "./public/utils";
class Dog {
  constructor(data) {
    Object.assign(this, data);
  }

  getDogHtml() {
    const { name, avatar, age, bio, hasBeenSwiped, hasBeenLike } = this;
    return `
        <!-- CARD -->
        <div class="card w-full max-w-[534px] mx-auto">
          ${headerHtml}
          <!-- DOG IMG -->
        <div id="dog-img" class="mx-2 relative">
          <img
            class="rounded-2xl w-full"
            src="${avatar}"
            alt="dog"
          />
          <!-- like-nope pics -->
          <div>
              <img class="sm:max-w-[233px] max-w-[180px] absolute top-[55px] left-2 rotate-[-35deg] opacity-0" src="./images/badge-nope.png" alt="badge">
              <img class="sm:max-w-[233px] max-w-[180px] absolute top-[55px] left-2 rotate-[-35deg] opacity-0" src="./images/badge-like.png" alt="badge">
          </div>
          <!--// like-nope pics //-->
          <!-- pic text -->
          <span class="absolute text-white bottom-4 left-5">
            <h1 class="text-[2rem] font-semibold">Teddy, 30</h1>
            <p class="text-2xl mt-2">How you doin?</p>
          </span>
        </div>
        <!--// DOG IMG //-->
          <!-- BUTTONS -->
          <div class="py-6 flex justify-center gap-x-6 w-full">
              <button id="reject-btn" data-btn-name="${name}-reject" class="btn-swipe reject"></button>
              <button id="accept-btn" data-btn-name="${name}-accept" class="btn-swipe accept"></button>
          </div>
          <!--// BUTTONS //-->
      </div>
      <!--// CARD //-->
      </div>
        `;
  }
}
let dog = new Dog(dogs[0]);
function getNewDog() {
  let dogsClone = [...dogs];
  dogsClone.shift();
  console.log(dogsClone);
  console.log(dogs);
  return new Dog(dogsClone[0]);
}
document.addEventListener("click", (e) => {
  if (e.target.dataset.btnName) {
    getLikeOrRejectImg(e.target.dataset.btnName);
  }
});
function getLikeOrRejectImg(btnId) {
    dog.hasBeenSwiped = true
    render()
//   if (dogs.length > 0 && dog.hasBeenSwiped) {
//     setTimeout(() => {
//       dog = getNewDog();
//       render();
//     }, 1500);
//   }
}

function render() {
  document.getElementById("card-container").innerHTML = dog.getDogHtml();
}
render();
