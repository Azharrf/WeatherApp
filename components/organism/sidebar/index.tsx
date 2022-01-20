import moment from 'moment'
import { useState } from 'react'
import ContentLoader from 'react-content-loader'
import Table from './Table'

interface SidebarProps {
  onSearch: (e: any) => void,
  onClose: () => void,
  data: any,
  suhu: string
}

export default function Sidebar(props: SidebarProps) {
  const { onSearch, onClose, data, suhu } = props
  const [country, setCountry] = useState<any>(null)

  return (
    <div className="col-md-12 col-lg-3 weather-city">
      <div className="row">
        <div className="input-group flex-nowrap search-container align-items-center">
          <button
            className="input-group-text"
            id="addon-wrapping"
            onClick={() => onSearch(country)}
            type="button"
          >
            <i className="bx bx-search" />
          </button>
          <input type="text" className="form-control search-input" placeholder="Search for places..." aria-label="Username" aria-describedby="addon-wrapping" value={country} onChange={(e) => setCountry(e.target.value)} />
          <button
            type="button"
            className="search-button"
            onClick={() => onSearch(country)}
          >
            Cari
          </button>
          {country && (
            <button
              type="button"
              className="btn-close"
              onClick={() => {
                onClose()
                setCountry('')
              }}
            >
              <i className="bx bx-x" />
            </button>
          )}
        </div>

        <div className="main-weather col-md-6 col-xl-12">
          {data ? (
            <>
              <div className="weather">
                <img src={`https://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`} alt="weather" id="weather-main" />
                <h1 id="suhu">
                  {Math.round(data.current.temp)}
                  <span>°</span>
                  {(suhu === 'metric' && <>C</>) || (suhu === 'imperial' && <>F</>)}
                </h1>
              </div>
              <h3 id="date-time">
                {moment(data.daily[0].dt * 1000).format('dddd, ')}
                <span>
                  {moment(data.daily[0].dt * 1000).format('DD MMMM YY')}
                </span>
              </h3>
            </>
          ) : (
            <ContentLoader viewBox="0 0 400 310">
              <rect x="0" y="55" rx="5" ry="5" width="170" height="150" />
              <rect x="200" y="95" rx="5" ry="5" width="200" height="80" />
              <rect x="0" y="250" rx="5" ry="5" width="400" height="40" />
            </ContentLoader>
          )}
        </div>

        <hr />

        <div className="weather-coludy d-flex align-items-center col-md-6 col-xl-12">
          {data ? (
            <>
              <img src={`https://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`} alt="" id="img-desc" />

              <div className="weather-rain d-flex flex-column justify-content-evenly">
                <p className="desc">{data.current.weather[0].main}</p>
                <p className="main">{data.current.weather[0].description}</p>
              </div>
            </>
          ) : (
            <ContentLoader viewBox="0 0 400 180">
              <rect x="0" y="40" rx="5" ry="5" width="130" height="100" />
              <rect x="160" y="60" rx="5" ry="5" width="140" height="25" />
              <rect x="160" y="95" rx="5" ry="5" width="140" height="25" />
            </ContentLoader>
          )}
        </div>

        <div className="weather-temp col-md-6 col-xl-12">
          <table className="table table-borderless">
            {data ? (
              <>
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">Morn</th>
                    <th scope="col">After</th>
                    <th scope="col">Even</th>
                    <th scope="col">Night</th>
                  </tr>
                </thead>
                <tbody>
                  {data && (
                    <>
                      <Table text="Tmp" morn={data.daily[0].temp.morn} after={data.daily[0].temp.day} even={data.daily[0].temp.eve} night={data.daily[0].temp.night} />
                      <Table text="Fls" morn={data.daily[0].feels_like.morn} after={data.daily[0].feels_like.day} even={data.daily[0].feels_like.eve} night={data.daily[0].feels_like.night} />
                    </>
                  )}
                </tbody>
              </>
            ) : (
              <ContentLoader viewBox="0 0 400 150">
                <rect x="60" y="0" rx="5" ry="5" width="70" height="25" />
                <rect x="150" y="0" rx="5" ry="5" width="70" height="25" />
                <rect x="240" y="0" rx="5" ry="5" width="70" height="25" />
                <rect x="330" y="0" rx="5" ry="5" width="70" height="25" />
                <rect x="0" y="50" rx="5" ry="5" width="40" height="25" />
                <rect x="60" y="50" rx="5" ry="5" width="70" height="25" />
                <rect x="150" y="50" rx="5" ry="5" width="70" height="25" />
                <rect x="240" y="50" rx="5" ry="5" width="70" height="25" />
                <rect x="330" y="50" rx="5" ry="5" width="70" height="25" />
                <rect x="0" y="100" rx="5" ry="5" width="40" height="25" />
                <rect x="60" y="100" rx="5" ry="5" width="70" height="25" />
                <rect x="150" y="100" rx="5" ry="5" width="70" height="25" />
                <rect x="240" y="100" rx="5" ry="5" width="70" height="25" />
                <rect x="330" y="100" rx="5" ry="5" width="70" height="25" />
              </ContentLoader>
            )}
          </table>
        </div>

        {data ? (
          <div className="city d-flex align-items-center justify-content-center col-md-6 col-xl-12">
            <div className="overlay"></div>
            <p className="kota">{data.timezone}</p>
          </div>
        ) : (
          <ContentLoader viewBox="0 0 400 140">
            <rect x="0" y="0" rx="15" ry="15" width="400" height="140" />
          </ContentLoader>
        )}
      </div>
    </div>
  )
}
