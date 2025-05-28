import { logo } from "../assets";
import { useLocation } from "react-router-dom";
import Button from "./Button";
import MenuSvg from "../assets/svg/Menu";
import { useState } from "react";

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
    {
        id: '5',
        title: 'Login ',
        url: '',
    },
    {
        id: '6',
        title: 'Sign up ',
        isVisible: true,
    },
];

const Header = () => {
    const pathname = useLocation();
    const [openNavigation, setOpenNavigation] = useState(false);

    const toggleNavigation = () => {
        if(openNavigation) {
            setOpenNavigation(false);
        } else {
            setOpenNavigation(true)
        }
    }
    
    const toggleMobile = () => {
        if(!openNavigation) return;
        
        setOpenNavigation(false);
    }

    return (
    <header className="fixed top-[1%] inset-x-2 md:inset-x-[3%] lg:inset-x-[5%]">
      <div className="flex items-center bg-swans-down rounded-md px-3 shadow-xl max-xl:py-2">
        <img className="w-[6.3rem] block" width={100} height={40} src={logo} alt="Logo" />

        <nav className={`${openNavigation ? 'block' : 'hidden'}  lg:flex fixed lg:static top-[10%] rounded-md inset-x-2 md:inset-x-[3%] lg:inset-x-[5%] bottom-0 bg-swans-down lg:ml-auto`}>
            <div className="flex max-lg:h-full max-lg:-mt-5 items-center justify-center flex-col lg:flex-row lg:mr-4">
                {navigation.map(item => (
                    <a href={item.url} key={item.id} className={`relative block z-1 text-lg lg:text-sm max-lg:uppercase font-family-quicksand font-bold text-primary-blue/80 transition-colors hover:text-primary-blue ${item.url === pathname ? '' : ''} leading-3 px-4 md:px-5 py-4 lg:py-5 ${item.isVisible ? 'lg:hidden' : ''}`} onClick={toggleMobile}>{item.title}</a>
                ))}
            </div>
        </nav>

        <Button className="hidden lg:block max-lg:ml-auto">
            Sign Up
        </Button>
        
        <button className="lg:hidden border-2 border-primary-blue p-2 rounded ml-auto cursor-pointer" onClick={toggleNavigation}>
            <MenuSvg openNavigation={openNavigation}/>
        </button>
      </div>
    </header>
  )
}

export default Header
