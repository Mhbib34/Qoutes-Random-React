export default function HamburgerMenuPages({ className }) {
  return (
    <div className={`bg-[#2b2b2b] relative -top-0  ${className}`}>
      <ul className="flex text-center flex-col gap-3 py-4 px-3 text-white ">
        <li>Home</li>
        <li>Favorite</li>
        <li>About Us</li>
      </ul>
    </div>
  );
}
