import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Table } from 'semantic-ui-react';

function App() {
  const [APIdata, setAPIdata] = useState([]);

  useEffect(() => {
    axios
      .get('https://sheet.best/api/sheets/b1454f35-1bb1-4e30-aa69-d8ce37cca0f8')
      .then((incomingData) => {
        setAPIdata(incomingData.data);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Table basic="very" celled collapsing>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Employee</Table.HeaderCell>
            <Table.HeaderCell>Correct Guesses</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {APIdata.map((data) => {
            return (
              <Table.Row key={data.team}>
                <Table.Cell>{data.team}</Table.Cell>
                <Table.Cell>22</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}

export default App;
