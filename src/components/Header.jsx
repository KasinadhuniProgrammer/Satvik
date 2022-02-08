import React from 'react'; 
import Typing from 'react-typing-animation';
import './css/Header.css'; 

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';


const AnimatedComponent = () => (
    <Typing loop={true}>
        <span>Python Developer</span>
        <Typing.Delay ms={1000}/>
        <Typing.Backspace count={64} speed={5}/>
        <span>Java Developer</span>
        <Typing.Delay ms={1000}/>
        <Typing.Backspace count={64} speed={5}/>
        <span>C++ Developer</span>
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
               <div className="header__links">
                   <div className="links__linkedin">
                       <a className="linkedin__anchor" href="https://www.linkedin.com/in/satvik-kasinadhuni-farmington/" target="_blank"><LinkedInIcon /></a>
                   </div>
                   <div className="links__twitter">
                       <a className="twitter__anchor" href="https://twitter.com/SatvKk" target="_blank"><TwitterIcon /></a>
                   </div>
                   <div className="links__github">
                       <a className="github__anchor" href="https://github.com/KasinadhuniProgrammer" target="_blank"><GitHubIcon /></a>
                   </div>
               </div>
               <div className="header__btn">
                   <a id="button__btn" href="#about">Continue ▼</a>
               </div>
            </div>
            
        </div>
    );
}

export default Header;