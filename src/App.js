import './App.css';
import  { IndexView } from './views/IndexView'
import AppProvider from './contexts/Provider';

function App() {
  return (
    <div className="App">
      <AppProvider>
        <IndexView/>
      </AppProvider>
    </div>
  );
}

export default App;
