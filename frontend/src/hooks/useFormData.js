import {useState} from "react";

function useFormData(initialState) {
    const [formData, setFormData] = useState(initialState);

    function handleChange(evt) {
        const {name, value} = evt.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    function resetFormData() {
        setFormData(initialState);
    }

    return [formData, handleChange, resetFormData];
}

export default useFormData;
