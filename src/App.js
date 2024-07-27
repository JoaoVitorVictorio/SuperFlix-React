import RoutesApp from "./routes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ToastContainer autoClose={3000} />
        <RoutesApp />
      </header>
    </div>
  );
}

export default App;
