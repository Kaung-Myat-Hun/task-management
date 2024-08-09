interface buttonProps {
    children: any;
    onClick: () => void;
    className: string;
}
function Button({children , onClick , className} : buttonProps) {
  return (
    <button onClick={onClick} className={className}>
        {children}
    </button>
  )
}

export default Button