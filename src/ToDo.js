import React from "react";
import { useReducer, useState } from "react";
function ToDo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [duedate, setDueDate] = useState("");
  const [deleteKey, setdeletkey] = useState("");

  const [state, dispatch] = useReducer(reducer, []);

  function submit(e) {
    e.preventDefault();
    dispatch({
      type: "ADD_TO_DO",
      payload: {
        title: title,
        description: description,
        status: status,
        duedate: duedate,
      },
    });
    setTitle("");
    setDescription("");
    setStatus("todo");
    setDueDate("");
  }
  function delKey(e) {
    e.preventDefault();
    dispatch({
      type: "DEL_TO_DO",
      payload: {
        title: deleteKey,
      },
    });
    setdeletkey("");
  }
  function reducer(state, action) {
    switch (action.type) {
      case "ADD_TO_DO":
        return [
          ...state,
          {
            id: Date.now(),
            title: action.payload.title,
            description: action.payload.description,
            status: action.payload.status,
            duedate: action.payload.duedate,
          },
        ];
      case "DEL_TO_DO":
        const updateditems = state.filter(
          (states) => states.title !== action.payload.title
        );
        return updateditems;
      default:
        return state;
    }
  }

  return (
    <div className="App">
      <h1> Task Manager</h1>
      <h2> Task List</h2>
      <div>
        <h2>Enter new task details </h2>
        <></>
        <input
          type="text"
          placeholder="Title"
          title="Here is my title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          title="Here is my description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Status"
          title="Here is my status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />
        <input
          type="date"
          placeholder="Duedate"
          title="Here is my duedate"
          value={duedate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <button type="submit" onClick={submit}>
          Add Task
        </button>
        <div>
          <input
            type="text"
            placeholder="id"
            title="Here is my duedate"
            value={deleteKey}
            onChange={(e) => setdeletkey(e.target.value)}
          />
          <button onClick={delKey}>Delete Task</button>
        </div>
      </div>

      <div className="TaskDetails">
        <div className="Title">Task-Title</div>
        <div className="Description">Task-Description</div>
        <div className="Status">Task-Status</div>
        <div className="Duedate">Task-Duedate</div>
      </div>
      <ul>
        {state.map((todo) => (
          <li key={todo.id} className="li">
            <p>{todo.id}</p>
            <p>{todo.title}</p>
            <p>{todo.description}</p>
            <p>{todo.status}</p>
            <p>{todo.duedate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDo;
