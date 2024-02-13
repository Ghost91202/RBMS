import Image from "next/image"
import Button from "../Buttons/button3"

export default function Banner( {heading, desc,img } ) {
    return (
        <div className=" h-auto  lg:h-3/4 ">

            <div className=" z-10  text-blue-700 flex flex-col gap-4 m-5 lg:m-20  lg:w-3/4">
                    <h1 className="text-orange-600">ABOUT US</h1>
                <h1 className="lg:text-6xl font-semibold">

                {heading}
                </h1>
                <p className="lg:text-xl font-normal text-gray-700 ">{desc}</p>
                <Button title={"BOOK YOUR CONSULTATION"} />


            </div>

    </div>
)
}
