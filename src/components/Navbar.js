import React from 'react';

const Navbar = ({setPage}) => {
    return ( 
        <nav>
            <button onClick={() => setPage('planets')}>Planets</button>

            <button onClick={() => setPage('people')}>Characters</button>
        </nav>
     );
}
 
export default Navbar;