import {routes} from "./index";

const finance = [
    {
        path: routes.finance.root,
        title: "Финансы",
    },
    {
        path: routes.finance.create,
        title: "Добавление",
    }
]

export const nav = [
    ...finance
]