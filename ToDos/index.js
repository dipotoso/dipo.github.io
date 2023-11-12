function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'Create',
      isCompleted: false,
    },
    {
      text: 'Read',
      isCompleted: false,
    },
    {
      text: 'Update',
      isCompleted: false,
    },
    {
      text: 'Delete',
      isCompleted: false,
    }        
  ])

  const addTodo = text => {
    const newTodos = [...todos, {text:text, isCompleted:false}];
    setTodos(newTodos);
  }

  const removeToDo = index => {
    const temp = [...todos];
    temp.splice(index, 1);
    setTodos(temp);
  }
  return(
    <div className='app'>
      <div className='todo-list'>
        {todos.map((todo, i) => 
        <Todo index={i} key={i}
        todo={todo}
        remove={removeToDo}/>)}
        <TodoForm 
        addTodo={addTodo} />
      </div>
    </div>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
