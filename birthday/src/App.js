import React from "react";
import "./index.css";
import celebrants from "./celebrants";

const App = () => {
  const [people, setPeople] = React.useState(celebrants);

  const removeData = (id) => {
    let newPeople = people.filter((celeb) => celeb.id !== id);
    setPeople(newPeople);
  };

  return (
    <div>
      <h3 style={{ textAlign: "center", color: "chocolate" }}>
        6 birthdays today
      </h3>
      {people.map((celeb) => {
        const { id, img, name, age } = celeb;

        return (
          <div key={id} className="info">
            <img src={img} alt="birthday images" />
            <h4>{name}</h4>
            <p>{age}</p>
            <button onClick={() => removeData(id)}>Remove item</button>
          </div>
        );
      })}
      <button className="clear" type="button" onClick={() => setPeople([])}>
        Clear data
      </button>
    </div>
  );
};

export default App;
