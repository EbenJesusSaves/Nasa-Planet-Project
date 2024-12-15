async function httpGetPlanets() {

  try {
    const planets = await fetch('http://localhost:1000/planets')
    const data = await planets.json()
    console.log(data.message)
    return (data.message)
  } catch (error) {
    console.log(error)
  }

}

async function httpGetLaunches() {
  const launch = await fetch('http://localhost:1000/launches')
  const data = await launch.json()
  console.log(data)
  return data
}

async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready.
  console.log(launch)
  return await fetch('http://localhost:1000/launches', {
    method: 'POST',
    body: JSON.stringify(launch),
    headers: {
      "content-Type": "application/json"
    }
  })


}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};