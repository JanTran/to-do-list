import { createRoot } from "react-dom/client";
import MainView from "./components/main-view/main-view";
import { addTodo, toggleTodo, editTodo, deleteTodo } from "./actions";
import { createStore } from "redux";
import todos from "./reducers";

import "./index.scss";

const store = createStore(todos);

// Log initial state
console.log("Initial State", store.getState());

// Dispatch some actions
store.dispatch(addTodo("Dispatch my first action"));
console.log("State after adding first todo", store.getState());

store.dispatch(addTodo("Dispatch my second action"));
console.log("State after adding second todo", store.getState());

store.dispatch(addTodo("Dispatch my third action"));
console.log("State after adding third todo", store.getState());

store.dispatch(toggleTodo(0));
console.log("State after toggling first todo", store.getState());

store.dispatch(editTodo("edited todo", 2));
console.log("state after editing", store.getState());

store.dispatch(deleteTodo(1));
console.log("state after deleting second todo", store.getState());

function App() {
  return <MainView />;
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);
