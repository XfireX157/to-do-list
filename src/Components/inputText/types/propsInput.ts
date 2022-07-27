import { InputHTMLAttributes } from "react";

export type IProps = {
    backgroundColor?: string
    textColor?: string
    placeHolderColor?: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string
  } &
    React.InputHTMLAttributes<HTMLInputElement>