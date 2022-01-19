import { useEffect, useState } from 'react'
import ContentLoader from 'react-content-loader'
import CardHighlights from '../../atoms/CardHighlights'

interface AirPolutionProps {
    data: any,
    airPolution: {
        list: any
    }
}

export default function AirPolution(props: AirPolutionProps) {
  const { data, airPolution } = props
  const [lvAir, setLvAir] = useState('Good')
  const [bar, setBar] = useState(0)

  useEffect(() => {
    let air = 0
    if (data) {
      air = airPolution.list[0].main.aqi
    }

    if (air >= 0 && air <= 50) {
      setLvAir('Good')
    } else if (air >= 50 && air <= 100) {
      setLvAir('Fair')
    } else if (air >= 100 && air <= 200) {
      setLvAir('Moderate')
    } else if (air >= 200 && air <= 400) {
      setLvAir('Poor')
    } else if (air >= 400) {
      setLvAir('Very Poor')
    }

    setTimeout(() => {
      return setBar(air)
    }, 10)
  }, [airPolution])

  return (
    <CardHighlights>
      {data ? (
        <>
          <h3>Air Quality</h3>
          <h1 id="aqi">
            {airPolution && airPolution.list[0].main.aqi}
          </h1>

          <div className="progress">
            <div className="progress-bar air-progress" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={400} style={{ height: `${bar}%` }} />
          </div>

          <div className="wsw d-flex flex-row align-items-center">
            <h5 id="level-air">{lvAir}</h5>
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
