export default function HamburgerMenuPages({
  className,
  url,
  onClick,
  classHamburger,
}) {
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
        <a onClick={onClick} className={classHamburger}>
          <li>Deleted All</li>
        </a>
      </ul>
    </div>
  );
}
