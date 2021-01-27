import React, {useState} from "react";
import './style.css'
import {useHistory, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {createSelector} from "reselect";
import {UIKit} from "../../../UIKit";
import {FiArrowLeft, FiSave} from "react-icons/all";
import {financeReducerSelectors, financeReducerThunk} from "../../../../store/reducer/finance";
import {routes} from "../../../../routes";

const {
    Label,
    Input,
    Button,
    Textarea,
    ButtonGroup,
} = UIKit;


export function EditItem() {

    const {update} = financeReducerThunk();

    const financeOne = createSelector(
        financeReducerSelectors.getFinance,
        items => items.find(({id}) => id == query.id)
    )

    const history = useHistory()
    const query: any = useParams();
    const dispatch = useDispatch();
    const {
        id,
        name,
        amount,
        description,
        ...other
    }: any = useSelector(financeOne);


    const [form, setForm] = useState<object>({
        name,
        amount,
        description
    })

    function handleChange(e: React.ChangeEvent<HTMLFormElement>) {
        setForm(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    function handleCancel() {
        history.push(routes.finance.root)
    }

    function handleEdit(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        dispatch(update({
            ...form,
            ...other,
            finance_id: id,
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
                    defaultValue={name}
                    placeholder="Введите название"
                />
            </Label>
            <Label>
                <span>Сумма</span>
                <Input
                    name="amount"
                    type="tel"
                    defaultValue={amount}
                    placeholder="Введите сумму"
                />
            </Label>
            <Label>
                <span>Описание</span>
                <Textarea
                    name="description"
                    resizeable
                    rows={4}
                    defaultValue={description}
                    placeholder="Введите описание"
                />
            </Label>
            <ButtonGroup>
                <Button color="danger" onClick={handleCancel}>
                    <FiArrowLeft/> Отмена
                </Button>
                <Button onClick={handleEdit}>
                    <FiSave/> Сохранить
                </Button>
            </ButtonGroup>
        </form>
    )
}
