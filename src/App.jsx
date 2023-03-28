import { useReducer, useState } from "react";
import { Input } from "./components/Input";

function OPagadorDaVez() {
  const [persons, setPersons] = useState([]);
  const [chosenPerson, setChosenPerson] = useState();

  const removePerson = (name) => {
    setPersons(persons.filter((value) => value != name));
  };

  const addPerson = (name) => {
    if (!persons.includes(name)) setPersons([...persons, name]);
  };

  const choosePerson = () => {
    do {
      const value = Number(Math.random() * 100).toFixed(0);
      if (persons[value]) {
        setChosenPerson(persons[value]);
        break;
      }
    } while (true);
  };

  return (
    <div style={mainStyles}>
      <h1>O Pagador da vez</h1>
      <div style={{ ...inputBlockStyles, marginTop: "30px" }}>
        <Input
          onValue={(value) => {
            addPerson(value);
          }}
        />
      </div>
      {persons.map((person) => (
        <>
          <span key={person}>{person}</span>
          <span onClick={() => removePerson(person)}>x</span>
        </>
      ))}

      <span
        onClick={() => {
          console.log(persons[choosePerson()]);
        }}
      >
        SORTEAR
      </span>
      <span>{chosenPerson ?? ""}</span>
    </div>
  );
}

const mainStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "50px",
};

const inputBlockStyles = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "320px",
  padding: "10px",
};

export default OPagadorDaVez;
