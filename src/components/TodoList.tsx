import { Todo } from '../types/Todo';
import { TodoItem } from './TodoItem';

type Props = {
  visibleTodos: Todo[];
  onDelete: (todoId: number) => void;
  tempTodo: Todo | null;
  loadingTodoId: number | null;
  selectedIds: number[];
  onToggleSelect: (todoId: number) => void;
};

export const TodoList: React.FC<Props> = ({
  visibleTodos,
  onDelete,
  tempTodo,
  loadingTodoId,
  selectedIds,
  onToggleSelect,
}) => {
  return (
    <section className="todoapp__main" data-cy="TodoList">
      {visibleTodos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          loadingTodoId={loadingTodoId}
          isSelected={selectedIds.includes(todo.id)}
          onToggleSelect={onToggleSelect}
        />
      ))}

      {tempTodo !== null && (
        <TodoItem
          todo={tempTodo}
          onDelete={onDelete}
          loadingTodoId={tempTodo.id}
          isSelected={false}
          onToggleSelect={onToggleSelect}
        />
      )}
    </section>
  );
};
