const Button = ({name,primary,onClick}) => {
  return (
    <button onClick={onClick} className={`${primary ? 'bg-primary dark:bg-secondary' : "bg-secondary "} py-2 px-4 md:py-3 text-lg md:px-6 text-white font-semibold md:text-xl rounded-md `}>{name}</button>
    
  )
}

export default Button