import { Icon } from "@iconify/react"

export default function Iconify({ width = 20, height, icon, ...rest }) {
  return <Icon width={width} height={height} icon={icon} {...rest} />
}
