import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { IoIosCall } from "react-icons/io";
import { CgMail } from "react-icons/cg";
import { TfiLinkedin } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa6";
import { MdFacebook } from "react-icons/md";
import { CiLink } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { TbLetterSSmall } from "react-icons/tb";
import './App.css'

function App() {


  return (
    <>
      <div className="header">
        <div className="container">
          <nav>
            <button className='a'>Portfolio</button>
            <ul id="sidemenu">
              <li>
                <a href="#header">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <i className="fas fa-times" onclick="closemenu()" />
            </ul>
            <i className="fas fa-bars" onclick="openmenu()" />
          </nav>
          <div className="header-text">
            <p>Frontend Developer</p>
            <h1>
              Hi, I'm <span>Shivam Maddheshiya</span>
              <br />
              From Lucknow
            </h1>
          </div>
          
        </div>
      </div>
      <>
  <div id="about">
    <div className="container">
      <div className="row">
        <div className="about-col-1">
          <img src="/shivam.jpg" height={400} width={400} />
        </div>
        <div className="about-col-2">
          <h1 className="sub-title">About Me</h1>
          <p>
            I’m a Frontend Developer with skills in HTML, CSS, JavaScript, and React.js. I also have knowledge of SQL and Java programming, and I enjoy building clean, responsive user interfaces.


          </p>
          <div className="tab-titles">
            <p className="tab-links " onclick="opentab('skills')">
              Skills
            </p>
            <p className="tab-links" onclick="opentab('experience')">
              Experience
            </p>
            <p className="tab-links active-link" onclick="opentab('education')">
              Education
            </p>
          </div>
          <div className="tab-contents " id="skills">
            <ul>
              <li>
                <span>UI/UX</span>
                <br />
                Designing Web/App interfaces
              </li>
              <li>
                <span>Web Development</span>
                <br />
                Web app Development
              </li>
              <li>
                <span>App Development</span>
                <br />
                Building Android/iOS apps
              </li>
            </ul>
          </div>
          <div className="tab-contents" id="experience">
            <ul>
              <li>
                <span>2025   - Current</span>
                <br />
                Summer Training at Techpile Technology PVT LTd.
              </li>
              <li>
                <span>2019 - 2021</span>
                <br />
                Team lead at StarApp LLC.
              </li>
              <li>
                <span>2017 - 2019</span>
                <br />
                UI/UX Design Executive at Coin Digital Ltd.
              </li>
              <li>
                <span>2016 - 2017</span>
                <br />
                Internship at ekart eCommerce.
              </li>
            </ul>
          </div>
          <div className="tab-contents active-tab" id="education">
            <ul>
              <li>
                <span>2022-2026 </span>
                <br />
                B.Tech CSE from Shri Ramswaroop Memorial University, Lucknow
              </li>
              <li>
                <span>2021</span>
                <br />
                12th from UP Board.
              </li>
              <li>
                <span>2019</span>
                <br />
                10th from UP Board.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* ---------services---------------- */}
  <div id="services">
    <div className="container">
      <h1 className="sub-title">My Services</h1>
      <div className="services-list">
        <div>
          <i className="fas fa-code" />
          <h2>Web Design</h2>
          <p>
            Web Design involves creating the layout, visual appearance, and usability of a website. It focuses on user experience, responsive design, and aesthetic appeal to ensure a site looks great and works smoothly on all devices.
          </p>
          <a href="#">Learn more</a>
        </div>
        <div>
          <i className="fas fa-crop-alt" />
          <h2>UI/UX Design</h2>
          <p>
           Web Design & UI/UX is about making websites that look good and are easy to use, giving users a smooth and enjoyable experience. <br /> <br /> <br /> <br />
          </p>
          <a href="#">Learn more</a>
        </div>
        <div>
          <i className="fab fa-app-store" />
          <h2>App Design</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nulla
            nibh, tincidunt sit amet sapien quis.
          </p>
          <a href="#">Learn more</a>
        </div>
      </div>
    </div>
  </div>
  {/* ----------portfolio------------ */}
  <div id="portfolio">
    <div className="container">
      <h1 className="sub-title">My Work</h1>
      <div className="work-list">
        <div className="work">
          <img src="/project123.png" height={300} width={300} />
          <div className="layer">
            <h3>Random Color Generator</h3>
            <p>
              Generate random color for fun activity and games:
            </p>
            <a href="#">
              <CiLink />
            </a>
          </div>
        </div>
        <div className="work">
          <img src="/project1234.png" height={300}/>
          <div className="layer">
            <h3>Converter</h3>
            <p>
              Converter helps to convert binary and ascii values to alphabets and numbers 
            </p>
            <a href="#">
             <CiLink />
            </a>
          </div>
        </div>
        <div className="work">
          <img src="images/work-3.png" />
          <div className="layer">
            <h3>Online Shopping App</h3>
            <p>
              The app connects you yo the talented people around the world.
              Download it from play store.
            </p>
            <a href="#">
             <CiLink />
            </a>
          </div>
        </div>
      </div>
      <a href="#" className="btn">
        See more
      </a>
    </div>
  </div>
  {/* ----------contact------------- */}
  <div id="contact">
    <div className="container">
      <div className="row">
        <div className="contact-left">
          <h1 className="sub-title">Contact Me</h1>
          <p>
            <CgMail /> shivamkopa4114@gmail.com
          </p>
          <p>
            
            <IoIosCall />  8090653148
          </p>
          <div className="social-icons">
            <a href="https://www.facebook.com/shivam.madheshiya.988">
              <MdFacebook />
            </a>
            
            <a href="https://www.instagram.com/shivam_maddheshiya.48?igsh=amMyeWNlZ25qbjdy" >
            <FaInstagram />

             
            </a>
            <a href="https://www.linkedin.com/in/shivam-maddheshiya-685b9426a/">
              <TfiLinkedin />
            </a>
            <a href="https://github.com/Shivammad132">
              <FaGithub />
            </a>
          </div>
          
          <a href="/public/shivam.resume.pdf" download="" className="btn btn2">
            Download CV
          </a>
        </div>
        <div className="contact-right">
          <form name="submit-to-google-sheet">
            <input
              type="text"
              name="Name"
              placeholder="Your Name"
              required=""
            />
            <input
              type="email"
              name="Email"
              placeholder="Your Email"
              required=""
            />
            <textarea
              name="Message"
              rows={6}
              placeholder="Your Message"
              defaultValue={""}
            />
            <button type="submit" className="btn btn2">
              Submit
            </button>
          </form>
          <span id="msg" />
        </div>
      </div>
    </div>
    <div className="copyright">
      <p>
        {" "}
        Shivam Maddheshiya
      </p>
    </div>
  </div>
  <script>
   
  </script>
</>


    </>
  )
}

export default App
