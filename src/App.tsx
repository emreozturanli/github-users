import {store} from './app/store'
import {Provider} from 'react-redux'
import Header from './components/Header';

function App() {
  return (
    <Provider store={store}>
      <Header/>
    </Provider>
  );
}

export default App;
