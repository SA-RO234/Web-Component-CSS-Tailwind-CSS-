let MenuBtn = document.querySelector("#menu");
let BoxHistorys = document.querySelector("#ColorhistoryContainer");

MenuBtn.addEventListener("click", ()=>{
      BoxHistorys.classList.toggle("openboxHistory");
       const icon = MenuBtn.querySelector("i");
       icon.classList.toggle("fa-bars");
       icon.classList.toggle("fa-xmark");
});
//  54