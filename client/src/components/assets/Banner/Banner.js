import Button from "../Buttons/button"
import Cards from "../cards/cards"

import { IoLogoAppleAr } from "react-icons/io5";

export default function Banner(  ) {
    return (
        <div className=" h-auto  lg:h-screen ">
            <div className="absolute z-10  text-white flex flex-col gap-4 m-5 lg:m-20  lg:w-1/2">
                <h1 className="lg:text-4xl font-bold">

                Data-Led seo services
                </h1>
                <p className="lg:text-xl font-semibold">Techmagnate is India’s top digital marketing and SEO services company. From conceptualization to final-stage execution, we implement the entire digital marketing strategy.</p>
                <Button title="BOOK YOUR CONSULTATION" />
                <div className="flex lg:flex-row flex-col gap-5 lg:p-0 p-10">
                    <Cards icons=<IoLogoAppleAr/>  title="1.Application" desc="Fill the application form."/>
                    <Cards icons=<IoLogoAppleAr/>  title="1.Application" desc="Fill the application form." />
                    <Cards icons=<IoLogoAppleAr/>  title="1.Application" desc="Fill the application form." />
                    <Cards icons=<IoLogoAppleAr/>  title="1.Application" desc="Fill the application form." /></div>

            </div>
            <img src="https://images.unsplash.com/photo-1707301451568-171b23a63ba4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-screen lg:h-96"/>
    </div>
)
}
