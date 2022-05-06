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
  
// With axios instance
  
const axiosInstance = createAxiosInstance()

const [getStats] = useApiGenerate({
  instance: axiosInstance
  methods: ['get'],
  path: '/stats/:playerId/:stat?',
})

```
