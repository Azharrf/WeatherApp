export default function CardHighlights({ children }: any) {
  return (
    <>
      <div className="col-6 col-md-4 col-xl-4 hightlight d-flex justify-content-between flex-column">
        {children}
      </div>
    </>
  )
}
