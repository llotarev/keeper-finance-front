import React, {useEffect, useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {hooks} from "./hooks";
import {Button, Form, ListGroup, Navbar, ToggleButton, ToggleButtonGroup} from 'react-bootstrap'
import {financeReducerSelectors, financeReducerThunk} from "./store/reducer/finance";
import {useDispatch, useSelector} from "react-redux";

const {useInput} = hooks;


function App() {

    const dispatch = useDispatch();
    const finance = useSelector(financeReducerSelectors.getFinance);


    const [isEdit, setIsEdit] = useState<boolean>(false)
    const [financeType, setFinanceType] = useState<"income" | "spending">("income");
    const [form, setForm] = useState({
        name: "",
        amount: 0,
        description: "",
    })

    useEffect(() => {
        dispatch(financeReducerThunk().get())
    }, []);


    function handleSubmit() {
        dispatch(financeReducerThunk().create({
            ...form,
            finance_type: financeType,
            create_date: new Date().toLocaleString(),
            user_id: 1
        }))
    }

    function handleDelete(event: React.MouseEvent<HTMLButtonElement> | any) {
        dispatch(financeReducerThunk().del(
            Number(event.target.id)
        ))
    }

    const update = {
        amount: useInput(),
    }

    function handleChange(event: React.ChangeEvent<HTMLFormElement> | any) {
        const {name, value} = event.target;
        setForm((prevState: any) => ({
            ...prevState,
            [name]: value
        }))
    }


    function handleUpdate(event: React.MouseEvent<HTMLButtonElement> | any) {
        dispatch(financeReducerThunk().update({
            ...form,
            finance_id: event.target.id,
            finance_type: event.target.classList[0],
            create_date: new Date().toLocaleString(),
            user_id: 1
        }));
        setIsEdit(false)
    }

    return (
        <Router>
            <div className='app'>
                <Navbar bg="light">
                    <Navbar.Text>
                        Finance Keeper
                    </Navbar.Text>
                </Navbar>
                <form action="#" onChange={handleChange}>
                    <Form.Control type="text" name="name" defaultValue={form.name} placeholder="Название"/>
                    <Form.Control type="text" name="amount" defaultValue={form.amount} placeholder="Сумма"/>
                    <Form.Control type="text" name="description" defaultValue={form.description}
                                  placeholder="Описание"/>
                </form>
                <ToggleButtonGroup type="radio" name="option" onChange={setFinanceType}>
                    {[
                        {id: 1, name: "Доход", type: "income"},
                        {id: 2, name: "Траты", type: "spending"}
                    ].map((item) => (
                        <ToggleButton
                            key={item.id}
                            value={item.type}
                        >
                            {item.name}
                        </ToggleButton>
                    ))}
                </ToggleButtonGroup>
                <Button onClick={handleSubmit} block>
                    Отправить
                </Button>
                {finance.map((item: any) => {
                    return (
                        <ListGroup.Item
                            key={item.id}
                            variant={item.finance_type === "spending" ? "danger" : "primary"}
                        >
                            {isEdit ? (<>
                                <form action="#" onChange={handleChange}>
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        defaultValue={item.name}
                                        placeholder="Название"
                                    />
                                    <Form.Control
                                        type="text"
                                        name="amount"
                                        defaultValue={item.amount}
                                        placeholder="Сумма"
                                    />
                                    <Form.Control
                                        type="text"
                                        name="description"
                                        defaultValue={item.description}
                                        placeholder="Описание"
                                    />
                                </form>
                                <Button
                                    variant='danger'
                                    onClick={() => setIsEdit(false)}
                                    style={{marginRight: '12px'}}
                                >
                                    Отмена
                                </Button>
                                <Button
                                    id={item.id}
                                    className={item.finance_type}
                                    onClick={handleUpdate}
                                    variant='outline-success'
                                >
                                    Сохранить
                                </Button>
                            </>) : (<>
                                <h4>{item.name}</h4>
                                <p>{item.amount} ₽</p>
                                <p>{item.description}</p>
                                <Button
                                    id={item.id}
                                    variant='danger'
                                    onClick={handleDelete}
                                    style={{marginRight: '12px'}}
                                >
                                    Удалить
                                </Button>
                                <Button
                                    id={item.id}
                                    onClick={() => setIsEdit(true)}
                                    variant='outline-primary'
                                >
                                    Изменить
                                </Button>
                            </>)}
                        </ListGroup.Item>
                    )
                })}
            </div>
        </Router>
    );
}

export default App;