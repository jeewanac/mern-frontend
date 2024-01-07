import { useNavigate } from 'react-router-dom';
import './App.css';


function App() {

  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        
        <button className='user-button' onClick={() => navigate('/users')}>User Form</button>
      </header>
    </div>
  );
}

export default App;
