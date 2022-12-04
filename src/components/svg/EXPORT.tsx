import React from "react";

// components
import * as Icons from "./icons/EXPORT";

// types
import { ClassName } from "~types";

export interface IIconProps {
  className?: ClassName;
  onClick?(e: React.MouseEvent<HTMLOrSVGElement>): void;
}

export type IconType = keyof typeof Icons

export interface IDynamicProps extends IIconProps {
  icon: IconType;
}

const Icon = (props: IDynamicProps) => {
  const { icon, ...rest } = props;

  const Icon = Icons[icon as keyof typeof Icons];

  return <Icon {...rest} />;
};

export { Icons };
export default Icon;
