import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from './babel.png';
import logo1 from './babel1.svg'
import addUser from './search.png';
import addUser1 from './add-icon.svg';

import './App.css';

const Logo = () => {
    return <img src={logo1} alt="logo"/>;
};

const AddUser = () => {
    return <img src={addUser1} alt="add user"/>;
};

const SearchBar = () => {
    return (
        <div className="search">
            <input type="text" id="searchContent" placeholder="Search something..."/>
        </div>
    );
};
const Header = () => {
    return (
        <div className="header">
            <Logo/>
            <SearchBar/>
            <AddUser/>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header/>);