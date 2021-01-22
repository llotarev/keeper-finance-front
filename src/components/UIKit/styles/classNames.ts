function classNames(classes: object): string {

    let classNames: string = '';
    Object.entries(classes).map(([key, value]) => {
        if (key === "undefined") return;
        if (value) classNames += ` ${key}`;
    })

    return classNames.trim();
}

export default classNames;