const launches = new Map()

const testLaunch = {

    flightNumber: 100,
    mission: 'Test Mission',
    rocket: 'Rocket Space one',
    launchDate: new Date('December 27, 2330'),
    destination: 'Ghana',
    success: true
}

launches.set(testLaunch.flightNumber, testLaunch)

export default launches
