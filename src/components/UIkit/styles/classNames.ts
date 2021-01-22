function classNames(classes: object | any) {
    let className: string = '';
    Object.entries(classes).map(([key, value]) => {
        if (key === "undefined") return;
        if (value) className += ` ${key}`;
    });
    return className.trim()
}

export default classNames;