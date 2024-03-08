import React from "react";
import Myimage from "./../Assets/Myimage.png";
import Frame3 from "./../Assets/Frame3.png";
import Frame4 from "./../Assets/Frame4.png";
import javascript from "./../Assets/javascript.png";
import html from "./../Assets/html.png";
import css from "./../Assets/css.png";
import bootstrap from "../Assets/bootstrap.jpg";
import tailwind from "../Assets/tailwind.png";
import react from "../Assets/react.png";
import node from "../Assets/node js.png";
import mongodb from "../Assets/Mongodb.png";
import calculator from "../Assets/calculator.png";
import Best_resume from "../Assets/Best_resume.pdf";
import debitcard from "./../Assets/debitcard.png";
import weather from "./../Assets/weather.png";
import dashboard from "./../Assets/dashboard.png";
import { Link } from "react-scroll";
import { useState } from "react";
const Porftolio = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleSetActive = (to) => {
    setActiveLink(to);
  };
  return (
    <>
      <nav className="flex flex-row justify-between font-mono  p-8">
        <h1 className="text-3xl">Pradyuman</h1>
        <div>
          <ul className="flex flex-row hover:flex-row font-mono gap-4 ">
          <li>
              <Link
                to="experience"
                smooth={true}
                duration={500}
                onMouseEnter={() => handleSetActive("experience")}
                className=""
              >
                <span className="nav-link hover:hand-icon">
                 About
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="experience"
                smooth={true}
                duration={500}
                onMouseEnter={() => handleSetActive("experience")}
                className=""
              >
                <span className="nav-link hover:hand-icon">
                 Contact
                </span>
              </Link>
            </li>
             <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                onMouseEnter={() => handleSetActive("experience")}
                className=""
              >
                <span className="nav-link hover:hand-icon">
                  Work
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <section className="flex bg-[#e8e8e8]  p-9">
        <div className="Basic_intro flex justify-center items-center  ">
          <div className="conetnt flex flex-col justify-center  gap-6">
            <h1 className="text-6xl font-mono font-bold">HI,I AM Pradyuman</h1>
            <p className="font-serif text-2xl">
              A Passionate front-end developer excited about building user
              friendly and accessible website
            </p>
            <div className="flex gap-2">
              <div>
                <img src={Frame3} alt="frame3" />
              </div>
              <div>
                <img src={Frame4} alt="frame4" />
              </div>
              <a href={Best_resume} download={Best_resume} rel="resume">
                <button className="bg-yellow-500 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue hover:bg-blue-700">
                  Resume
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="myimage flex justify-center h-50 w-50">
          <img
            className="object-contain h-max bg-[#e8e8e8] w-8/12"
            src={Myimage}
            alt="Myimage"
          />
        </div>
      </section>
      <section className="skill   p-5">
        <div className="flex justify-center">
          <div>
            <span className="bg-[#d3d3d3] font-serif rounded p-4">Skills</span>
          </div>
        </div>
        <div className="flex justify-center mt-6 text-3xl font-mono font-bold">
          These are the skills and technologies that iam good at
        </div>
        <div className="flex p-10 flex-wrap justify-around  gap-8">
          <img className="h-28" src={javascript} alt="javascript" />
          <img className="h-28" src={html} alt="html" />
          <img className="h-28" src={css} alt="css" />
          <img className="h-28" src={react} alt="css" />
          <img className="h-28" src={bootstrap} alt="css" />
          <img className="h-28" src={tailwind} alt="css" />
          <img className="h-28" src={node} alt="css" />

          <img className="h-28" src={mongodb} alt="css" />
        </div>
      </section>
      <section className="experience bg-[#e8e8e8] p-5">
        <div className="flex justify-center p-3">
          <div>
            <span className="bg-[#d3d3d3] font-serif rounded p-4">
              Experiences
            </span>
          </div>
        </div>
        <div className="flex justify-center mt-6 text-3xl  font-mono font-bold">
          Here is a quick summary of my Experiences
        </div>
        <div className="flex justify-center p-8">
          <div className="mt-4 w-fit bg-white shadow flex justify-around rounded gap-10 p-8">
            <div>
              <h1 className="text-2xl font-mono font-bold">
                KNR Constructions
              </h1>
            </div>
            <div>
              <h1 className="text-2xl font-mono text-green-500">
                Quality control Engineer{" "}
              </h1>
              <ul className="list-disc flex font-mono flex-col gap-6 p-4">
                <li>
                  Quality Control Engineer responsible for materials, structural
                  drawings, elevations.
                </li>
                <li>Implemented stringent quality control measures.</li>
                <li>
                  Conducted thorough inspections to ensure compliance with
                  industry standards.
                </li>
                <li>
                  {" "}
                  Monitored material quality and verified elevations for
                  precision.
                </li>
                <li>
                  Achieved a significant 20% increase in productivity through
                  effective quality control protocol.
                </li>
                <li>
                  Proactively improved processes to enhance overall project
                  quality.
                </li>
              </ul>
            </div>
            <div>
              <p className="font-mono">June 2021 - June 2023</p>
            </div>
          </div>
        </div>
        {/* <div className="px-8 mt-4">
          <div className=" flex gap-4  p-4  bg-white  rounded">
            <h1>INFORVIO Technologies</h1>
            <div className="flex flex-col gap-2">
              <h2 className="text-xl flex font-bold ">
                Junior front end developer (intern)
              </h2>

              <ul className="list-disc p-4">
                <li className="mb-2">
                  Created a multistage, multistep validation onboarding form
                  using React.
                </li>
                <li className="mb-2">
                  Implemented conditional logic to verify the accuracy of
                  onboarding form details.
                </li>
                <li>
                  Improved efficiency by 20% through the successful
                  implementation of validation processes.
                </li>
              </ul>
            </div>
            <h1>June 2021 to june 2023</h1>
          </div>
        </div> */}
        <div className="flex font-mono justify-center p-8">
          <div className="mt-4 w-fit bg-white shadow flex justify-around rounded gap-10 p-8">
            <div>
              <h1 className="text-2xl font-bold">INFORVIO Technologies</h1>
            </div>
            <div>
              <h1 className="text-2xl text-green-500">
                Front end developer (Intern)
              </h1>
              <ul className="list-disc flex flex-col gap-6 p-4">
                <li>
                  Created a multistage, multistep validation onboarding form
                  using React.
                </li>
                <li>
                  Implemented conditional logic to verify the accuracy of
                  onboarding form details.
                </li>
                <li>
                  Established conditions for authorization access on the
                  registration portal.
                </li>
                <li>
                  Collaborated with cross-functional teams to gather
                  requirements and ensure integration
                </li>
              </ul>
            </div>
            <div>
              <p>Feb 2024 - April 2024</p>
            </div>
          </div>
        </div>
      </section>
      <section className="experience flex flex-col gap-4 font-mono p-12">
        <div className="flex justify-center gap-8 align-center">
          <div>
            <a
              href="https://pradyumanmaran.github.io/Calculator1/"
              target="_blank"
              rel="source"
            >
              <img
                src={calculator}
                className="object-contain h-96 w-96"
                alt="calculator"
              />
            </a>
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex flex-col justify-center">
              <h1 className="text-2xl">
                Calculator with dual theme mode (Dark,theme)
              </h1>
              <ul className="list-disc flex flex-col gap-6 p-4">
                <li>Offers both dark and light themes for user preference.</li>
                <li>Simple toggle switch enables theme switching.</li>
                <li>Sleek, user-friendly interface for easy calculations.</li>
                <li>Adapts to various screen sizes for consistency.</li>
              </ul>
              <a
                href="https://pradyumanmaran.github.io/Calculator1/"
                target="_blank"
                rel="source"
              >
                <button className="bg-yellow-500 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue hover:bg-blue-700">
                  Click the image for the project
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-8 align-center">
          <div>
            <a
              href="https://pradyumanmaran.github.io/debitcard/"
              target="_blank"
              rel="source"
            >
              <img
                src={debitcard}
                className="object-contain h-96 w-96"
                alt="calculator"
              />
            </a>
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex flex-col justify-center">
              <h1 className="text-2xl">
                Debit Card with transition 360 degree mode
              </h1>
              <ul className="list-disc flex flex-col gap-6 p-4">
                <li>Offers both dark and light themes for user preference.</li>
                <li>Simple toggle switch enables theme switching.</li>
                <li>Sleek, user-friendly interface for easy calculations.</li>
                <li>Adapts to various screen sizes for consistency.</li>
              </ul>
              <a
                href="https://pradyumanmaran.github.io/debitcard/"
                target="_blank"
                rel="source"
              >
                <button className="bg-yellow-500 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue hover:bg-blue-700">
                  Click the image for the project
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-8 align-center">
          <div>
            <a
              href="https://pradyumanmaran.github.io/weather1/"
              target="_blank"
              rel="source"
            >
              <img
                src={weather}
                className="object-contain h-96 w-96"
                alt="Weather"
              />
            </a>
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex flex-col justify-center">
              <h1 className="text-2xl">
                search tells you weather of the city you type
              </h1>
              <ul className="list-disc flex flex-col gap-6 p-4">
                <li>Offers every city weather report for user preference.</li>
                <li>Simple type enables weather report prediction</li>
                <li>Sleek, user-friendly interface for easy inputs.</li>
                <li>Adapts to various screen sizes for consistency.</li>
              </ul>
              <a
                href="https://pradyumanmaran.github.io/weather1/"
                target="_blank"
                rel="source"
              >
                <button className="bg-yellow-500 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue hover:bg-blue-700">
                  Click the image for the project
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-8 align-center">
          <div>
            <a
              href="https://pradyumanmaran.github.io/dashboard/"
              target="_blank"
              rel="source"
            >
              <img
                src={dashboard}
                className="object-contain h-96 w-96"
                alt="calculator"
              />
            </a>
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex flex-col justify-center">
              <h1 className="text-2xl">a sample e-commmerce website</h1>
              <ul className="list-disc flex flex-col gap-6 p-4">
                <li>Authentication done using firebase.</li>
                <li>crud application done.</li>
                <li>Fire base is used for database.</li>
                <li>Adapts to various screen sizes for consistency.</li>
              </ul>
              <a
                href="https://pradyumanmaran.github.io/dashboard/"
                target="_blank"
                rel="source"
              >
                <button className="bg-yellow-500 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue hover:bg-blue-700">
                  Click the image for the project
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="contact bg-[#e8e8e8] px-24 font-mono p-12">
        <div className="flex justify-evenly ">
          <div className="flex flex-col gap-4 justify-start">
            <h1 className="text-4xl font-extrabold">Lets Connect</h1>
            <p>say hello at pradyumanmaran@gmail.com</p>
            <p>
              For info here is my{" "}
              <a href={Best_resume} download={Best_resume} rel="resume">
                <span className="text-2xl">resume</span>
              </a>{" "}
            </p>
            <div className="flex gap-2">
              <div>
                <img src={Frame3} alt="frame3" />
              </div>
              <div>
                <img src={Frame4} alt="frame4" />
              </div>
              <button className="bg-yellow-500 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue hover:bg-blue-700">
                Contact Me
              </button>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-3">
                <label for="name">Name</label>
                <input
                  placeholder="Enter your name"
                  className="name border rounded w-96 max-[426px]:w-full md:w-full"
                  id="name"
                ></input>
              </div>
              <div className="flex flex-col gap-3">
                <label for="Emaill">E-mail</label>
                <input
                  placeholder="Enter your E-mail"
                  className="Emaill  border rounded w-96 max-[426px]:w-full md:w-full"
                  id="Email"
                ></input>
              </div>
              <div className="flex flex-col gap-3">
                <label for="Subject">Subject</label>
                <input
                  placeholder="Enter your subject"
                  className="Subject border rounded w-96 max-[426px]:w-full md:w-full"
                  id="Subject"
                ></input>
              </div>
              <div className="flex flex-col gap-3">
                <label for="Message">Message</label>
                <input
                  placeholder="Enter your Message"
                  className="Message border rounded  h-48 lg:w-96 max-[426px]:w-full md:w-full "
                  id="Message"
                ></input>
              </div>
              <button className="bg-[#BAB86C] text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue hover:bg-blue-700">
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Porftolio;
