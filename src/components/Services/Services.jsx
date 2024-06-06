import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

const skillsData = [

  {
    name: "Basketball Video 1",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with your video URL
    aosDelay: "0",
  },
  {
    name: "Basketball Video 2",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with your video URL
    aosDelay: "500",
  },
  {
    name: "Basketball Video 3",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with your video URL
    aosDelay: "1000",
  },

];
const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="dark:bg-black dark:text-white py-14 sm:min-h-[600px] sm:grid sm:place-items-center">
        <div className="container">
          <div className="pb-12">
            <h1
              data-aos="fade-up"
              className="text-3xl font-bold text-center sm:text-4xl"
            >
              Watch resent <span className="text-primary">Videos</span>
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card p-4 bg-gray-200 dark:bg-dark hover:bg-primary/20 dark:hover:bg-primary/50 duration-300 text-black dark:text-white rounded-lg group"
              >
                <div className="grid place-items-center">
                  <iframe
                    width="100%"
                    height="250"
                    src={skill.videoUrl}
                    title={skill.name}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card p-4 bg-gray-200 dark:bg-dark hover:bg-primary/20 dark:hover:bg-primary/50 duration-300 text-black dark:text-white rounded-lg group"
              >
                <div className="grid place-items-center">
                  <iframe
                    width="100%"
                    height="250"
                    src={skill.videoUrl}
                    title={skill.name}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card p-4 bg-gray-200 dark:bg-dark hover:bg-primary/20 dark:hover:bg-primary/50 duration-300 text-black dark:text-white rounded-lg group"
              >
                <div className="grid place-items-center">
                  <iframe
                    width="100%"
                    height="250"
                    src={skill.videoUrl}
                    title={skill.name}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
