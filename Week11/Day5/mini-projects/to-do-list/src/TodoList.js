const TodoList = ({ todos, setTodos }) => {
    const removeTodo = (e) => {
        console.log("before", todos);
        const index = e.target.id;
        todos.splice(index, 1);
        const newTodo = [...todos];
        console.log("after", index, todos, newTodo);
        setTodos(newTodo);
    };

    return (
        <div>
            {todos.length === 0 ? (
                <p>You have no todo's left, yay!</p>
            ) : (
                todos.map((todo, index) => (
                    <p key={index} id={index} onClick={removeTodo}>
                        {" "}
                        {todo}{" "}
                    </p>
                ))
            )}
        </div>
    );
};

export default TodoList;
