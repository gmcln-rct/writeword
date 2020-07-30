import React, { useState, createContext, useContext } from 'react';

export const WordContext = createContext({
    word: "",
    searchType: "ml"
});


export function WordContextProvider(props) {

    const budgetContext = useContext(WordContext);

    const [name, setName] = useState(budgetContext.name);
    const [searchType, setSearchType] = useState(budgetContext.searchType);

    const provider = {

        name,
        setName: (name) => {
            setName(name);
        },
        searchType,
        setSearchType: (searchType) => {
            setSearchType(searchType);
        },

    };

    return (
        <WordContext.Provider value={provider}>
            {props.children}
        </WordContext.Provider>
    );
};

