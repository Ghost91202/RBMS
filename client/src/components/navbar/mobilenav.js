// components/ShowHideComponent.j
"use client";
import React, { useState } from 'react';
import Mnav from "./mnav"
import { MdOutlineSegment } from "react-icons/md";
const HiddenComponent = () => (
 <Mnav/>
);

const ShowHideComponent = () => {
  const [showComponent, setShowComponent] = useState(false);

  const toggleComponent = () => {
    setShowComponent(!showComponent);
  };

  return (
    <div className="lg:hidden flex">

      <button onClick={toggleComponent}><MdOutlineSegment/></button>
      
      {showComponent && <HiddenComponent />}
    </div>
  );
};

export default ShowHideComponent;
