//wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
  
    //selecting Dom elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');
  
     // load tasks from local storage
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
     storedTasks.forEach(taskText => addTask(taskText, false));
    }
  
 
     //function to add new task
     function addTask(taskText, save = true) {
             if (!taskText.trim()) {
                 alert('Please enter a task');
                return;
            }
     
   // check if taskText is not empty
    if (taskText !== ''){
      //create a new li element
    const newTask = document.createElement('li');
    newTask.textContent = taskText;

       // create a remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove-btn';

       // add click eventy to remove button
    removeButton.addEventListener('click', function() {
        taskList.removeChild(newTask);  // remove the li element
        removeTaskFromLocalStorage(taskText);
    });

      // append remove button to li
    newTask.appendChild(removeButton);
      
    //  append li to lu
    taskList.appendChild(newTask);
    
    // if(save) {
    //   saveTaskToLocalStorage(taskText);
    // }
   

    if (save) {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      storedTasks.push(taskText);
      localStorage.setItem('tasks', JSON.stringify(storedTasks));
  }
     // clear the input field
     taskInput.value = '';
  } else {
       alert('Please enter a task!'); // alert if input field is empty
   }
}
  //save task to local storage
  function saveTaskToLocalStorage(taskText) {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    storedTasks.push(taskText);
    localStorage.setItem('task', JSON.stringify(storedTasks));
  }
     

     //remove task from local storage
  function removeTaskFromLocalStorage(taskText) {
    let storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    storedTasks = storedTasks.filter(task => task !== taskText);
    localStorage.setItem('tasks', JSON.stringify(storedTasks));
  }
  
  // event listener for click on add task button
  addButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
  addTask(taskText);
  });

   //event listener for keypress (Enter) in taskInput
  taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter' ){
      const taskText = taskInput.value.trim();
        addTask(taskText);
    }
  });
   
  loadTasks();
  

 document.addEventListener('DOMContentLoaded', () => {
     addTask();
   
});

});


