//lightbox
const newTaskBtnDOM = document.querySelector(".main-header");
const lightboxDOM = document.querySelector(".lightbox");
const lightboxCloseDOM = lightboxDOM.querySelector(".close");
const lightboxBackgroundDOM = lightboxDOM.querySelector(".background");
newTaskBtnDOM.addEventListener("click", () => {
  lightboxDOM.dataset.visible = true;
});
lightboxCloseDOM.addEventListener("click", () => {
  lightboxDOM.dataset.visible = false;
});
lightboxBackgroundDOM.addEventListener("click", () => {
  lightboxDOM.dataset.visible = false;
});
window.addEventListener("keyup", (e) => {
  if (e.key === "Escape") {
    lightboxDOM.dataset.visible = false;
  }
});
//task menu
const allTaskDOMs = document.querySelectorAll(".task");
let isMeniuOpen = false;

for (const taskDOM of allTaskDOMs) {
  const moreDOM = taskDOM.querySelector(".more");
  const moreActionsDOM = taskDOM.querySelector(".more-actions");
  if (moreDOM) {
    moreDOM.addEventListener("click", () => {
      moreActionsDOM.dataset.visible = "true";
    });
  }
}

window.addEventListener("click", () => {
  for (const taskDOM of allTaskDOMs) {
    taskDOM.querySelector(".more-actions").dataset.visible = "false;";
  }
});
