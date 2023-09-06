import { createContext, useState } from "react";

export const FormContext = createContext({
    showForm: false,
    setShowForm: () => false,
});

export const FormContextProvider = ({ children }) => {
    const [showForm, setShowForm] = useState(false);

    const contextValue = {
        showForm, setShowForm
    };

    return (
        <FormContext.Provider value={ contextValue }>
            { children }
        </FormContext.Provider>
    );
}
