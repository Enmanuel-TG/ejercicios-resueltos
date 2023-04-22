// CRUD
let tasks = []

// Create
function createTask(data) {
  tasks.push(data);
}

// Read
function readTask() {
  return tasks;
}

// Update
function updateTask(id, newData) {
  tasks = tasks.map((task)=>{
    if( task.id === id){
            return {
              ...task,
              ...newData
            }
    }
    else{
      return task
    }
  }
)}
// Delete
function deleteTask(id) {
  tasks = tasks.filter((task)=>(task.id !== id))
}

readTask()
createTask({id:1, title:"nose"})
readTask()
createTask({id:2, title:"nosexd"})
readTask()
updateTask(1, {title:'petruco'})
readTask()
deleteTask(1)
readTask()
