export function Delete({ onDelete }) {
  return (
    <span style={styles} onClick={() => onDelete()}>
      X
    </span>
  );
}

const styles = {
  cursor: "pointer",
};
