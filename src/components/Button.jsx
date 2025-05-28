const Button = ({children, className, gradient, onClick}) => {
  
    const classes = `button text-white px-6 py-2 rounded-md cursor-pointer ${className || ''} ${gradient ? 'bg-custom-gradient' : 'bg-primary-blue'}`

    return (
    <button className={classes}>
      {children}
    </button>
  )
}

export default Button
