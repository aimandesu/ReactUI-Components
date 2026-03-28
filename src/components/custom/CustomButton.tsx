import * as React from "react";
import { Button } from "../ui/button";

export interface ButtonProps extends React.ComponentProps<typeof Button> {
  title?: string;
}

export const CustomButton: React.FC<ButtonProps> = ({ title, ...props }) => {
  return <Button {...props}>{title || props.children}</Button>;
};
