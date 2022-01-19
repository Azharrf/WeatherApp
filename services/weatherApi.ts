import callAPI from '../config/api'

const URL_API = process.env.NEXT_PUBLIC_URL
const API_KEY = process.env.NEXT_PUBLIC_KEY

export async function getWeather(lat: number, lon: number, valueParams: string) {
  let params = ''
  if (valueParams === 'all') {
    params = ''
  } else {
    params = `&units=${valueParams}`
  }

  const url = `${URL_API}/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely${params}&appid=${API_KEY}`
  return callAPI({
    url,
    method: 'GET',
  })
}

export async function getLocation(value: string) {
  const url = `${URL_API}/weather?q=${value}&units=standard&appid=${API_KEY}`
  return callAPI({
    url,
    method: 'GET',
  })
}

export async function getAirPolution(lat: number, lon: number) {
  const url = `${URL_API}/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  return callAPI({
    url,
    method: 'GET',
  })
}
