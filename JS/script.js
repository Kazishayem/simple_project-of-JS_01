let form = document.querySelector('#task_form');
let TaskInput = document.querySelector('#new_task');
let TaskFilter = document.querySelector('#task_filter');
let tasklist = document.querySelector('ul');
let clearbtn = document.querySelector('#clear_task_btn');


//define Event Listeners

form.addEventListener('submit', addTask);
tasklist.addEventListener('click', removeTask);

//define Function

function addTask(e)
{
   if(TaskInput.value === '')
   {
      alert('Add A Task');
   }
   else{
       //create li
       let li = document.createElement('li');
       li.appendChild(document.createTextNode(TaskInput.value + ''));
       tasklist.appendChild(li);
       let link = document.createElement('a');
       link.setAttribute('href', '#');
       link.innerHTML = 'x';
       li.appendChild(link);
       TaskInput.value='';
   }
   e.preventDefault();
}


//remove task

function removeTask(e)
{
    if(e.target.hasAttribute('href')) {
        if(confirm("Are You Sure To Delete This Task?")){
            let ele = e.target.parentElement;
            ele.remove();
            //console.log(ele);
        }
        
        
    }
}