export function Input({ onValue }) {
  let value = "";
  return (
    <>
      <input
        style={styles}
        onChange={(event) => {
          event.preventDefault();
          value = event.target.value;
        }}
      ></input>
      <span
        tabIndex={0}
        onClick={() => {
          onValue(value);
          value = "";
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
    </>
  );
}

const styles = {
  height: "30px",
  minWidth: "300px",
  border: "1px solid #babaca",
  borderRadius: "2px",
};
