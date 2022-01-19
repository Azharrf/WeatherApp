import type { NextPage } from 'next'
import { useCallback, useEffect, useState } from 'react'
import Content from '../components/organism/content'
import Sidebar from '../components/organism/sidebar'
import { getLocation, getWeather } from '../services/weatherApi'

const Home: NextPage = () => {
  const [weather, setWeather] = useState()
  const [location, setLocation] = useState<any>()
  const [suhu, setSuhu] = useState('metric')
  console.log('weather', weather)

  const getLoc = useCallback(async (value) => {
    const loct = await getLocation(value)
    if (!loct) {
      alert('Kota tidak ditemukan, silahkan cari nama kota yang sesuai!')
    } else {
      setLocation(loct.data)
      await getWeatherData(loct.data.coord.lat, loct.data.coord.lon, suhu)
    }
  }, [getLocation])

  const getWeatherData = useCallback(async (lat, lon, suhu) => {
    const weth = await getWeather(lat, lon, suhu)
    setWeather(weth.data)
  }, [getWeather])

  const getWeatherLocal = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const lat = pos.coords.latitude
          const lon = pos.coords.longitude
          const coord = { lat, lon }
          localStorage.setItem('geolocation', JSON.stringify(coord))
          getWeatherData(lat, lon, suhu)
        },
        (errorMessage) => {
          alert(errorMessage)
        },
      )
    }
  }

  const getWeatherSearch = async (value: string) => {
    if (value === null) {
      alert('Silahkan masukan nama kota yang sesuai!')
    } else {
      await getLoc(value)
    }
  }

  const closeSearch = () => {
    const dataLocal = localStorage.getItem('geolocation')
    const dataItem = JSON.parse(dataLocal!)
    const { lat } = dataItem
    const { lon } = dataItem
    getWeatherData(lat, lon, suhu)
    setLocation(null)
    console.log('close', lat, lon)
  }

  useEffect(() => {
    if (location) {
      getWeatherData(location.coord.lat, location.coord.lon, suhu)
    } else {
      getWeatherLocal()
    }
  }, [suhu])

  const onSuhu = (value: any) => {
    setSuhu(value)
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar onSearch={getWeatherSearch} onClose={closeSearch} data={weather} suhu={suhu} />
        <Content data={weather} suhu={suhu} onClick={onSuhu} />
      </div>
    </div>
  )
}

export default Home
