import { useState } from "react";
import { Delete } from "./components/Delete";
import { Input } from "./components/Input";

function OPagadorDaVez() {
  const [names, setNames] = useState([]);
  const [currentName, setCurrentName] = useState("");

  return (
    <div style={mainStyles}>
      <h1>O Pagador da vez</h1>
      <div style={{ ...inputBlockStyles, marginTop: "30px" }}>
        <Input
          value={currentName}
          onChange={(value) => {
            setCurrentName(value);
          }}
        />
        <span
          tabIndex={0}
          onClick={() => {
            const nameToAdd = currentName;
            setNames([...names, nameToAdd]);
            setCurrentName("");
          }}
          style={{
            fontWeight: "800",
            fontSize: "30px",
            paddingLeft: "10px",
            cursor: "pointer",
          }}
        >
          +
        </span>
      </div>
      {names.map((name) => (
        <>
          <div styles={inputBlockStyles}>
            <Input value={name} disabled={false} />
            <Delete />
          </div>
        </>
      ))}
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
