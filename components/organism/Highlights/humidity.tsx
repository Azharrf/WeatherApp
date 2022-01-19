import React, { useEffect, useState } from 'react'
import ContentLoader from 'react-content-loader'
import CardHighlights from '../../atoms/CardHighlights'

interface HumidityProps {
    data: any,
    humidity: number,
}

export default function Humidity(props: HumidityProps) {
  const { data, humidity } = props
  const [lvHmdty, setLvHmdty] = useState('Poor Low')
  const [barHmdty, setBarHmdty] = useState(0)

  useEffect(() => {
    if (humidity <= 25) {
      setLvHmdty('Poor Low')
    } else if (humidity >= 25 && humidity <= 30) {
      setLvHmdty('Fair')
    } else if (humidity >= 30 && humidity <= 60) {
      setLvHmdty('Healthy')
    } else if (humidity >= 60 && humidity <= 70) {
      setLvHmdty('Fair')
    } else if (humidity >= 70) {
      setLvHmdty('Poor High')
    }

    setTimeout(() => {
      setBarHmdty(humidity)
    }, 10)
  }, [humidity])

  return (
    <CardHighlights>
      {data ? (
        <>
          <h3>Humidity</h3>
          <h1 id="humidity">
            {humidity}
            <span>%</span>
          </h1>

          <div className="progress">
            <div className="progress-bar humidity-progress" role="progressbar" aria-valuenow={barHmdty} aria-valuemin={0} aria-valuemax={100} style={{ height: `${barHmdty}%` }} />
          </div>

          <div className="wsw d-flex flex-row align-items-center">
            <h5 id="level-hmdty">{lvHmdty}</h5>
          </div>
        </>
      ) : (
        <>
          <ContentLoader viewBox="0 0 430 200">
            <rect x="0" y="0" rx="5" ry="5" width="150" height="30" />
            <rect x="0" y="70" rx="5" ry="5" width="200" height="60" />
            <rect x="0" y="170" rx="5" ry="5" width="100" height="25" />
            <rect x="395" y="0" rx="10" ry="10" width="17" height="200" />
          </ContentLoader>
        </>
      )}
    </CardHighlights>
  )
}
