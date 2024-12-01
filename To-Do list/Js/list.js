function addTask(){
const inputVal=document.getElementById("input").value;
if(inputVal==""){
    alert("Please Enter Any Task");
}
else{
    const newTask=document.createElement("li");
    const storeTask=document.getElementById("storeTask");
    storeTask.appendChild(newTask);
    newTask.textContent=inputVal;
    document.getElementById("input").value=""
    
    deleteTask(newTask)
}

}
function deleteTask(newTask){
    const deleteBtn=document.createElement("button")
    deleteBtn.textContent="Delete"
    newTask.appendChild(deleteBtn)
    deleteBtn.onclick=function(){
        newTask.remove()
    }
    deleteBtn.addEventListener('onkeydown',(event)=>{
        if(event.key==="Enter"){
            deleteTask(newTask)
        }
    })
}



