// create the element and get elements
let bar = document.createElement("div");
const postWrap = document.querySelector(".post-wrap");
// set style
bar.style.height = "4px";
bar.style.width = "0px";
bar.style.backgroundColor = "#6633cc";
bar.style.position = "fixed";
bar.style.top = "0px";
bar.style.left = "0px";
bar.style.zIndex = "999";
bar.style.transition = "0.2s";

// append to body
document.body.append(bar);

// update state of bar
function updateBar() {
  // get height by text wrap
  const textHeight = postWrap.offsetHeight;
  // check current position
  const pagePositionY = window.pageYOffset;

  // get percent for bar
  const updateBar = (pagePositionY * 100) / textHeight;
  bar.style.width = `${updateBar}%`;
}

window.addEventListener("load", () => {
  updateBar();
  // check and handle scrolling
  document.addEventListener("scroll", updateBar);
});
