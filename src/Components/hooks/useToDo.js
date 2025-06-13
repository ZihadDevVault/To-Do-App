const useToDo=({task,setTask,visibilty})=>{


    const DeleteData=(id)=>{
    const updatedArr=task.filter((item)=>{return item.id!==id})

    setTask(updatedArr)
}



const filtrdata=(task)=>{
        if(visibilty=="completed"){
            return task.filter((item)=>{return (item.isComplete)})
        }    
        if(visibilty=="incompleted"){
            return task.filter((item)=>{return (!item.isComplete)})
        }    
    
        return task
    }



return{
    DeleteData,
    filtrdata
}

}


export default useToDo;