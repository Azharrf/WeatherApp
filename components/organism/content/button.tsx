import cx from 'classnames'

interface ButtonProps {
  active: boolean,
  title: string,
  onCLick: () => void
}

export default function Button(props: ButtonProps) {
  const { active, title, onCLick } = props
  const classActive = cx({
    'suhu-btn': true,
    active,
  })
  return (
    <>
      <button className={classActive} onClick={onCLick} type="button">{title}</button>
    </>
  )
}
