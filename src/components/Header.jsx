import React from 'react'; 
import Typing from 'react-typing-animation';
import './css/Header.css'; 


const AnimatedComponent = () => (
    <Typing loop={true}>
        <span>Software Engineer</span>
        <Typing.Delay ms={1000}/>
        <Typing.Backspace count={64} speed={5}/>
        <span>Student</span>
        <Typing.Delay ms={1000}/>
        <Typing.Backspace count={64} speed={5}/>
        <span>Computer Scientist</span>
        <Typing.Delay ms={1000}/>
        <Typing.Backspace count={64} speed={5}/>
    </Typing>
);

function Header() {
    return (
         <div id="header">
            <div className="header__row">
               <center><h1 id="header__h1">Satvik Kasinadhuni</h1></center>
               <hr id="header__seperator"/>
               <center><h3 id="header__h3"><AnimatedComponent /></h3></center>
               <div className="header__btn">
                   <a id="button__btn" href="#about">Continue ▼</a>
               </div>
            </div>
            
        </div>
    );
}

export default Header;