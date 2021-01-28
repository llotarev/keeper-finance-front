import React, {useState} from "react";
import './style.css'
import {UIKit} from "../../../UIKit";
import {routes} from "../../../../routes";
import {financeReducerThunk} from "../../../../store/reducer/finance";
import {FiArrowLeft, FiMinusCircle, FiPlusCircle} from "react-icons/all";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";

const {
    Label,
    Input,
    Button,
    Textarea,
    ButtonGroup,
} = UIKit;

export function AddItem() {

    const {create} = financeReducerThunk();

    const history = useHistory();
    const dispatch = useDispatch();

    function handleCancel(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        history.push(routes.finance.root)
    }

    const [form, setForm] = useState({
        name: "",
        amount: "",
        description: ""
    })

    function handleChange(e: React.ChangeEvent<HTMLFormElement>) {
        setForm(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    function handleAdd(e: React.MouseEvent<HTMLButtonElement | any>) {
        e.preventDefault();
        dispatch(create({
            name: form.name,
            amount: Number(form.amount),
            description: form.description,
            finance_type: e.currentTarget.id,
            create_date: new Date().toDateString(),
            user_id: 1,
        }))
    }

    //@TODO добавить поле Date для создание будущих или прошлых финансовых операций

    return (
        <form action="" onChange={handleChange}>
            <Label>
                <span>Название</span>
                <Input
                    name="name"
                    type="text"
                    placeholder="Введите название"
                />
            </Label>
            <Label>
                <span>Сумма</span>
                <Input
                    name="amount"
                    type="tel"
                    placeholder="Введите сумму"
                />
            </Label>
            <Label>
                <span>Описание</span>
                <Textarea
                    name="description"
                    resizeable rows={4}
                    placeholder="Введите описание"
                />
            </Label>
            <ButtonGroup>
                <Button onClick={handleCancel}><FiArrowLeft/> Отмена</Button>
                <Button color="success" id="income" onClick={handleAdd}>
                    <FiPlusCircle/> Доходы
                </Button>
                <Button color="danger" id="spending" onClick={handleAdd}>
                    <FiMinusCircle/> Разходы
                </Button>
            </ButtonGroup>
        </form>
    )
}