export default function Button({ onClick, text, type, className }) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`py-1 px-2 rounded-md border-none ${className}`}
    >
      {text}
    </button>
  );
}
