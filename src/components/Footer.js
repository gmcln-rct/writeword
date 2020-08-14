import React, { useContext } from 'react';

const Footer = () => {
    var day = new Date();
    var year = day.getFullYear();
    return (
        <footer>
            <p>Data Source: <a href="https://www.datamuse.com/api/" target="_blank" rel="noopener noreferrer">Datamuse API</a></p>
            <p>©{year} Glenn McClanan</p>
        </footer>
    );
}

export default Footer;