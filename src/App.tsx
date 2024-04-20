import { AppContainer } from './App.styled';
import BattleOfMonsters from './pages/battle-of-monsters/BattleOfMonsters';
import { Provider } from 'react-redux';
import { store } from './app/store';

const App = () => (
  <Provider store={store}>
    <AppContainer>
      <BattleOfMonsters />
    </AppContainer>
  </Provider>
);

export default App;
