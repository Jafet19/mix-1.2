import React, { useState } from 'react';

function Header(){
    const [showList, setShowList] = useState(true)
    return (
            <nav>
            <h1>Weeaboo</h1>
                <ul>
                <button><li>Home</li></button>
                <li>Movies</li>
                <li>Series</li>
                </ul>
            </nav>
    )
}
export default Header