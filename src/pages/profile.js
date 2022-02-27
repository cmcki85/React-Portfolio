import React from "react";

import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import ProfileImg from '../media/profile-placement-image.jpg';


const ProfilePage = () => (
  <Layout>
    <Helmet>
      <title>Cameron Mckiddie | Profile</title>
    </Helmet>
    <span className="flex justify-center font-nav-title text-3xl pb-8">
      My Story
    </span>
    <img
      src={ProfileImg}
      alt="An open book next to a coffee cup."
      className="flex justify-center "
    />
    <article className="flex justify-center flex-col font-body p-10 text-lg">
      <span className="font-bold">Cameron Mckiddie</span>
      <div>
        <span className="font-semi-bold">
          @ <span className="text-body-emphasize">Sunny Brisbane</span>
        </span>
      </div>
      <hr className="h-2" />
      <p className="whitespace-pre-line">
        Hi. My name is Cameron Mckiddie and im a junior software developer trying to make a name for himself. 
        My passion for programing was ignited the first time I compiled a program to spit out "Hello World". 
        Since then I've been compelled to expand my knowledge and understanding of modern computing technology 
        through doing. For the last 4 years I've tinkered with, broken and then fixed several modern applications 
        in various languages.  
        <br />
        <br />
        Through all of my tinkering around I've come to appreciate the technology that goes into optimizing both the
        front and back end of modern applications. I've applied myself and attempted to learn a variety of modern web 
        languages to cover everything for front end design to databases and API's. This website acts as a portfolio 
        that showcases my achievements and current projects.
        <br />
      </p>
    </article>
  </Layout>
)

export default ProfilePage