import './App.css';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import TournamentStats from './components/tournData';

// const sheetsOptions = [{ id: 'Sheet1', headerRowIndex: 1 }, { id: 'Sheet2' }];

function App() {
  return (
    <BrowserRouter>
      <Header />
      <TournamentStats />
    </BrowserRouter>
  );
}

export default App;
