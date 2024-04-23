const Button = ({
  children,
  bgColor = "bg-blue-600",
  type = "button",
  textColor = "text-white",
  className = "",
  ...props
}) => {
  return (
    <button
      className={`px-3 py-2 rounded-full ${bgColor} ${textColor} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
