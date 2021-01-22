import React from "react";
import "./Finance.css"
import {Input} from "../UIKit/Input";
import {Button} from "../UIKit/Button";

export function Finance() {
    return (
        <div className="finance">
            <form action="#">
                <Input placeholder="Имя"/>
                <Input type="tel" placeholder="Сумма"/>
                <Button>Отправить</Button>
            </form>
            <div className="card">

            </div>
        </div>
    )
}