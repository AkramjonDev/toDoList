import React, { useRef, useState } from 'react';
import './Form.css';

const Form = ({ AddTodos }) => {
    const [title, setTitle] = useState('');
    const [completed, setCompleted] = useState(null);
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        AddTodos({
            id: Math.random(),
            title: title,
            completed: Boolean(Number(completed))
        });
        form.current.reset();
    }

    return (
        <div className='form'>
            <form onSubmit={handleSubmit} action="">
                <input placeholder='search todo...' className='input-search' type="text" onChange={(e) => setTitle(e.target.value)} />
                <label htmlFor="">
                    <span>Completed: </span>
                    <input type="radio" onChange={(e) => setCompleted(e.target.value)} name='status' value={1} />
                    <span>Uncompleted: </span>
                    <input type="radio" onChange={(e) => setCompleted(e.target.value)} name='status' value={0} />
                </label>
            </form>
        </div>
    )
}

export default Form;
