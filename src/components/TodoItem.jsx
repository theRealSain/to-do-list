import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import './TodoItem.css'; 

const TodoItem = ({ task, removeTodo }) => (
  <div className="todo-item">
    <span className="todo-text">{task}</span>
    <button onClick={removeTodo} className="delete-btn">
      <FontAwesomeIcon icon={faTrash} />
    </button>
  </div>
);

export default TodoItem;
