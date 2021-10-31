import React from 'react'; 
import Typing from 'react-typing-animation';
import './css/Header.css'; 


const AnimatedComponent = () => (
    <Typing loop={true}>
        <span>Developer</span>
        <Typing.Delay ms={1000}/>
        <Typing.Backspace count={64} speed={5}/>
        <span>JS Enthusiast</span>
        <Typing.Delay ms={1000}/>
        <Typing.Backspace count={64} speed={5}/>
        <span>Loves Tech</span>
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
               <div className="header__img">
                   <center><img id="profilepic" src="https://media-exp1.licdn.com/dms/image/C4D03AQHyA1Ms69Z0RQ/profile-displayphoto-shrink_800_800/0/1634531916756?e=1641427200&v=beta&t=PQ6-3PVAkpWOn44iP5rFQeI7VU96DpcKIsyQyJ8lErw" alt="Hello World!"/></center>
               </div>
               <div className="header__btn">
                   <a id="button__btn" href="#about">Continue ▼</a>
               </div>
            </div>
            
        </div>
    );
}

export default Header;