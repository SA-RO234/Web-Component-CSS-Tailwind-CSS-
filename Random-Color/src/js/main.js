import { getRandomColor } from "./utils/color.js";

const btnRandom = document.querySelector("#btnRandomColor");
const TextColor = document.querySelector("#textColor");
const bodyShowColor = document.querySelector("#boxColor");
const btncopy = document.querySelector("#copyColor");
const alertMess = document.querySelector("#alert");
const Allhistory  = document.querySelector("#Color-history");
const itemHis = document.querySelector("#itemhistory");



let currentHistory = JSON.parse(localStorage.getItem("ColorHistory")) || [] ;
let CurretColor = localStorage.getItem("Color") || "#ffffff";

function applyColor(Color){
    bodyShowColor.style.backgroundColor = Color;
    TextColor.textContent = Color; 
}

function saveColorHistory (Color){
currentHistory.unshift(Color);
  if (currentHistory.length > 54) {
    currentHistory = currentHistory.slice(0, 54);
  }

  localStorage.setItem("ColorHistory", JSON.stringify(currentHistory));
}

btnRandom.addEventListener("click",()=>{
     CurretColor = getRandomColor();
     localStorage.setItem("Color",CurretColor);
     applyColor(CurretColor);
     saveColorHistory(CurretColor);
     renderHistory();
});

// Initialize Color
applyColor(CurretColor);
renderHistory();

btncopy.addEventListener("click", async ()=>{
   copyToClipboard(TextColor.textContent);
})


function renderHistory() {
  Allhistory.innerHTML = currentHistory.map((item) => `
        <div 
          
          class="item itemhistory cursor-pointer text-center text-white rounded-2xl px-7 py-5 lowercase w-[130px] h-[70px]"
          style="background-color:${item}"
          onclick="navigator.clipboard.writeText('${item}')">
          ${item}
        </div>
      `
    ).join("");

      const items = Allhistory.querySelectorAll(".itemhistory");

      items.forEach((i)=>{
         i.addEventListener("click",()=>{
           copyToClipboard(i.textContent);
         })
      })

}

async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    alertMess.classList.add("show");
    setTimeout(() => alertMess.classList.remove("show"), 1500);
  } catch (err) {
    console.error("Failed to copy:", err);
  }
}



