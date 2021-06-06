import '../src/css/App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './components/mainComponent';
import { Provider } from 'react-redux';
import { ConfigureStore } from '../src/redux/ConfigureStore';

const store = ConfigureStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
