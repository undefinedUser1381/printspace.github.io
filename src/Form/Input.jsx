export default function Input(props) {
  return (
    <input
      type={props.type}
      className={props.className}
      value={props.value}
      onChange={props.onChange}
    />
  );
}
