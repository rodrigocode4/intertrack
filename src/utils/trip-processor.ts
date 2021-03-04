type LocType = {
  id: number
  vehicleId: number
  datetime: number
  latitude: number
  longitude: number
  address: string
  ignition: boolean
  hodometro: number
}

export const getTrip = (tripRegister: Array<LocType>) => {
  const trips: Array<Array<LocType>> = []
  const tripTemp: Array<LocType> = []

  if (tripRegister.length === 0) return [tripRegister]

  for (let index = tripRegister.length; index >= 0; index--) {
    const currentIndex = index - 2
    const previousIndex = index - 1

    if (currentIndex === -1) {
      trips.push(tripRegister)

      const lastTripIndex = trips.length - 1
      const sortedTrip = tripTemp.reverse()
      trips[lastTripIndex].push(...sortedTrip)

      tripTemp.splice(previousIndex, tripTemp.length)

      const a = trips[lastTripIndex].findIndex((el) => el.ignition == true)
      const b = trips[lastTripIndex].findIndex((el) => el.ignition == false)
      const lastTrips = trips.pop() as Array<LocType>

      if (a === -1) {
        break
      }

      if (a !== -1 && b === -1) {
        trips.push(lastTrips)
        break
      }

      if (b === -1) {
        break
      }
      const filteredTrip = lastTrips.slice(a, b + 1)
      trips.push(filteredTrip)
      break
    }

    if (
      tripRegister[currentIndex].ignition === false &&
      tripRegister[previousIndex].ignition === true
    ) {
      const trip = tripRegister.splice(previousIndex, tripRegister.length)
      trips.push(trip)
      if (tripTemp.length > 0) {
        const lastTripIndex = trips.length - 1
        trips[lastTripIndex].push(...tripTemp)
      }
      tripRegister.splice(previousIndex, previousIndex)
      continue
    }
    if (tripRegister[currentIndex].ignition === true) {
      continue
    }
    continue
  }

  return trips.reverse()
}
