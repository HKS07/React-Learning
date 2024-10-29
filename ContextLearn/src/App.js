import React, { useState } from "react";
import ReactDOM from "react-dom";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Context from "./utils/Context";

const App = () => {
  const [user, setUser] = useState({ name: "context@gmail.com", email: "something" });
  return (
    <Context.Provider value={{ user: user,setUser: setUser }}>
      <Header />
      <Body />
      <Footer />
    </Context.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
