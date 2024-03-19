import { useState } from "react";
import Link from "../Link/Link";
import { CgMenuRound } from "react-icons/cg";
import { MdBackspace } from "react-icons/md";

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: '404', path: '*' }
      ];

    return (
        <nav className="bg-yellow-200 p-6">
            {/* <FiAlignCenter /> */}

            <div className="md:hidden text-2xl" onClick={()=> setOpen(!open)}>
                {
                    open === true ? <MdBackspace /> : <CgMenuRound className=" "></CgMenuRound>
                }
                
            </div>
            <ul className={`md:flex duration-1000 gap-6 absolute md:static bg-yellow-200 p-6 lg:p-0 shadow-lg ${open ? 'left-12 h-[300px] lg:h-fit ' : '-left-60 rounded-[100px] rotate-90 h-[100px] lg:-rotate-0 lg:-left-0 lg:rounded-none lg:h-fit'}`}>
                {/* style={{backgroundImage: 'url:(https://i.ibb.co/vJVVmZ6/OIG1-YBVWp-Tfh-Ryuhm-M8pj68-B.jpg)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', width: '200px', height: '200px'}} */}
                {
                    routes.map((route)=> <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;