import { SvgIconProps } from "../types";

export const SvgIcon = ({ src, width, height }: SvgIconProps) => {

    if (!!src && !src.toLowerCase().includes("://")) {
  src = `/img/svg/${src}`
    }

  return (
    <img style={{borderRadius: '13px'}} src={src} alt={src} width={width} height={height} />
  )
};
