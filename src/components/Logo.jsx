import { useId } from 'react'

export function Logo(props) {
  let id = useId()

  return (
    <h2 className="speed-chat">
      Speed<span className="highlight">Changelog</span>
    </h2>
  )
}
