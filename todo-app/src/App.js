import TodoList from './components/TodoList';
import './App.css';

function App() {
  return (
    <div id="app" className="flex flex-col container max-w-md mx-auto md:pt-8">
      <TodoList></TodoList>
    </div>
  );
}

export default App;
