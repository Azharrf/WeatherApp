import moment from 'moment'
import ContentLoader from 'react-content-loader'
import CardHighlights from '../../atoms/CardHighlights'

interface SunriseProps {
    data: any,
    sunrise: number,
    sunset: number,
}

export default function Sunrise(props: SunriseProps) {
  const { data, sunrise, sunset } = props

  return (
    <CardHighlights>
      {data ? (
        <>
          <h3>Sunrise & Sunset</h3>
          <div className="sunrise d-flex align-items-center">
            <i className="bx bx-up-arrow-alt" />
            <h2 id="sunrise">{moment(sunrise * 1000).format('hh:MM A')}</h2>
          </div>
          <div className="sunset d-flex align-items-center">
            <i className="bx bx-down-arrow-alt" />
            <h2 id="sunset">{moment(sunset * 1000).format('hh:MM A')}</h2>
          </div>
        </>
      ) : (
        <ContentLoader viewBox="0 0 430 200">
          <rect x="0" y="0" rx="5" ry="5" width="150" height="30" />
          <circle cx="30" cy="90" r="30" />
          <rect x="75" y="73" rx="5" ry="5" width="150" height="35" />
          <circle cx="30" cy="165" r="30" />
          <rect x="75" y="148" rx="5" ry="5" width="150" height="35" />
        </ContentLoader>
      )}
    </CardHighlights>
  )
}
