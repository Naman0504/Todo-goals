const goalList = document.querySelector(".goal-list");
const inp = document.querySelector("#input-val");
const addBtn = document.querySelector("#btn");
const closeBtn = document.querySelector(".closeBtn");
const check = document.querySelector(".goal-checkbox");
const goal = document.querySelector(".goal-container");
const progressBar = document.querySelector(".progress-bar-inside")

let count = 0;
let progress_bar=0;

addBtn.addEventListener("click", () => {
  if (inp.value !== "") {
    if (count < 3) {
      let goal = `<div class='goal-container'>
                    <div class='goal-desc'>
                    <div class='goal-checkbox'></div>
                    <p class='goal-text'>${inp.value}</p>
                    
                    </div>  
                    <button class='closeBtn'>&#10006;</button>
                </div>`;

      goalList.innerHTML += goal;
      inp.value = "";
      count++;
      updateProgress();
    }
  }
  if (count === 3) {
    addBtn.disable = true;
  }
});

goalList.addEventListener("click", (e) => {
  if (e.target.classList.contains("closeBtn")) {
    e.target.parentElement.remove();
    count--;
    updateProgress();
  }

  if (e.target.classList.contains("goal-checkbox")) {
     const goalText = e.target.nextElementSibling; // p element after checkbox
    if (goalText) {
      goalText.classList.toggle("completed");
    }
    
    e.target.classList.toggle('checked');
    updateProgress();

    
    

    console.log("Checkbox clicked", e);
  }
});

if (count < 3) {
  addBtn.disabled = false;
}





function updateProgress() {
  const allCheckboxes = document.querySelectorAll(".goal-checkbox");
  const checkedBoxes = document.querySelectorAll(".goal-checkbox.checked");


  const total = allCheckboxes.length;
  const checked = checkedBoxes.length;



  let percent = Math.round((checked / total) * 100);
  progressBar.style.width = `${percent}%`;


  // console.log(`Progress: ${percent}%`);
  
  progressBar.previousElementSibling.innerText = `${percent} %`;
}
