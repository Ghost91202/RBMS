"use client";
import React, { useState } from 'react';
import Link from "next/link";
import { MdOutlineSegment } from "react-icons/md";
import Dropdown from "../assets/dropdownbutton"
import Navbar2 from "./navbar2"




const ComponentOne = () => <div>Component One Content</div>;
const ComponentTwo = () => <div>Component Two Content</div>;
const ComponentThree = () => <div>Component Three Content</div>;
const ComponentFour = () => <div>Component Four Content</div>;

const componentsMap = {
  componentOne: ComponentOne,
  componentTwo: ComponentTwo,
  componentThree: ComponentThree,
  componentFour: ComponentFour,
};
export default function Navbar() {
      const [selectedComponent, setSelectedComponent] = useState(null);

  const renderComponent = (component) => {
    const Component = componentsMap[component];
    return Component ? <Component /> : null;
  };
    return (
        <div className="  flex flex-col bg-white">

            <div className="flex p-5  justify-between items-center  text-black dark">
                <div>
                    <h1>logo</h1>
                </div>
                <div className="flex lg:hidden">
                     <div>
      <div className="flex flex-col gap-10">
 <h1>onclick change Button Component</h1>
        <div className="flex gap-5">
            {Object.keys(componentsMap).map((component) => (
        <div className="flex flex-row  text-green-500  gap-10">
           <button key={component} onClick={() => setSelectedComponent(component)}>
          {`Show ${component}`}
        </button>
       </div>
      ))}
    </div>

      <div style={{ marginTop: '20px' }}>{selectedComponent && renderComponent(selectedComponent)}</div>

</div>
    </div>
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
                    <MdOutlineSegment className=" flex lg:hidden"/>
                </div>
            </div>
             <Navbar2/>
        </div>
    )
}
