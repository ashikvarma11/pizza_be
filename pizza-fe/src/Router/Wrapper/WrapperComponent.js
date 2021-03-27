import Navbar from 'Components/Navbar/Navbar';
import React from 'react';
const WrapperComponent = (props) => {
    return ( 
        <>
        <Navbar />
        {props.children}
        </>
     );
}
 
export default WrapperComponent;