const API_URL = "https://api.spacexdata.com/v3" // asignamos a una variable la url de la api para utilizarla mejor


// coonsumimos api de space x obteninedo datos de los lanzamientos
export async function getAllLaunches() {
    try {
        const response = await fetch(`${API_URL}/launches`)
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error);
    }
}

// consumimos la api de space x obteniendo datos del lanzamiento por numero de vuelo
export async function getLaunchByFlightNumber(flightNumber) {
    try {
        const response = await fetch(`${API_URL}/launches/${flightNumber}`)
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error);
    }
}