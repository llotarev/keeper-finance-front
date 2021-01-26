import React from "react";
import './style.css'
import {UIKit} from "../../../UIKit";
import {FiMinusCircle, FiPlusCircle} from "react-icons/all";

const {
    Label,
    Input,
    Button,
    Textarea,
    ButtonGroup,
} = UIKit;

export function AddItem() {

    //@TODO добавить поле Date для создание будущих или прошлых финансовых операций

    return (
        <form action="#">
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
    )
}
