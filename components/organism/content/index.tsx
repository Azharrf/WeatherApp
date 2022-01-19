import ContentLoader from 'react-content-loader'
import Highlights from '../Highlights'
import WeatherDaily from '../WeatherDaily'
import Button from './button'

interface ContentProps {
  data: any,
  suhu: string,
  onClick: (value: any) => void
}

export default function Content(props: ContentProps) {
  const { data, suhu, onClick } = props
  return (
    <>
      <div
        className="col-md-12 col-lg-9 weather-prediksi d-flex flex-column justify-content-between align-items-center"
      >
        <div className="header d-flex align-items-center">
          <h1>Weekly</h1>
          <Button title="°C" active={suhu === 'metric'} onCLick={() => onClick('metric')} />
          <Button title="°F" active={suhu === 'imperial'} onCLick={() => onClick('imperial')} />
          <div className="avatar">
            <img src="/image/people1.jpg" alt="Avatar User" />
          </div>
        </div>

        <WeatherDaily weather={data} suhu={suhu} />
        <Highlights data={data} suhu={suhu} />
      </div>
    </>
  )
}
