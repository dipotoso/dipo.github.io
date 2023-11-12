function TodoForm ({addTodo}) {
    const [value, setValue] = React.useState(``);

    const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue(``);
  }

    return (
        <form>
        <div>
          <textarea         
              type='text'
              className='input' 
              value = {value}
              placeholder= {`Add Todo....`}
              onChange={e => setValue(e.target.value)}
          />
            <button 
            className='button' 
            onClick={handleSubmit}
            >+</button>
          </div>
        
      </form>
    );
}