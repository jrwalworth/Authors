import React from 'react';
import './Main.css';
import AddAuthor from '../AddAuthor/AddAuthor';
import AuthorList from '../AuthorList/AuthorList';

const Main = () => {
    return (
        <div>
            {/* <AddAuthor /> */}
            {/* <hr /> */}
            <AuthorList />
        </div>
    );
};

export default Main;