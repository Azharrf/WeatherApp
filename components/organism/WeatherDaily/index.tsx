import ContentLoader from 'react-content-loader'
import CardItem from '../../atoms/CardItem'
import WeatherItem from '../../molecouls/WeatherItem'

interface WeatherDailyProps {
  weather: any[],
  suhu: string
}

export default function WeatherDaily(props: WeatherDailyProps) {
  const { weather, suhu } = props
  return (
    <>
      <div className="week-weather">
        {weather ? (
          Object.values(weather.daily).map((weth: any, idx) => (
            idx < 7 && <WeatherItem day={weth.dt} icon={weth.weather[0].icon} tempHigh={weth.temp.max} tempLow={weth.temp.min} suhu={suhu} />
          ))
        ) : (
          <>
            <CardItem>
              <ContentLoader viewBox="0 0 300 290">
                <rect x="45" y="0" rx="5" ry="5" width="210" height="40" />
                <rect x="85" y="85" rx="5" ry="5" width="130" height="120" />
                <rect x="45" y="250" rx="5" ry="5" width="210" height="40" />
              </ContentLoader>
            </CardItem>
            <CardItem>
              <ContentLoader viewBox="0 0 300 290">
                <rect x="45" y="0" rx="5" ry="5" width="210" height="40" />
                <rect x="85" y="85" rx="5" ry="5" width="130" height="120" />
                <rect x="45" y="250" rx="5" ry="5" width="210" height="40" />
              </ContentLoader>
            </CardItem>
            <CardItem>
              <ContentLoader viewBox="0 0 300 290">
                <rect x="45" y="0" rx="5" ry="5" width="210" height="40" />
                <rect x="85" y="85" rx="5" ry="5" width="130" height="120" />
                <rect x="45" y="250" rx="5" ry="5" width="210" height="40" />
              </ContentLoader>
            </CardItem>
            <CardItem>
              <ContentLoader viewBox="0 0 300 290">
                <rect x="45" y="0" rx="5" ry="5" width="210" height="40" />
                <rect x="85" y="85" rx="5" ry="5" width="130" height="120" />
                <rect x="45" y="250" rx="5" ry="5" width="210" height="40" />
              </ContentLoader>
            </CardItem>
            <CardItem>
              <ContentLoader viewBox="0 0 300 290">
                <rect x="45" y="0" rx="5" ry="5" width="210" height="40" />
                <rect x="85" y="85" rx="5" ry="5" width="130" height="120" />
                <rect x="45" y="250" rx="5" ry="5" width="210" height="40" />
              </ContentLoader>
            </CardItem>
            <CardItem>
              <ContentLoader viewBox="0 0 300 290">
                <rect x="45" y="0" rx="5" ry="5" width="210" height="40" />
                <rect x="85" y="85" rx="5" ry="5" width="130" height="120" />
                <rect x="45" y="250" rx="5" ry="5" width="210" height="40" />
              </ContentLoader>
            </CardItem>
            <CardItem>
              <ContentLoader viewBox="0 0 300 290">
                <rect x="45" y="0" rx="5" ry="5" width="210" height="40" />
                <rect x="85" y="85" rx="5" ry="5" width="130" height="120" />
                <rect x="45" y="250" rx="5" ry="5" width="210" height="40" />
              </ContentLoader>
            </CardItem>
          </>
        )}
      </div>
    </>
  )
}
