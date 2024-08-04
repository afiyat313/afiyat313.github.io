/* .js files add interaction to your website */
var aboutList = [
  "We are a bunch of high school alumni's",
  "We wanted to make the resources and career advices we got and we regret didn't get accessible to y'all",
  "We want to make one of the tumultuous decisions of a high school student easier."
];
var about = document.getElementById("about");
var aboutBtn = document.getElementById("aboutBtn");
var count = 0;

if (aboutBtn) {
  aboutBtn.addEventListener("click", displayAbout);
}
function displayAbout() {
  about.innerHTML = aboutList[count];
  count++;

  if (count == aboutList.length) {
    count = 0;
  }
}
