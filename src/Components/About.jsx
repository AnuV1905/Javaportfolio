/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/150543-abstract-brown-and-white-diagonal-shiny-lines-background-vector-image.jpg";

const imageAltText = "Anushka Verma/brown and white abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I am a passionate undergraduate student pursuing B.Tech at the National Institute of Technology Patna, currently entering my third year.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Website development",
  "Deployement",
  "Web design",
  "Software Development",
  "Competetive Programming",
  "DSA",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "My primary interests lie in software development, building websites and crafting intuitive UI/UX experiences. I am currently working on my problem solving skills and algorithms primarily in C++. I have actively contributed as the developer in a significant web development project. Beyond development, I have dedicated time to creating sample UI projects, emphasizing user-centric design principles.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
