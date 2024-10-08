import React from "react";
import ReactDOM from "react-dom/client";


const header2 = (<h2 id="small-title" key="h2"> Hello There. </h2>);
const Head = () => {
  return <h1>heading from functional component</h1>;
}
//Functional component
const heading = <h1>Hello from react element</h1>;
const Header = () => {
  return (
    <div>
      <h1> Hello there </h1>
      {heading}
      {Head()}
      {/* <Head/> */}
    </div>
  );
};


// const container = React.createElement("div", { id: "container" }, [header2]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header/>);
