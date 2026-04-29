import { Todo } from '../types/Todo';
import { TodoItem } from './TodoItem';

type Props = {
  visibleTodos: Todo[];
  onDelete: (todoId: number) => void;
  tempTodo: Todo | null;
  loadingTodoId: number | null;
  selectedTodos: number[];
  onSelectTodo: (todoId: number) => void;
};

export const TodoList: React.FC<Props> = ({
  visibleTodos,
  onDelete,
  tempTodo,
  loadingTodoId,
  selectedTodos,
  onSelectTodo,
}) => {
  return (
    <section className="todoapp__main" data-cy="TodoList">
      {visibleTodos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          loadingTodoId={loadingTodoId}
          isSelected={selectedTodos.includes(todo.id)}
          onSelect={onSelectTodo}
        />
      ))}

      {tempTodo !== null && (
        <TodoItem
          todo={tempTodo}
          onDelete={onDelete}
          loadingTodoId={tempTodo.id}
          isSelected={false}
        />
      )}
    </section>
  );
};
