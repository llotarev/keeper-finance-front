import React, {useState} from "react";
import "./Finance.css"
import {Input} from "../UIKit/Input";
import {Button} from "../UIKit/Button";

export function Finance() {

    const [font, setFont] = useState("");

    function handleFocus(e: React.FocusEvent<HTMLInputElement>) {
        setFont("24")
    }

    function handleBlur(e: React.FocusEvent<HTMLInputElement>) {
        setFont("18")
    }

    return (
        <div className="finance">
            <form action="#">
                <Input placeholder="Имя"/>
                <Input type="range" min="14" max="64"

                       placeholder="Имя"/>
                <Input type="tel"
                       onFocus={handleFocus}
                       onBlur={handleBlur}
                       style={{fontSize: font + "px"}} placeholder="Динамический размер"/>
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