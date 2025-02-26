export default function HamburgerMenu({ onClick }) {
  return (
    <div className={`lg:hidden flex items-center`} onClick={onClick}>
      <i className=" bx bx-menu-alt-right text-white text-2xl"></i>
    </div>
  );
}
