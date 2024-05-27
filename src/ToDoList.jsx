import React,{useState} from 'react';



function ToDoList(){
    
    const [tasks,setTasks]= useState(["wake up"]);
    const [newTask,setNewTask]=useState("");
    function handleInputChange(event){
       setNewTask(event.target.value);
    }
    function addTask(){
        if(newTask.trim!==""){ 
            setTasks(c =>[...c,newTask]);
            setNewTask("");
        }

    }
    function deleteTask(index){
       setTasks(tasks.filter((_,i) => i!=index));

    }
    function moveTaskUp(index){
        if(index>0){
            const updatedTasks=[...tasks];
            [updatedTasks[index],updatedTasks[index-1]]=[updatedTasks[index-1],updatedTasks[index]];
            setTasks(updatedTasks);
        }
       

    }
    function moveTaskDown(index){
         if(index<tasks.length-1){
             const updatedTasks=[...tasks];
            [updatedTasks[index],updatedTasks[index+1]]=[updatedTasks[index+1],updatedTasks[index]];
            setTasks(updatedTasks);
         }

    }

    return(
        <> 
         <div className='to-do-list'>
            <h1>To-Do-List</h1>
            <div>
                <input type="text" 
                       value={newTask} 
                       placeholder='enter a task......'
                       onChange={handleInputChange} />
                <button className='add-button' onClick={addTask}>Add</button>
            </div>

            <ol>
               { tasks.map((task,index) => <li key={index}>
                  <span className='task'>{task}</span>
                  <button className='delete-button' onClick={() => deleteTask(index)}> Delete</button>
                  <button className='move' onClick={() => moveTaskUp(index)}>👆</button>
                  <button className='move' onClick={() => moveTaskDown(index)}>👎</button>
                  </li> )}
            </ol>
         </div>
        
        
        
        </>
    )

}

export default ToDoList;