export function Input({ value, onChange, disabled = false }) {
  return (
    <input
      disabled={disabled}
      style={styles}
      onChange={(event) => {
        onChange(event.target.value);
      }}
    ></input>
  );
}

const styles = {
  height: "30px",
  minWidth: "300px",
  border: "1px solid #babaca",
  borderRadius: "2px",
};
