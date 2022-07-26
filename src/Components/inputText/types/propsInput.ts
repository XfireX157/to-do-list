export interface IProps {
    id?: string
    backgroundColor?: string
    textColor?: string
    placeholder: string
    placeHolderColor?: string
    Change?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: <HTMLInputElement>
}