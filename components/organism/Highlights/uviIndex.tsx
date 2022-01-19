import { useEffect, useState } from 'react'
import ContentLoader from 'react-content-loader'
import CardHighlights from '../../atoms/CardHighlights'

export default function UviIndex(props: any) {
  const { uvi, data } = props
  const [bar, setBar] = useState(0)

  const styleBar = async () => {
    const start = 45
    const angle = 15
    const angleBar = start + (uvi * angle)

    if (uvi < 12) {
      setBar(angleBar)
    } else if (uvi > 12) {
      const newAngle = start + (12 * angle)
      setBar(newAngle)
    }
  }

  useEffect(() => {
    setTimeout(() => {
      styleBar()
    }, 50)
  }, [uvi])

  return (
    <CardHighlights>
      {data ? (
        (uvi === 0 || uvi > 0) && (
          <>
            <h3>UV Index</h3>
            <div className="semi-donut">
              <div className="bar" style={{ transform: `rotate(${bar}deg)` }} />
              <h1 id="uv-index">{uvi}</h1>
            </div>
          </>
        )
      ) : (
        <>
          <h3></h3>
          <ContentLoader viewBox="0 0 420 50">
            <rect x="0" y="0" rx="5" ry="5" width="140" height="30" />
          </ContentLoader>
          <div className="semi-donut">
            <div className="bar" />
            <ContentLoader viewBox="0 0 420 80">
              <rect x="150" y="15" rx="5" ry="5" width="120" height="60" />
            </ContentLoader>
          </div>
        </>
      )}
    </CardHighlights>
  )
}
