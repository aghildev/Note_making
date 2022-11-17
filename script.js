let submitEl = document.querySelector(".submit");
let titleEl = document.getElementById("text");
let descEl = document.getElementById("desc");
let notesEl = document.querySelector(".notes")
let notes = JSON.parse(localStorage.getItem("notes"))
if(notes){
  notes.forEach((element)=>{
    addNotes(element)
  })
}
submitEl.addEventListener("click", (e)=>{
    e.preventDefault();
    addNotes()
    titleEl.value = ""
    descEl.value = ""
})

function addNotes(obj) {
    let titleVal = titleEl.value;
    let descVal = descEl.value;
    if(obj){
      titleVal = obj.title;
      descVal = obj.desc
    }
    let card = document.createElement("div");
    card.classList.add("card");
    if(titleVal){
        card.innerHTML = `
        <h2>${titleVal}</h2>
        <p>${descVal}</p>
        <button class = "del">Delete</button>
        `
        notesEl.appendChild(card);
        updateLocalStorage()
    }
   let delEl = card.querySelector(".del")
   delEl.addEventListener("click", ()=>{
          card.remove();
          updateLocalStorage()
   })
}

function updateLocalStorage() {
    let card = document.querySelectorAll(".card");
    let arr = [];
    card.forEach((element)=>{
      arr.push({
        title:element.children[0].innerText,
        desc:element.children[1].innerText
      })
    })
    localStorage.setItem("notes", JSON.stringify(arr))
}