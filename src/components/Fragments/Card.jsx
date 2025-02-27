export default function Card({ data, text, className, children }) {
  return (
    <>
      <div className={className}>
        <span className="font-bold text-2xl text-primary">{text}</span>
        <span className="text-center italic">{data.content}</span>
        <span className="font-medium">~{data.author}~</span>
        {children}
      </div>
    </>
  );
}
