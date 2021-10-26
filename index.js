// chrome://extensions/

let myLeads =[];
const inputEl = document.getElementById("text-el")
const  inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
console.log(leadsFromLocalStorage);

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage;
    renderLeads();
}

deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear();
    myLeads = [];
    renderLeads();
})

inputBtn.addEventListener("click",function(){
   myLeads.push(inputEl.value);
   inputEl.value = "";

   localStorage.setItem("myLeads",JSON.stringify(myLeads));
   renderLeads();
})



function renderLeads(){
    let listItem = "";

    for(let i=0; i<myLeads.length; i++){
        listItem += `
        <li> 
            <a target = '_blank' href=' ${myLeads[i]} '>  
                ${myLeads[i]}  
            </a>
        </li>
        `;
        
    }
    
    ulEl.innerHTML = listItem;
}

