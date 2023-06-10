class Dog {
  constructor(data) {
    Object.assign(this, data);
  }

  getDogHtml() {
    const { name, avatar, age, bio, hasBeenSwiped, hasBeenLiked } = this;
    return `
          <!-- CARD -->
          <div class="card w-full max-w-[534px] mx-auto">
          <header class="flex justify-between p-5">
          <img
            class="w-[34px] h-[34px]"
            src="./images/icon-profile.png"
            alt="profile"
          />
          <img class="w-[84px] h-42px" src="./images/logo.png" alt="profile" />
          <img
            class="w-[34px] h-[34px]"
            src="./images/icon-chat.png"
            alt="profile"
          />
          </header>
            <!-- DOG IMG -->
          <div id="dog-img" class="mx-2 relative">
            <img
              class="rounded-2xl w-full"
              src="${avatar}"
              alt="dog"
            />
            <!-- like-nope pics -->
            <div id="like-reject-imgs">
                <img class="badge hidden" src="./images/badge-nope.png" alt="badge">
                <img class="badge hidden" src="./images/badge-like.png" alt="badge">
            </div>
            <!--// like-nope pics //-->
            <!-- pic text -->
            <span class="absolute text-white bottom-4 left-5">
              <h1 class="text-[2rem] font-semibold">${name}, ${age}</h1>
              <p class="text-2xl mt-2">${bio}</p>
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

export default Dog;
