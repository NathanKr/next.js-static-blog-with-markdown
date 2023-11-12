import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <header>
            <div className="container">
                <Link href='/'>Blog</Link>
            </div>
        </header>
    );
};

export default Header;