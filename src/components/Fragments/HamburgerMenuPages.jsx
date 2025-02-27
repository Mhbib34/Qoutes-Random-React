export default function HamburgerMenuPages({ className, url }) {
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
      </ul>
    </div>
  );
}
