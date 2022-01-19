import Button from './button'

interface TopbarProps {
  suhu: string,
  onClick: () => void
}

export default function Topbar(props: TopbarProps) {
  const { suhu, onClick } = props
  return (
    <>
      <div className="header d-flex align-items-center">
        <h1>Weekly</h1>
        <Button title="°C" active={suhu === 'celcius'} onCLick={onClick} />
        <Button title="°F" active={suhu === 'fahrenheit'} onCLick={onClick} />
        <div className="avatar">
          <img src="/image/people1.jpg" alt="Avatar User" />
        </div>
      </div>
    </>
  )
}
