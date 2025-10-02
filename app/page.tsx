import { getAllTodo } from "./(dataMapper)/todoDataMapper";
import TodoInput from "./(composent)/addTodo";
import DeleteTodo from "./(composent)/DeleteTodo";
import { Todo } from "./(dataMapper)/types";

export default async function Home() {
  let todos: Todo[] = [];
  try {
    todos = await getAllTodo(); // Retournera [] si BDD inaccessible
  } catch (err) {
    console.error("Erreur lors de la récupération des todos :", err);
    todos = [];
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Ma Todo List</h1>

      {/* Formulaire */}
      <div className="w-full max-w-md mb-6">
        <TodoInput />
      </div>

      {/* Liste des todos */}
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-4">
        {todos.length === 0 ? (
          <p className="text-gray-500 text-center">
            Aucune tâche pour le moment.
          </p>
        ) : (
          <ul className="space-y-2">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="flex items-center justify-between p-2 bg-gray-100 rounded hover:bg-gray-200 transition"
              >
                <span className="text-gray-800 truncate">{todo.text}</span>
                <DeleteTodo id={todo.id} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
