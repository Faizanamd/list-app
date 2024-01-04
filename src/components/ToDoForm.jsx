
import React, { useEffect, useRef, useState } from 'react';
import { addDoc, collection } from "firebase/firestore";
import db from '../firstbaseInit.js'
function ToDoForm({ toDo, setToDo }) {
  let titleRef = useRef(null);
  const [newToDo, setNewToDo] = useState({ title: '', description: '' });
  useEffect(() => {
    titleRef.current.focus();
  }, [])
  async function addToDo() {
    // Ensure title and description are not empty before adding
    if (newToDo.title.trim() !== '' && newToDo.description.trim() !== '') {
      setToDo((prevToDo) => [...prevToDo, newToDo]);
      // Clear input fields after adding a to-do
      setNewToDo({ title: '', description: '' });
      const docRef = await addDoc(collection(db, "todos"), newToDo);
      console.log("docref",docRef)
      titleRef.current.focus();
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewToDo((prevToDo) => ({ ...prevToDo, [name]: value }));
  };


  return (
    <form>
      <div className="title">
        <label htmlFor="title">Enter title</label>
        <input ref={titleRef}
          type="text"
          name="title"
          value={newToDo.title}
          onChange={handleInputChange}
          placeholder="Enter title here"
        />
      </div>
      <div className="description">
        <label htmlFor="description">Description</label>
        <textarea rows={5}
          name="description"
          value={newToDo.description}
          onChange={handleInputChange}
          placeholder="Description goes here..."
        ></textarea>
      </div>
      <div className="buttonBox">
        <button type="button" onClick={ addToDo}>
          Add
        </button>
      </div>
    </form>
  );
}

export default ToDoForm;