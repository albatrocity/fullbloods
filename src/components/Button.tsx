import { MouseEventHandler } from 'react'

type ButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement> | undefined
}

export function Button({ onClick }: ButtonProps) {
  return <button onClick={onClick}></button>
}
