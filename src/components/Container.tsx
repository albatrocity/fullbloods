import { ContainerProps, Container as PContainer } from '@styled-system/jsx'

export function Container(props: ContainerProps) {
  return <PContainer maxWidth="4xl" {...props} />
}
