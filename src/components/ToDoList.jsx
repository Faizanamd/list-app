import React, { useEffect } from 'react';
import { onSnapshot, doc, collection, deleteDoc } from 'firebase/firestore';
import db from '../firstbaseInit.js'
function ToDoList({ toDo, setToDo }) {
    useEffect(() =>{
        
           
        const syncData  = onSnapshot(collection(db, "todos"), (snapShot) =>{
            const todos = snapShot.docs.map((doc) => {
                        return{
                            id: doc.id,
                            ...doc.data()
                        }
                    })
                    console.log(todos);
                    setToDo(todos);
        })


    }, [])
    console.log('ToDoList Props:', toDo);
    async function deleteToDo(id) {
        console.log("id need to delte", id);
        // let updatedToDo = [...toDo];
        // updatedToDo.splice(id, 1);
        await deleteDoc(doc(db, 'todos', id));
        // Update the state with the new array
        // setToDo(updatedToDo);

    }
    async function editToDo(id){
        
    }
   
    return (
        <div className="lists">
            {toDo.map((to, id) => (
                <div className="list" key={id}>
                    <div className="listLeft">
                        <h3>{to.title}</h3>
                        <p>{to.description}</p>
                    </div>
                    <div className="listRight">
                        <button >Edit</button>
                        <button onClick={() => deleteToDo(to.id)} >Delete</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ToDoList;