import React, {useContext} from 'react';
import { WordContext } from '../context/WordContext';


const Navbar = () => {
    const { searchWord } = useContext(WordContext);

    return ( 
        <nav>
            <h1>The Write Word</h1>
            <h2>{searchWord}</h2>
        </nav>
     );
}
 
export default Navbar;