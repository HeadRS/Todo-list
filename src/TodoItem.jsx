import React, { useState } from 'react'

export default function TodoItem(props) {

    const [value, setValue] = useState('')
    return (
        <div className='container'>
            <form onSubmit={e => {
                e.preventDefault()
                props.addTodo(value)
                setValue('')
            }}>
                <input className="input_second" type="text" placeholder='Введите название' value={value} onChange={e => setValue(e.target.value)} />
                <button className='btn'>Добавить</button>
            </form>











        </div>
    )
}
