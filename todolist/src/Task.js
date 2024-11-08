import {useState} from "react"

function Task(){
const [tasks,setTasks]=useState(["walk","sleep"])
const [newTask,setNewTask]=useState("")
const [inputReadOnly,setReadOnly]=useState([true,true])
function handleInputChange(event){
    setNewTask(event.target.value)
   
}
function addTask(){
if(newTask.trim()!=""){
if(!tasks.includes(newTask.trim())){
    setTasks(t=>[...t,newTask])
    setReadOnly(r=>[...r,true])
    setNewTask("")
}
else{
alert("this task exists")
}
}
else{
alert("fill in input")
}
}
function deleteTask(index){
    let updatedTask=tasks.filter((_,i)=>index!==i)
    let updatedReadOnly=inputReadOnly.filter((_,i)=>index!==i)
    setTasks(updatedTask)
    setReadOnly(updatedReadOnly)
}
function editTask(index){
    let updatedReadOnly=inputReadOnly.map((_,i)=>{
if(i==index){
    return !inputReadOnly[index]
}
return inputReadOnly[index]
    })
    setReadOnly(updatedReadOnly)
}
return(
<div className="container">
<h1 className="text-center">to do list</h1>
<hr/>
<div className="" >
<input
type="text"
className="w-100 py-2 "
placeholder="add item..."
value={newTask}
onChange={handleInputChange}
/>
<button className="border-0 mt-2 mb-3 add rounded px-2 py-1 bg-dark text-white" onClick={addTask}>ADD</button>
</div>

<div className="content">
{tasks.map((t,index)=>{
return(
<div key={index} className="d-flex  py-2 border border-dark-gray bg-gray">
<input defaultValue={t} readOnly={inputReadOnly[index]} className="border-0 pb-3 w-100 bg-transparent"></input>
<button className="rounded px-2 py-1 bg-white me-2 border-0" onClick={()=>deleteTask(index)} >delete</button>
<button className="rounded px-2 py-1 bg-white me-2 border-0" onClick={()=>editTask(index)} >edit</button>
</div>



);


})}

</div>

</div>


);
}








export default Task;
