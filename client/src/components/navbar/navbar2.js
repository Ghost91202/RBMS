
import Link from "next/link";
import { MdOutlineSegment } from "react-icons/md";



export default function Navbar() {

    return (
        <div className=" bg-white border-gray-500 border-t  hidden lg:flex justify-center items-center">
            <div className="flex justify-between items-center  text-black dark">

                <div className="flex justify-between items-center gap-10">

                    <Link href="" className=" lg:w-20">SEO</Link>
                    <Link href="" className=" lg:w-20">APP OPTIMIZATION</Link>

                    <Link href="" className=" lg:w-20">CONTENT MARKETING </Link>
                    <Link href="" className=" lg:w-20">PAID MARKETING</Link>
                    <Link href="" className=" lg:w-20">DESIGN & MARKETING</Link>
                    <Link href="" className=" lg:w-20">DESIGN  MARKETING</Link>

                </div>
            </div>
        </div>
    )
}
