import { p1, p2, p3, s1, s2, s3, uk } from "../assets"
import Button from "./Button"
import { BsArrowRight } from "react-icons/bs"
const proImg = [
    p1, p2, p3
]
const supCurrency = [
    {
        id: '0',
        imgUrl: s1,
        text: 'NGN',
    },
    {
        id: '1',
        imgUrl: s2,
        text: 'GHS',
    },
    {
        id: '2',
        imgUrl: s3,
        text: 'KES',
    },
]
const Hero = () => {
  return (
    <div className="w-full min-h-screen pt-40 px-[8px] md:px-[3%] lg:px-[5%]">
      <div className="flex flex-col lg:flex-row max-lg:items-start justify-between w-full gap-10">
        <div className="flex flex-col gap-5 items-start md:h-[66vh]">
            <div className="flex items-center gap-1 bg-swans-down pe-3 rounded-3xl">
                <div className="flex items-center ">
                    {proImg.map((item, index) => (
                        <img key={index} className="-mr-3 border-1 border-white object-cover rounded-full" width={29} height={29} src={item} alt={item} />
                    ))}
                </div>
                <p className="text-[10px] ml-3 font-semibold text-gray-600">Trusted by 1000+ to send money</p>
            </div>
            <h1 className="max-w-[19rem] md:max-w-[29rem]">
                Send money from <br /> <span className="relative text-rose-fog me-13.5 md:me-18">UK <img src={uk} className="absolute top-1/2 -translate-y-1/2 left-full w-12 h-6 md:w-15 md:h-8 border-1 border-geyser rounded-md" alt="" /></span> to Anywhere with ease 
            </h1>
            <p className="font-medium">Fast, secure, and easy. Send money confidently <br /> anytime, anywhere whenever you need</p>
            <Button leftIcon={<BsArrowRight />}>
                Get the app
            </Button>

            <div className="mt-5 md:mt-auto">
                <p className="font-medium mb-2">Supported Currencies:</p>
                <ul className="flex items-center bg-swans-down shadow-md shadow-gray-500/50 p-1 rounded-3xl">
                    {supCurrency.map((item) => (
                        <li key={item.id} className="flex items-center gap-1 me-1">
                            <img src={item.imgUrl} width={27} height={27} alt={item.text} />
                            <p className="text-[12px] font-semibold">{item.text}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        <div className="img">Image</div>
      </div>
    </div>
  )
}

export default Hero
