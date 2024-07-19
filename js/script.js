let userTexts = document.getElementsByClassName("user_text");
let userPics = document.getElementsByClassName("user_pic");

function showReview(target) {
  for (let userPic of userPics) {
    userPic.classList.remove("active_pic");
  }
  for (let userText of userTexts) {
    userText.classList.remove("active_text");
  }
  let i = Array.from(userPics).indexOf(target);

  if (i !== -1) {
    userPics[i].classList.add("active_pic");
    userTexts[i].classList.add("active_text");
  }
}
