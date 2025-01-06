import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setcount] = useState(0)


  return (
    <div className="App">

      <button onClick={
        ()=>{
          setcount((count)=> count+1)
        }
      }> click me</button>
        
    </div>
  );
}

export default App;
