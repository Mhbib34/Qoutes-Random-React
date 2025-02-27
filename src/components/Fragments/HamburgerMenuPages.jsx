export default function HamburgerMenuPages({ className }) {
  return (
    <div className={` ${className}`}>
      <ul className="flex text-center flex-col gap-3 py-4 px-3 text-white ">
        <a href="#">
          <li>Home</li>
        </a>
        <li>Favorite</li>
        <a href="#footer">
          <li>About</li>
        </a>
      </ul>
    </div>
  );
}
