import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './components/mainComponent';

function App() {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}

export default App;
