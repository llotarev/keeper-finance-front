import {AxiosResponse} from "axios";
import {instance} from "./axios";

export const Responses = async (response: any): Promise<AxiosResponse> => {
    try {
        return await response
    } catch (e) {
        return await e.response
    }
}


export interface IFinance {
    name: string,
    amount: number
    user_id: number
    description: string
    create_date: string
    finance_type: string | "income" | "spending",
}

export interface IFinanceUpdate extends IFinance {
    finance_id: number
}


export const Finance = {
    async get() {
        return await Responses(
            instance.get('/finance')
        )
    },
    async create(props: IFinance) {
        return await Responses(
            instance.post('/finance', props)
        )
    },
    async update({finance_id, ...body}: IFinanceUpdate) {
        return await Responses(
            instance.put(`/finance/${finance_id}`, body)
        )
    },
    async del(finance_id: number) {
        return await Responses(
            instance.delete(`/finance/${finance_id}`)
        )
    }
}