import React from 'react'; 
import './css/About.css'; 

function About() {
    return (
        <div id="about">
            <center><h1 className="header__abt">Hello, I am Satvik Kasinadhuni<span className="abt__hello">👋</span></h1></center>
            <center><p className="abt__p1">I am a 16 year old <span className="p1__job">Software Developer</span> based in Farmington, Connecticut, 🇺🇸. I am fluent in languages such as <span className="p1__stack">Python</span>, <span className="p1__stack">Java</span>, and <span className="p1__stack">C++</span>, and have experience with working with various technologies such as <span className="p1__stack">React.js</span>, <span className="p1__stack">Firebase</span>, <span className="p1__stack">Git</span>, and many more. I am working part-time at <span className="p1__company">IpserLab</span>, a company based in Silicon Valley, as a Software Engineer Intern. At IpserLab, I am working on developing the Backend of a Software Application using Java and SQL.</p></center>
            <center><p className="abt__p2">Currently, I am studying at <span className="p2__school">Farmington High School</span> and am in my third year, expected to graduate in June 2023. After High School, I plan to go to college and pursue a degree in <span className="p2__degree">Computer Science</span>. My goal is to become a Software Engineer, and I aspire to move into top management positions in the IT industry.</p></center>
            <center><p className="abt__p3">I am currently not open to any Software Engineering Internships or opportunities, however, feel free to <a className="p3__mail" href="mailto: skasinad@gmail.com">email</a> me with any questions.</p></center>
        </div>
    );
}

export default About;