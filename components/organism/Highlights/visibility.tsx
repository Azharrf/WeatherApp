import { useEffect, useState } from 'react'
import ContentLoader from 'react-content-loader'
import CardHighlights from '../../atoms/CardHighlights'

interface VisibilityProps {
    data: any,
    visibility: number,
}

export default function Visibility(props: VisibilityProps) {
  const { data, visibility } = props
  const value = visibility / 1000
  const [lvVsblty, setLvVsblty] = useState('Dense Fog')

  useEffect(() => {
    if (value <= 0.04) {
      setLvVsblty('Dense Fog')
    } else if (value >= 0.04 && value <= 0.2) {
      setLvVsblty('Thick Fog')
    } else if (value >= 0.2 && value <= 1) {
      setLvVsblty('Fog')
    } else if (value >= 1 && value <= 2) {
      setLvVsblty('Mist')
    } else if (value >= 2 && value <= 4) {
      setLvVsblty('Poor Visibility')
    } else if (value >= 4 && value <= 10) {
      setLvVsblty('Moderate Visibility')
    } else if (value >= 10 && value <= 40) {
      setLvVsblty('Good Visibility')
    } else if (value >= 40) {
      setLvVsblty('Excellent Visibility')
    }
  }, [visibility])

  return (
    <CardHighlights>
      {data ? (
        <>
          <h3>Visibility</h3>
          <h1 id="visibility">
            {visibility / 1000}
            <span>km</span>
          </h1>

          <div className="wsw d-flex flex-row align-items-center">
            <h5 id="level-vsblty">{lvVsblty}</h5>
          </div>
        </>
      ) : (
        <ContentLoader viewBox="0 0 430 200">
          <rect x="0" y="0" rx="5" ry="5" width="150" height="30" />
          <rect x="0" y="70" rx="5" ry="5" width="200" height="60" />
          <rect x="0" y="170" rx="5" ry="5" width="100" height="25" />
        </ContentLoader>
      )}
    </CardHighlights>
  )
}
