import React from 'react'; 
import Typing from 'react-typing-animation';
import './css/Header.css'; 

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import CodeIcon from '@material-ui/icons/Code';
import GitHubIcon from '@material-ui/icons/GitHub';


const AnimatedComponent = () => (
    <Typing loop={true}>
        <span>Student</span>
        <Typing.Delay ms={1000}/>
        <Typing.Backspace count={64} speed={5}/>
        <span>Programmer</span>
        <Typing.Delay ms={1000}/>
        <Typing.Backspace count={64} speed={5}/>
        <span>L</span>
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
                       <a className="linkedin__anchor" href="https://www.linkedin.com/in/satvik-k/" target="_blank"><LinkedInIcon /></a>
                   </div>
                   <div className="links__twitter">
                       <a className="twitter__anchor" href="https://devpost.com/skasinad?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" target="_blank"><CodeIcon /></a>
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