const Button = ({children, className, gradient, leftIcon, onClick}) => {
  
    const classes = `button text-white px-6 py-2 rounded-md group cursor-pointer ${className || ''} ${gradient ? 'bg-custom-gradient' : 'bg-primary-blue'} ${leftIcon && '!bg-[#3d5555] inset-shadow-sm inset-shadow-gray-800/100 shadow-xl shadow-gray-800/60 flex items-center gap-2 h-11'}`

    return (
    <button className={classes} onClick={onClick}>
      {children}
      {leftIcon && (
        <span className="transition-all duration-300 group-hover:ms-1">
            {leftIcon}
        </span>
      )}
    </button>
  )
}

export default Button
