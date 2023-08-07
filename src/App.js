import logo from './logo.svg';
import './App.css';
import Todolist from './components/DemoTodolist/Todolist';
import IndexColor from './components/LiftingStateup/IndexColor';
import ParentComp from './components/StudentManager/ParentComp';

function App() {
  return (
    <div className="App">
      {/* <Todolist/> */}
      {/* <IndexColor/> */}
      <ParentComp/>
    </div>
  );
}

export default App;
