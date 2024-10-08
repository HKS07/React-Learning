import React from 'react';
import ReactDOM from 'react-dom/client';

// const header = React.createElement(
//     'div',
//     {class:"title"},
//     [React.createElement('h1',{},"H1 Title"), React.createElement('h2',{},"H2 Title"), React.createElement('h3',{},"H3 Title")]
// )

// const header = (
//     <div className="title">
//         header from JSX
//         <h1>H1</h1>
//         <h2>H2</h2>
//         <h3>H3</h3>
//     </div>
// )

const Header = () => {
    return (
        <div className="title">
            header from functional component
            <h1>H1</h1>
            <h2>H2</h2>
            <h3>H3</h3>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));

console.log(Header);
// root.render(header());
root.render(<Header/>);