import React ,{useState}from 'react'
import TodoItem from './TodoItem'


const styles ={ 
  li:{
    
      width: '700px',
      height: '50px',
      borderRadius: '10px',
      backgroundColor: '#FFFFFF',
      marginBottom: '15px',
      listStyle: 'none',
      width: '100%',
      textAlign: 'left',
      padding: '5px',
      position: 'relative'
  }
}

export default function App() {
  const[todos, setTodos] = useState([
    {id:1, text:'Рассказать теорию', done: false},
    {id:2, text:'Рассказать теорию', done: false},
  ])
  const addTodo =(value) => {
    if(value) {
      setTodos([...todos, {id:Date.now(), text:value, done: true}])
    }else {
      alert('введите значение')
    }
  }

  function toggleTodo(id) {
    setTodos(
      todos.map(todo=> {
        if(todo.id === id) {
          todo.done =! todo.done
        }
        return todo
      })
    )
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo=> todo.id !==id))
  }

  return (
    <div className='wrapper'>
      <h1 className='title'>Заметки</h1>
      <TodoItem addTodo={addTodo}/>
      {todos.map(todo=>{
        return (
          <li 
            style={styles.li} 
            key={todo.id}
            className={todo.done ? "todo done" :"todo"}  
          >

            <div className='btn_add_todo'>
              {todo.text}
              <div>

                <button 
                  onClick={() =>toggleTodo(todo.id)}
                >
                    +
                </button>
                <button 
                  className='qwerty' 
                  onClick={(e)=>{
                    e.stopPropagation();
                    removeTodo(todo.id)
                  }}
                >
                    -
                </button>
              </div>
            </div>
            </li>
        )
      })}     
    </div>
  )
}

