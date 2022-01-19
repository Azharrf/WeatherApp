import ContentLoader from 'react-content-loader'
import CardHighlights from '../../atoms/CardHighlights'

interface WindProps {
    data: any,
    windSpeed: number,
    windDeg: number,
    suhu: string,
}

export default function Wind(props: WindProps) {
  const { data, windSpeed, windDeg, suhu } = props
  const val = Math.floor((windDeg / 22.5) + 0.5)
  const arr = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW']
  const direction = arr[(val % 16)]

  return (
    <CardHighlights>
      {data ? (
        <>
          <h3>Wind Status</h3>
          <h1 id="speed">
            {windSpeed}
            <span>
              {(suhu === 'metric' && <>m/s</>) || (suhu === 'imperial' && <>km/h</>)}
            </span>
          </h1>

          <div className="wsw d-flex flex-row align-items-center">
            <i className="bx bxs-map" />
            {direction}
          </div>
        </>
      ) : (
        <ContentLoader viewBox="0 0 430 200">
          <rect x="0" y="0" rx="5" ry="5" width="150" height="30" />
          <rect x="0" y="60" rx="5" ry="5" width="200" height="60" />
          <circle cx="25" cy="175" r="25" />
          <rect x="65" y="160" rx="5" ry="5" width="100" height="30" />
        </ContentLoader>
      )}
    </CardHighlights>
  )
}
