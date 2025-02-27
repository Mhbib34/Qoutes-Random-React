import Button from "../Common/Button";

export default function HamburgerMenuPages({ className, url, onClick }) {
  return (
    <div className={` ${className}`}>
      <ul className="flex text-center flex-col gap-3 py-4 px-3 text-white ">
        <a href={url}>
          <li>Home</li>
        </a>
        <a href="/favorites">
          <li>Favorite</li>
        </a>
        <a href="#footer">
          <li>About</li>
        </a>
        <Button text="Delete All" onClick={onClick} />
      </ul>
    </div>
  );
}
