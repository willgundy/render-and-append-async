import { client } from './client';

export async function getPremierLeagueTeams() {
  const response = await client
    .from('premier_league_teams')
    .select('*');

  return response.body;
}

export async function getPremierLeaguePlayers() {
  const response = await client
    .from('premier_league_players')
    .select('*')
    .limit(20);
  
  return response.body;
}

export async function getPremierLeagueMatches() {
  const response = await client
    .from('premier_league_matches')
    .select('*')
    .limit(20);
  
  return response.body;
}

export async function getF1Drivers() {
  const response = await client
    .from('f1_drivers')
    .select('*');
    
  return response.body;
}
    
  