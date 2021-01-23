import React from "react";
import "./Finance.css"
import {Input} from "../UIKit/Input";
import {Button} from "../UIKit/Button";
import {Label} from "../UIKit/Label";
import {FiMinusCircle, FiPlusCircle} from "react-icons/all";
import {ButtonGroup} from "../UIKit/ButtonGroup";
import {Textarea} from "../UIKit/Textarea";

export function Finance() {

    return (
        <div className="finance">
            <form>
                <Label>
                    <span>Название</span>
                    <Input name="name" type="tel" placeholder="Введите название"/>
                </Label>
                <Label>
                    <span>Сумма</span>
                    <Input name="amount" type="tel" placeholder="Введите сумму"/>
                </Label>
                <Label>
                    <span>Описание</span>
                    <Textarea name="description" resizeable rows={4} placeholder="Введите описание"/>
                </Label>
                <ButtonGroup>
                    <Button color="success" variant="glass"><FiPlusCircle/> Доходы</Button>
                    <Button color="danger" variant="glass"><FiMinusCircle/> Разходы</Button>
                </ButtonGroup>
            </form>
        </div>
    )
}