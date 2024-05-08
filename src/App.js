import { Route, Routes } from 'react-router-dom';
import './App.css';
import Todo from './Pages/Todo';
import Login from './Pages/Login';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/todo' element={<Todo/>}/>
      </Routes>
    </div>
  );
}

export default App;
