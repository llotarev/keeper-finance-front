import React, {useState} from "react";

export function useCheckbox() {

    const [value, setValue] = useState<string>('');
    const [checked, setChecked] = useState<boolean>(false);

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setChecked(event.currentTarget.checked);
        setValue(event.currentTarget.value);
    }

    return {
        value,
        checked,
        onChange: handleChange
    }
}