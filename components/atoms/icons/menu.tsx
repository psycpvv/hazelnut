const Menu = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width={30}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 30 30"
  >
    <path
      stroke="rgba(49, 70, 140, 0.95)"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M4 7h22M4 15h22M4 23h22"
    />
  </svg>
)
export default Menu
