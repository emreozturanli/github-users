import {store} from './app/store'
import {Provider} from 'react-redux'
import Header from './components/Header';
import Search from './components/Search';
import Main from './components/Main';

function App() {
  return (
    <Provider store={store}>
      <Header/>
      <Search/>
      <Main/>
    </Provider>
  );
}

export default App;
