import React, {useState} from "react";

export function useInput() {

    const [value, setValue] = useState<string>('');

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setValue(event.currentTarget.value)
    }

    return {
        value,
        onChange: handleChange
    }
}