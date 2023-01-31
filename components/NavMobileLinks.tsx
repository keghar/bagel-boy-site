
import { Lilita_One } from '@next/font/google'
import Link from 'next/link';
import NavLinks from './NavLinks';


const lilitaOne = Lilita_One(
    {
        subsets: ['latin'],
        weight:'400'
    }
    );

function NavMobileLinks() {
  return (
    

<div className={lilitaOne.className}>
                        <div className="flex items-center text-center text-white text-2xl mt-20 pt-20">
                            <ul className="flex flex-col content-between gap-6">
                                <li className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] cursor-pointer">ABOUT </li>
                                <li className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] cursor-pointer">MENU</li>
                                <li className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] cursor-pointer">CONTACT</li>
                                <li className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] cursor-pointer">LOCATIONS</li>
                            </ul>
                        </div>
                        </div>
        
    
  )
}

export default NavMobileLinks