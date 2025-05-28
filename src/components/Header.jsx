import { logo } from "../assets";
import { useLocation } from "react-router-dom";
import Button from "./Button";

const navigation = [
    {
        id: '0',
        title: 'Home',
        url: '#home'
    },
    {
        id: '1',
        title: 'Markets',
        url: '#markets'
    },
    {
        id: '2',
        title: 'Help',
        url: '#help'
    },
    {
        id: '3',
        title: 'About',
        url: '#about'
    },
    {
        id: '4',
        title: 'Support ',
        url: '#support '
    },
];

const Header = () => {
    const pathname = useLocation();

    return (
    <header className="fixed top-[1%] inset-x-2 md:inset-x-[3%] lg:inset-x-[5%]">
      <div className="flex items-center bg-swans-down rounded-md px-3 shadow-xl max-xl:py-2">
        <img className="w-[6.3rem] block" width={100} height={40} src={logo} alt="Logo" />

        <nav className=" lg:flex fixed lg:static top-[10%] rounded-md inset-x-2 md:inset-x-[3%] lg:inset-x-[5%] bottom-0 bg-swans-down lg:ml-auto">
            <div className="flex max-lg:h-full max-lg:-mt-5 items-center justify-center flex-col lg:flex-row lg:mr-4">
                {navigation.map(item => (
                    <a href={item.url} key={item.id} className={`relative block z-1 text-lg lg:text-sm max-lg:uppercase font-family-quicksand font-bold text-primary-blue/80 transition-colors hover:text-primary-blue ${item.url === pathname ? '' : ''} leading-3 px-4 md:px-5 py-4 lg:py-5`}>{item.title}</a>
                ))}
            </div>
        </nav>

        <a href="login" className="button hidden lg:block text-primary-blue !text-xs transition-colors uppercase hover:text-primary-blue mr-8">
            Login
        </a>

        <Button>
            Sign Up
        </Button>
      </div>
    </header>
  )
}

export default Header
