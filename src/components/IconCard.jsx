import clsx from "clsx"

const IconCard = ({icon, className}) => {
  return (
    <div className={clsx("bg-swans-down/90 p-1.5 shadow-2xl shadow-gray-400/80 rounded-xl", className || "")}>
      <img src={icon} className="shadow-2xl shadow-gray-800/10" width={35} height={35} alt="" />
    </div>
  )
}

export default IconCard
