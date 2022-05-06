import './App.css';
import { useState, useEffect } from 'react';
import { getF1Drivers } from './services/fetch-utils';

function App() {
  // const [isLoading, setIsLoading] = useState(false);
  const [f1Drivers, setF1Drivers] = useState([]);
  const [premierLeagueTeams, setPremierLeagueTeams] = useState([]);
  const [premierLeaguePlayers, setPremierLeaguePlayers] = useState([]);
  const [premierLeagueMatches, setPremierLeagueMatches] = useState([]);
  
  useEffect(async () => {
    // setIsLoading(true);
    
    const f1DriversResponse = await getF1Drivers();

    // setIsLoading(false);
    setF1Drivers(f1DriversResponse);
  }, []);

  console.log(f1Drivers);
  return (
    <div className="App">
      <h1>F1 Drivers</h1>
      {f1Drivers.map((driver, i) => <h3 key={i}>{driver.driver}</h3>)}
    </div>
  );
}

export default App;
