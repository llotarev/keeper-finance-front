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
                <Input disabled type="tel" placeholder="Сумма"/>
                <Button>Отправить</Button>
                <Button variant="link">Отправить</Button>
            </form>
            <div className="card">
                <Input variant="dark" type="tel" placeholder="Сумма"/>
                <Input variant="dark" disabled type="tel" placeholder="Сумма"/>
            </div>
        </div>
    )
}