import { Button } from "../Button"
import { Watch } from "./watch"

import * as C from './style'

export const Stopwatch = () => {
    return(
        <C.StopWatch>
            <C.title>Escolha um card e inicie o cronômetro</C.title>
            <C.WatchWrapper>
                <Watch/>
            </C.WatchWrapper>
            <Button
                backgroundColor="#88bcd1" 
                txtColor="#272626">
                Começar
            </Button>
        </C.StopWatch>
    )
}