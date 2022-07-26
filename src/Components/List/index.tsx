import React, { useState } from "react"

import * as C from './style'

const List = () => {

    const [tasks, setTasks] = useState([])

    return(
        <C.ListTasks>
            <h2>Estudos do dia</h2>
            <ul>
                <li className="item">
                    <h3>React</h3>
                    <span>01:00:00</span>
                </li>
            </ul>
        </C.ListTasks>
    )
}

export default List