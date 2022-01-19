interface TableProps {
    morn: number,
    after: number,
    even: number,
    night: number,
    text: string,
}

export default function Table(props: TableProps) {
  const { morn, after, even, night, text } = props
  return (
    <tr>
      <td>{text}</td>
      <td>{morn}</td>
      <td>{after}</td>
      <td>{even}</td>
      <td>{night}</td>
    </tr>
  )
}
