function Todo({todo, index, remove}) {
    function handle() {
        remove(index)
    }
    return (
        <div className='todo'>{todo.text} 
        <button id='remove' onClick={handle}>&#10004;</button>
        </div>
    )
}