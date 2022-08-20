import {store} from './app/store'
import {Provider} from 'react-redux'
import Header from './components/Header';
import Search from './components/Search';

function App() {
  return (
    <Provider store={store}>
      <Header/>
      <Search/>
    </Provider>
  );
}

export default App;
