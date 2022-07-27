import  {ReactNode } from "react";

export type IPropsButton = {
    backgroundColor?: string
    txtColor?: string
    children: ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>
