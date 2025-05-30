import { ng, p1, p2, p3, s1, s2, s3, uk , ex1, ex2, ex3} from "../assets"
import Button from "./Button"
import IconCard from "./IconCard"
import { BsArrowRight } from "react-icons/bs"
import { IoIosArrowDown } from "react-icons/io";

const proImg = [
    p1, p2, p3
]
const supCurrency = [
    {
        id: '0',
        imgUrl: s1,
        Symbol: 'NGN',
    },
    {
        id: '1',
        imgUrl: s2,
        Symbol: 'GHS',
    },
    {
        id: '2',
        imgUrl: s3,
        Symbol: 'KES',
    },
];

const exContent = [
    {
        id: '0',
        imgUrl: uk,
        Symbol: 'GBP',
        CommonName: 'Great Britain Pound',
        floatNum: false,
    },
    {
        id: '1',
        imgUrl: ng,
        Symbol: 'GBP',
        CommonName: 'Nigeria Naria',
        floatNum: false,
    },
    {
        id: '2',
        num: '1.00',
        floatNum: true,
    },
    {
        id: '3',
        num: '2,175.00',
        floatNum: true,
    },
]
const Hero = () => {
  return (
    <div className="w-full min-h-screen pt-35 px-[8px] md:px-[3%] lg:px-[5%]">
      <div className="flex flex-col lg:flex-row max-lg:items-start items-center justify-between w-full gap-10">
        <div className="flex flex-col gap-5 items-start md:h-[70vh]">
            <div className="flex items-center gap-1 bg-swans-down pe-3 rounded-3xl">
                <div className="flex items-center ">
                    {proImg.map((item, index) => (
                        <img key={index} className="-mr-3 border-1 border-white object-cover rounded-full" width={29} height={29} src={item} alt={item} />
                    ))}
                </div>
                <p className="text-[10px] ml-3 font-semibold text-gray-600">Trusted by 1000+ to send money</p>
            </div>
            <h1 className="max-w-[24rem] sm:max-w-[39rem] max-sm:text-5xl">
                Send money from <span className="relative text-rose-fog me-13.5 sm:me-19">UK <img src={uk} className="absolute top-1/2 -translate-y-1/2 left-full w-12 h-6 sm:w-16 sm:h-9 shadow-xl shadow-orange-600/30 border-1 border-geyser rounded-md" alt="" /></span> to Anywhere with ease 
            </h1>
            <p className="font-medium">Fast, secure, and easy. Send money confidently <br /> anytime, anywhere whenever you need</p>
            <Button leftIcon={<BsArrowRight />}>
                Get the app
            </Button>

            <div className="mt-5 md:mt-auto">
                <p className="font-medium mb-2 text-[14px]">Supported Currencies:</p>
                <ul className="flex items-center bg-swans-down shadow-md shadow-gray-500/50 p-1 rounded-3xl">
                    {supCurrency.map((item) => (
                        <li key={item.id} className="flex items-center gap-1 me-1">
                            <img src={item.imgUrl} width={27} height={27} alt={item.text} />
                            <p className="text-[12px] font-semibold">{item.Symbol}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        <div className="relative z-3">
            <div className="w-[28rem] bg-swans-down/50 shadow-2xl shadow-wistful/80 rounded-3xl overflow-hidden backdrop-blur-3xl p-1">
                <div className="w-full bg-swans-down/70 rounded-3xl backdrop-blur-3xl overflow-hidden pointer-events-none p-3">
                <h4 className="text-center mt-1 mb-3 text-[1.2rem]">Check Exchanges Rate</h4>
                    <ul className="relative bg-violet-50 grid grid-cols-2 rounded-[.9rem]">
                        {exContent.map((item) => (
                            <li key={item.id} className="w-full h-22 first:rounded-tl-[.9rem] nth-[2]:rounded-tr-[.9rem] nth-[3]:rounded-bl-[.9rem] last:rounded-br-[.9rem] border border-gray-200/80 py-5 px-4">   
                                {!item.floatNum ? (
                                    <div className="flex flex-col">
                                        <div className="flex items-center mb-1">
                                            <img src={item.imgUrl} className={`${item.id === '0' ? 'shadow-lg shadow-red-400/60' : 'shadow-lg shadow-green-400/60'} border border-violet-100 rounded w-11 h-6 mr-2`} alt={item.Symbol} />
                                            <p className="flex items-center text-[13px] font-semibold">{item.Symbol} <span className="ml-1 text-xs"><IoIosArrowDown /></span></p>
                                        </div>
                                        <p className="font-semibold text-sm tracking-wide">{item.CommonName}</p>
                                       </div>
                                ) : (
                                    <h4 className="text-[21px]">{item.num}</h4>
                                )}
                            </li>
                        ))}
                        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-white p-2 rounded-lg"><img src={ex3} width={20} height={20} className="opacity-30" alt="Exchange image" /></div>
                    </ul>
                    <Button gradient className='w-full py-3 !font-family-poppins !text-[1.1rem] !font-normal mt-7 !rounded-[.9rem]'>
                        Sign up
                    </Button>
                </div>
            </div>
            <IconCard icon={ex1} className='absolute -top-[14%] md:-top-[7%] left-1/2 md:-left-[5%] -rotate-[30deg] -z-1'/>
            <IconCard icon={ex2} className='absolute top-1/2 -right-[5%] rotate-[17deg] z-1 shadow-gray-800/80'/>
        </div>
      </div>
    </div>
  )
}

export default Hero
