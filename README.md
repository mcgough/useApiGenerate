# useApiGenerate

```
const [
  getPlayers,
  createPlayer,
  updatePlayer,
  deletePlayer ] = useApiGenerate({ path: '/players/:playerId' })
  
const [
  getTeams,
  createTeam,
  updateTeam,
  deleteTeam ] = useApiGenerate({ path: '/teams/:league?/:teamId?' })

```
