import moment from 'moment'
import { useEffect, useState } from 'react'
import CardItem from '../../atoms/CardItem'

interface WeatherItemProps {
  day: number,
  icon: string,
  tempHigh: number,
  tempLow: number,
  suhu: string
}

export default function WeatherItem(props: WeatherItemProps) {
  const { day, icon, tempHigh, tempLow, suhu } = props

  return (
    <>
      <CardItem>
        <p className="day">{moment(day * 1000).format('dddd')}</p>
        <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
        <p className="suhu">
          {Math.round(tempHigh)}
          °
          {(suhu === 'metric' && <>C</>) || (suhu === 'imperial' && <>F</>)}
          <span>/ </span>
          {Math.round(tempLow)}
          °
          {(suhu === 'metric' && <>C</>) || (suhu === 'imperial' && <>F</>)}
        </p>
      </CardItem>
    </>
  )
}
