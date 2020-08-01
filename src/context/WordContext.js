import React, { useState, createContext, useContext } from 'react';

export const WordContext = createContext({
         searchWord: "",
         searchType: "ml",
       });


export function WordContextProvider(props) {

    const wordContext = useContext(WordContext);

    const [searchWord, setSearchWord] = useState(wordContext.searchWord);
    const [searchType, setSearchType] = useState(wordContext.searchType);


    const provider = {

        searchWord,
        setSearchWord: (searchWord) => {
            setSearchWord(searchWord);
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

