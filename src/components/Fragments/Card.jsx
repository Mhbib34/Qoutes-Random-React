import RepeatButton from "../Common/RepeatButton";
import SocialMediaLinks from "../Common/SocialMediaLinks";

export default function Card({ data, onClick }) {
  return (
    <>
      <div className="border justify-between gap-2 rounded-lg shadow-[0_6px_8px_rgba(52,116,134,0.4)] hover:shadow-[0_10px_15px_rgba(52,116,134,0.6)] transition-shadow duration-300 ease-in-out p-4 flex lg:w-[50%] flex-col items-center">
        <span className="font-bold text-2xl text-primary">
          Quotes of the day
        </span>
        <span className="text-center italic">{data[0].content}</span>
        <span className="font-medium">~{data[0].author}~</span>
      </div>
      <div className="lg:w-[50%] flex gap-2 items-center justify-end mt-2">
        <SocialMediaLinks data={data} />
        <RepeatButton onClick={onClick} />
      </div>
    </>
  );
}
