export default function Button({ onClick, text, type, className }) {
  return (
    <button onClick={onClick} type={type} className={`${className}`}>
      {text}
    </button>
  );
}
