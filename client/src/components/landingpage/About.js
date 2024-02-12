import { IoSearchSharp } from "react-icons/io5";


export default function About( params ) {
    return (
        <div className="h-screen lg:pt-0 lg:p-20">
            <div className=" grid grid-flow-col grid-cols-1 gap-5 lg:grid-cols-2">
                <div className="flex flex-col gap-10">
                    <h1 className="lg:text-5xl font-bold "> About <span className="text-orange-500">
                        RBMS
                    </span></h1>
                    <p>Register business online, Licenses, and Return filing solution providers for businesses over the last decade, Legal Suvidha has been a one-stop shop for all start-ups or entrepreneurs looking for MSME startups and businesses across India. We have been ensuring Startups and SMEs are fully compliant with India’s legal system.Over the past  11+  years, the depth of our offerings has increased and that too at affordable prices customer satisfaction has made our standing different.Register business online & save your time.We are giving tough competition to other online facilitators of legal services in India.</p>
                    <p className="text-gray-600 font-bold">
                        Book Services in your budget with 100% Assurance.
                    </p>
                    <div className="relative w-full">
                        <input
                            type="text"
                            placeholder="Search..."

                            className="border rounded-2xl p-3 w-full"
                        />
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                            <IoSearchSharp className="bg-orange-500 p-2 rounded-2xl text-white cursor-pointer lg:text-5xl" />
                        </div>
                    </div>

                </div>
                <div className=" shadow-2xl bg-white flex flex-col gap-10 rounded-2xl p-10">
                    <h1 className="lg:text-3xl lg:font-semibold">Quick Enquiry</h1>
                    <div className="flex flex-col gap-5">
                           <div className="flex gap-5">
                         <input
                            type="text"
                             placeholder="Enter Your Name"

                            className="border-b rounded-2xl p-3 w-full"
                        /> <input
                            type="text"
                           placeholder="Enter Your Number"

                            className="border-b rounded-2xl p-3 w-full"
                        />
                    </div>
                    <div className="flex gap-5">
                         <input
                            type="text"
                            placeholder="Enter Your Email Id"

                            className="border-b rounded-2xl p-3 w-full"
                        /> <input
                            type="text"
                            placeholder="Enter Your Address"

                            className="border-b rounded-2xl p-3 w-full"
                        />
                    </div>
                    </div>
                    <button className="flex justify-center text-white p-3 rounded-2xl bg-orange-500 items-center">Get free Consultation</button>
                </div>
            </div>
        </div>
    )
}
