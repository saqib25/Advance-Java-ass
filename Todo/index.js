// localStorage.tasks=JSON.stringify([]);
updateList();

function addEvent(){
    //take input from input box
    var input= document.getElementById("Task_input");
    // take task from localstorage and store task(array)
    
    let taskArr= JSON.parse(localStorage.tasks); //string ko array me convert krta hai

    

    //push new element into an array
    function addtodo(){
        if(input.value==0){
         alert("Enter here plzz");   
        }
        else{
            taskArr.push(input.value);
        }
    }
    addtodo();

    //update tgat array to local storage

    localStorage.tasks=JSON.stringify(taskArr);
   

    //empty the input box

    input.value="";

    //update list
    updateList();
    

}
function updateList(){
    // get refrence ul (tasks)
    let ul = document.getElementById("tasks")
    //get tasks from local storage
    let taskArr= JSON.parse(localStorage.tasks); 
    let length= taskArr.length -1;
    let html="";

    for (let i=length; i>=0; i--){
    // console.log()
    html+= '<li class="list-group-item" id="' + i + ' ">'+taskArr[i]+'<span class="btn-danger btn-sm float-right" onclick="removeItem(this)" >Remove</span></li>';    
    }
    ul.innerHTML=html;
}
function removeItem(span_tag){
let index_id=span_tag.parentElement.id;
// get array tasks
let taskArr= JSON.parse(localStorage.tasks);
//update task array (remove item)
taskArr.splice(index_id,1);
//update local storage new array
localStorage.tasks= JSON.stringify(taskArr);
// stringify array ko convert krta h string me or parse method strig ko convert rta h arrray me

updateList();
}





