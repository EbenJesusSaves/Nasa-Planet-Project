const launches = new Map()

let lastLaunch = 200

const testLaunch = {

    flightNumber: 100,
    mission: 'Test Mission',
    rocket: 'Rocket Space one',
    launchDate: new Date('December 27, 2330'),
    target: 'Ghana',

}

launches.set(testLaunch.flightNumber, testLaunch)

export const addNewLaunches = (launch) => {
    lastLaunch++
    launches.set(lastLaunch, {
        ...launch,
        flightNumber: lastLaunch,
        customers: ['test data'],
        upcoming: true,
        success: true
    })
}


export default launches
