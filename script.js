let allFilter=document.querySelectorAll(".filter");
let Tc=document.querySelector(".ticket-container");
let modalVisible=false;

for(let i=0;i<allFilter.length;i++){
    allFilter[i].addEventListener("click",filterHandler);
}

function filterHandler(e){
    // let filterColor=e.currentTarget.children[0].classList[0].split("-")[0];
    // Tc.style.backgroundColor=filterColor;
    let span=e.currentTarget.children[0];
    let style=getComputedStyle(span);
    Tc.style.backgroundColor=style.backgroundColor;
}

let selectedPriority="pink";

//  let addBtn=document.querySelector(".add");

//  addBtn.addEventListener("click",showModal)

// function showModal(e){
//     if(!modalVisible){

// let modal = document.createElement("div");
// modal.classList.add("modal");
// modal.innerHTML = `<div class="task-to-be-added" data-typed="false" contenteditable="true">Enter your task here</div>
//     <div class="modal-priority-list">
//         <div class="modal-pink-filter modal-filter active"></div>
//         <div class="modal-blue-filter modal-filter"></div>
//         <div class="modal-green-filter  modal-filter"></div>
//         <div class="modal-yellow-filter  modal-filter"></div>
//     </div>`;
// TC.appendChild(modal);

let taskModal=document.querySelector(".task-to-be-added");
taskModal.addEventListener("keypress",addTicket);
taskModal.addEventListener("click",function(e){
    if(e.currentTarget.getAttribute("data-typed")=="false"){
        e.currentTarget.innerText= "";
        e.currentTarget.setAttribute("data-typed","true");
    }
});
//     }



// }






// modalVisible=true;

function addTicket(e){
    if(e.key=="Enter" && e.shiftKey==false && e.currentTarget.innerText.trim()!=""){
        let task=e.currentTarget.innerText;
        let ticket=` <div class="ticket">
        <div class="ticket-color ticket-color-${selectedPriority}"></div>
        <div class="ticket-id">123</div>
        <div class="task">${task}</div>
    </div>`;
    
    document.querySelector(".modal").remove();
    Tc.innerHTML=Tc.innerHTML + ticket;
    }
    else if(e.key=="Enter" && e.shiftKey==false){
        e.preventDefault();
        alert("Please Enter Something");
    }
}



let modalFilters=document.querySelectorAll(".modal-filter");
for(let i=0;i<modalFilters.length;i++){
    modalFilters[i].addEventListener("click",selectPriority);
}

function selectPriority(e){
    let activeFilter=document.querySelector(".modal-filter.active");
    activeFilter.classList.remove("active");
    selectedPriority=e.currentTarget.classList[0].split("-")[1];
    e.currentTarget.classList.add("active");
    e.currentTarget.click();
    e.currentTarget.focus();
}