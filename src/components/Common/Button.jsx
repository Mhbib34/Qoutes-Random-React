export default function Button({ text, type, className }) {
  return (
    <button
      type={type}
      className={`py-1 px-2 rounded-md border-none ${className}`}
    >
      {text}
    </button>
  );
}
