import TodoItem from "./TodoItem";

const TodoList = ({ todos, removeTodo }) => (
    <div>
        {todos.length === 0 ? (
            <p>No tasks yet!</p>
        ) : (
            todos.map((todo, index) => (
                <TodoItem
                    key={index}
                    task={todo}
                    removeTodo={() => removeTodo(index)}
                />
            ))
        )}
    </div>
);

export default TodoList;