import React from 'react'

export default function Header({headerHeading}) {
    return (
        <header className='header-div'>
            <h1>{headerHeading}</h1>
        </header>
    );
}
