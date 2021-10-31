import React from 'react'; 
import './css/About.css'; 

function About() {
    return (
        <div id="about">
            <center><h1 id="header__abt">Hello, I am Satvik Kasinadhuni👋</h1></center>
            <center><p id="paraone">I am a 16 year old <span id="paraone__job">Software Engineer</span> based in Farmington, Connecticut. I am mainly a <span id="paraone__type">Full Stack developer</span> with experience in <span id="paraone__stack">HTML</span>, <span id="paraone__stack">CSS</span>, <span id="paraone__stack">JavaScript</span>, <span id="paraone__stack">TypeScript</span>, <span id="paraone__stack">React.js</span>, <span id="paraone__stack">Firebase</span>, <span id="paraone__stack">Node.js</span>, and also a bit of <span id="paraone__stack">Express.js</span> and <span id="paraone__stack">MongoDB</span>. I am also working at IpserLab LLC, a company based in Mountain View, California, as a Software Engineer(Intern) working on Frontend. I have been working there since February 2021 and am learning a lot of new skills while contributing to an amazing organization.</p></center>
            <center><p id="paratwo">Currently, I am studying at Farmington High School and am in my Junior year expected to graduate in June 2023. My plan after High School is to go to college and study Computer Science. In addition, I aspire to one day start my own tech company.</p></center>
            <center><p id="parathree">I am currently not open to any Software Engineering Internships, and do not have plans to pursue one in 2022 also as I will continue to be working with IpserLab throughout 2022 as well. If you have any questions feel free to <a id="mymail" href="mailto: skasinad@gmail.com">email</a> me!</p></center>
        </div>
    );
}

export default About;