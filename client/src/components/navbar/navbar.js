
import Link from "next/link";
import { MdOutlineSegment } from "react-icons/md";
import Dropdown from "../assets/dropdownbutton"
import Navbar2 from "./navbar2"
import Mobilenav from "./mobilenav"
export default function Navbar() {
    return (
        <div className="z-50  flex flex-col bg-white">

            <div className="flex p-5  justify-between items-center  text-black dark">
                <div>
                    <h1>logo</h1>
                </div>

                <div className=" justify-between items-center gap-4 hidden lg:flex">
                    {/* <Dropdown menu="company"
                        submenu1="About us"
                        submenu2="Vision & mission"
                        submenu3="Team"
                        submenu4="Careers"
                        submenu5="Life at RBMS"
                    />
                    <Dropdown menu="Industries "
                        submenu1="B2B"
                        submenu2="HEALTHCARE"
                        submenu3="EDUCATION"

                    />
                    <Dropdown menu="RESOURCES"
                        submenu1="SEARCH RESEARCH TRENDS"

                    /> */}

                    <Link href="">COMPANY</Link>
                    <Link href="">INDUSTRIES</Link>

                    <Link href="">BLOGS</Link>
                    <Link href="">CONTACT</Link>

                </div>
                <Mobilenav/>
            </div>
             <Navbar2 />
        </div>
    )
}
