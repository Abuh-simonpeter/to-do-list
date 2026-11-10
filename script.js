const btn = document.getElementById("btn");
const inputField = document.querySelector("input")
const listContainer = document.querySelector(".list-container")


function addTask () {
    if (inputField.value === ""){

       alert("pls add task")
    
    }else{
        let list = document.createElement("div")
        list.classList = "list"
        list.innerHTML = `
                <span class="item-list">${inputField.value}</span>
                 <strong class="close">&times;</strong>
            `
            listContainer.prepend(list)

    }

    inputField.value = ""

   storage()
}

listContainer.addEventListener("click", (event)=> {

   if(event.target.tagName === "STRONG"){ 
    event.target.parentElement.remove()
   }
   storage()
   
})

listContainer.addEventListener("click", (event)=> {

    if(event.target.tagName === "DIV"){ 
     event.target.firstElementChild.classList.toggle("underline")
    }
    storage()

   });

   window.addEventListener("keydown", (event) => {
   
     console.log(event.key);

    if(event.key === "Enter"){
        addTask()
    }

   });

   function storage(){
      localStorage.setItem("data", listContainer.innerHTML)
      
   }

   function getStorage(){
      listContainer.innerHTML = localStorage.getItem("data")
   }

   getStorage()