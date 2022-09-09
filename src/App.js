import './App.css';
import { CardsList } from './components/CardsList/CardsList';
import {Heading} from './components/Heading/Heading.js'

function App() {
  return (
    <div className="App">
      <Heading />
      <CardsList/>
    </div>
  );
}

export default App;
