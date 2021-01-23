import React from "react";
import "./Finance.css"
import {Input} from "../UIKit/Input";
import {Button} from "../UIKit/Button";
import {Label} from "../UIKit/Label";
import {FiLock, FiPhone, FiSave, FiTrash} from "react-icons/all";
import {ButtonGroup} from "../UIKit/ButtonGroup";

export function Finance() {

    return (
        <div className="finance">
            {/*<form>*/}
            <Label>
                <span><FiPhone/></span>
                <Input name="phone" type="tel" placeholder="Номер телефона"/>
            </Label>
            <Label>
                <span><FiLock/></span>
                <Input name="password" type="password" placeholder="Пароль"/>
            </Label>
            <ButtonGroup>
                <Button color="danger" variant="glass"><FiTrash/> Доходы</Button>
                <Button color="success" variant="glass"><FiSave/> Разходы</Button>
            </ButtonGroup>
            <Button type="submit">Отправить</Button>
            {/*</form>*/}
        </div>
    )
}