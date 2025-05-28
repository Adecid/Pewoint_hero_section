const Button = ({children, onClick}) => {
  
    const classes = 'hidden lg:block button bg-primary-blue text-white inline-block px-6 py-2 rounded-md cursor-pointer'

    return (
    <button className={classes}>
      {children}
    </button>
  )
}

export default Button
