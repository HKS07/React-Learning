import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="border border-black p-2 m-2">
      <div className="flex justify-between">
        <h1 className="text-xl p-2 m-2">{title}</h1>
        {isVisible ? (
          <button className="text-2xl" onClick={() => setIsVisible("x")}>🔼</button>
        ) : (
          <button className="text-2xl" onClick={() => setIsVisible(title)}>
            🔽
          </button>
        )}
      </div>

      {isVisible && <p>{description}</p>}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("x");

  return (
    <div>
      <h1 className="text-3xl font-bold p-2 m-2"> Instamart</h1>
      <Section
        title={"About instamart"}
        description={"This is description of Instamart"}
        isVisible={visibleSection==="About instamart"}
        setIsVisible={(x) => {
          setVisibleSection(x);
        }}
      />
      <Section
        title={"Team instamart"}
        description={"This is description of Team"}
        isVisible={visibleSection==="Team instamart"}
        setIsVisible={(x) => {
          setVisibleSection(x);
        }}
      />
      <Section
        title={"Careers instamart"}
        description={"This is description of Careers"}
        isVisible={visibleSection==="Careers instamart"}
        setIsVisible={(x) => {
          setVisibleSection(x);
        }}
      />
    </div>
  );
};

export default Instamart;
