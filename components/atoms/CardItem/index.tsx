export default function CardItem({ children }: any) {
  return (
    <>
      <div className="day-weather d-flex flex-column justify-content-center align-items-center">
        {children}
      </div>
    </>
  )
}
