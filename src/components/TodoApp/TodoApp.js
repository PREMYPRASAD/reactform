// import React, {Component } from 'react'
// import "./TodoApp.css";

// export class TodoApp extends Component {
//     state = {
//         input: "",
//         items:[]
        
//     };
//     handleChange = event => {
//         this.setState({
//             input: event.target.value
//         });
        
//     };
//     storeItems = event => {
//         event.preventDefault();
//         const { input } = this.state;
        
//         this.setState({
//             items: [...this.state.items, input],
//             input: ""
//         });

//     };
//     deleteItem = key => {
        // const allItems = this.state.items;
        // allItems.splice(key, 1);
        //this.setState({
            //items:allItems
    //         items: this.state.items.filter((data, index) => index !== key)
    //     });
    // };
    
    // render() {
        //destructing
//         const { input, items } = this.state;
        
//         return (
//             <div className="todo-container">
            
//                 <form className="input-section" onSubmit={this.storeItems}>
//                     <h1>
//                         Todo App</h1>
//                     <input type='text' value={input} onChange={this.handleChange} placeholder='enter items...' />
                    
//                 </form>
//                 <ul>
//                     {items.map((data, index) => (
//                         <li key={index}>{data} <i className="fas fa-trash-alt" onClick={() => this.deleteItem(index)}></i>
//                         </li>
//                     ))}
                    
//                 </ul>
//             </div>
//         );
//   }
// }
// export default TodoApp

import { Button, Container, TextField } from '@mui/material'
import React, { useState } from 'react'
import './TodoApp.css'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import DoneAllIcon from '@mui/icons-material/DoneAll';
// import CheckIcon from '@mui/icons-material/Check';
const TodoApp = () => {

    //useState
    var [todo, settodo] = useState('');
    var [todos, settodos] = useState([]);
    var [editId,setEditId] = useState(0);
       
    
    //ADD
        const addtodo = () => {
            if(todo !==''){
                settodos([...todos,  {list : todo , id : Date.now(),status:false}])
                settodo('')
            }
            if (editId) {
                const editTodo = todos.find((todo) => todo.id === editId);
                const updateTodo = todos.map((to) => to.id === editTodo.id
                    ? (to = { id: to.id, list: todo })
                    : (to = { id: to.id, list: to.list }))
                settodos(updateTodo);
                setEditId(0);
                settodo('');
            }
        }
    
//DELETE
    const onDelete = (id) => {
    settodos(todos.filter((to) => to.id !== id))
    }
    //complete
    const onComplete = (id) => {
        let complete = todos.map((list) => {
            if (list.id === id) {
                return ({ ...list, status: !list.status })
            }
            return list
        })
        settodos(complete);
    }
    //edit

    const onEdit = (id) => {
        const edittodo = todos.find((to) => to.id === id)
        settodo(edittodo.list)
        setEditId(edittodo.id)

    }
    return (
        <div className='container'>
            <Container maxWidth="lg" align='center'>
                <h1>TODO LIST</h1>
                <form className='form-group'>
                    <TextField type="text" value={todo} label="Enter Your TODO" variant="outlined" fullWidth onChange={(event) => settodo(event.target.value)}></TextField>
                    <Button variant="contained" color='error' onClick={addtodo}>{editId ? 'EDIT' :'ADD'}</Button>
                </form>
                <div className='list'>
                    <ol>
                        {
                            todos.map((to) => (
                                <li className='listitems'>
                                    <div className='list-item-list' id={to.status?'list-item':''}>{to.list}</div>
                                    <span> 
                                        <DoneAllIcon className='icons' id="complete" title='complete' onClick={()=>onComplete(to.id)}/>
                                        
                                        <DeleteOutlineIcon className='icons' id='delete' title="Delete" onClick={() => onDelete(to.id)} />
                                        <EditIcon className='icons' id='edit' title="Edit"
                                            onClick={() => onEdit(to.id)} />
                                </span>
                            </li>
                            ))
                        }
                    </ol>
                </div>
            </Container>
        </div>
    )
}

export default TodoApp
