import React, {useState} from "react";
import "./Finance.css"
import {Input} from "../UIKit/Input";
import {Button} from "../UIKit/Button";
import {Label} from "../UIKit/Label";
import {FaBell} from "react-icons/all";

export function Finance() {


    const disabled = false;

    return (
        <div className="finance">
            <Label>
                <span>Name</span>
                <Input placeholder="name"/>
            </Label>
            <Label>
                <span>email*</span>
                <Input required placeholder="email*"/>
            </Label>
            <Label>
                <span>disabled</span>
                <Input required placeholder="email*"/>
            </Label>

            <Button disabled={disabled}>Текст</Button>
            <Button disabled={disabled} variant="glass">Текст</Button>
            <Button disabled={disabled} variant="outline">Текст</Button>
            <Button disabled={disabled} variant="link">Текст</Button>
        </div>
    )
}