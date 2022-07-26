import React from "react";
import { Button } from "../Button";
import { InputText } from "../inputText/index";
import { InputTime } from "../inputTime";

const Form = () => {
    return(
        <form>
            <div>
                <label htmlFor="assignment">
                    Adicione um novo estudo
                </label>
                <InputText
                id="assignment"
                placeholder="campo"
                textColor={'red'} 
                backgroundColor={"blue"}/>
            </div>
            <div>
                <label htmlFor="time">
                    Tempo 
                </label>
                <InputTime            
                    id="time"
                    name="time"
                    step="1"
                    min="00:00:00"
                    max="01:30:00"
                />
            </div>
            <Button backgroundColor="red" txtColor="blue"> Criar card</Button>
        </form>
    )
}

export default Form