import './App.css';
import { useState, useEffect } from 'react';
import { getF1Drivers, getPremierLeagueMatches, getPremierLeaguePlayers, getPremierLeagueTeams } from './services/fetch-utils';

function App() {
  // const [isLoading, setIsLoading] = useState(false);
  const [f1Drivers, setF1Drivers] = useState([]);
  const [premierLeagueTeams, setPremierLeagueTeams] = useState([]);
  const [premierLeaguePlayers, setPremierLeaguePlayers] = useState([]);
  const [premierLeagueMatches, setPremierLeagueMatches] = useState([]);
  
  useEffect(async () => {
    // setIsLoading(true);
    
    const f1DriversResponse = await getF1Drivers();
    const teamsResponse = await getPremierLeagueTeams();
    const playersResponse = await getPremierLeaguePlayers();
    const matchesResponse = await getPremierLeagueMatches();

    // setIsLoading(false);
    setF1Drivers(f1DriversResponse);
    setPremierLeagueTeams(teamsResponse);
    setPremierLeaguePlayers(playersResponse);
    setPremierLeagueMatches(matchesResponse);
  }, []);

  return (
    <div className="App">
      <h1>F1 Drivers</h1>
      <DriverList drivers={f1Drivers} />
    </div>
  );
}

export default App;
