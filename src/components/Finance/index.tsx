import React from "react";
import "./Finance.css"
import {Alerts} from "../UIKit/Alerts";
import {Input} from "../UIKit/Input";
import {Button} from "../UIKit/Button";

export function Finance() {
    return (
        <div className='finance'>
            <form action="">
                <div style={{background: "#1f1f1f"}}>
                    <Input/>
                </div>
                <Input variant="dark"/>
            </form>
            <Alerts controller={(<>
                <Button variant="link">Отмена</Button>
            </>)}>
                <Button>Отмена</Button>
                <Button disabled>Отмена</Button>

                <Button variant="outline">Отмена</Button>
                <Input variant="dark" required placeholder="Имя"/>
            </Alerts>
        </div>
    )
}