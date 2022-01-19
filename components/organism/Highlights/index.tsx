import React, { useCallback, useEffect, useState } from 'react'
import { getAirPolution } from '../../../services/weatherApi'
import AirPolution from './airPolution'
import Humidity from './humidity'
import Sunrise from './sunrise'
import UviIndex from './uviIndex'
import Visibility from './visibility'
import Wind from './wind'

interface HighlightsProps {
  data: {
    current: any,
    lat: number,
    lon: number,
  },
  suhu: string,
}

export default function Highlights(props: HighlightsProps) {
  const { data, suhu } = props
  const [uvi, setUvi] = useState(0)
  const [windSpeed, setWindSpeed] = useState(0)
  const [windDeg, setWindDeg] = useState(0)
  const [sunrise, setSunrise] = useState(0)
  const [sunset, setSunset] = useState(0)
  const [humidity, setHumidity] = useState(0)
  const [visibility, setVisibility] = useState(0)
  const [airPolution, setAirPolution] = useState<any>(0)

  const callAirPolution = useCallback(async (lat, lon) => {
    const res = await getAirPolution(lat, lon)
    setAirPolution(res.data)
  }, [getAirPolution])

  useEffect(() => {
    if (data) {
      setUvi(data.current.uvi)
      setWindSpeed(data.current.wind_speed)
      setWindDeg(data.current.wind_deg)
      setSunrise(data.current.sunrise)
      setSunset(data.current.sunset)
      setHumidity(data.current.humidity)
      setVisibility(data.current.visibility)
      callAirPolution(data.lat, data.lon)
    }
  }, [data])

  return (
    <>
      <div className="highlights d-flex flex-row flex-wrap justify-content-between">
        <h1 className="title-highlight">Today's Highlights</h1>

        <UviIndex uvi={uvi} data={data} />
        <Wind data={data} suhu={suhu} windSpeed={windSpeed} windDeg={windDeg} />
        <Sunrise data={data} sunrise={sunrise} sunset={sunset} />
        <Humidity data={data} humidity={humidity} />
        <Visibility data={data} visibility={visibility} />
        <AirPolution data={data} airPolution={airPolution} />
      </div>
    </>
  )
}
