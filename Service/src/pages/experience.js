import React from "react"

import {
    faCocktail,
    faWrench,
    faUserGraduate,
  } from "@fortawesome/free-solid-svg-icons"
import { Helmet } from "react-helmet";
import ContentBox from "../components/content-box";
import Layout from "../components/layout";

function Experience() {
  return (
    <Layout>
    <Helmet>
      <title>Cameron Mckiddie | Experience</title>
    </Helmet>
      <span className="flex justify-center font-nav-title text-3xl pb-8">
            Where I've Been
        </span>
        
        <ContentBox
            contentTitle={"Bachelor of Computer Science + Electrical Engineering"}
            contentLocation={"Queensland University of Technology"}
            contentBody={<p>My degree was is a dual major focusing in electrical engineering (Electronic Design) and computer science. The computer science portion of my degree focused on the application of algorithms on to modern computing technologies. <br/><br/>My degree included many modern web technologies such as cloud computing, modern web design (React).</p>}
            contentIcon={faUserGraduate}
        />
        <ContentBox
            contentTitle={"Faculty and Games Technician"}
            contentLocation={"B'Lucky and Sons TCB"}
            contentBody={<p>My time spent as a games tech taught me a lot about technical de-bugging and the benefits of planning ahead. Whether I was flashing embedded systems or tracking down a wiring fault this positions always kept me on my toes.</p>}
            contentIcon={faWrench}            
        />
        <ContentBox
            contentTitle={"Cocktail Bartender"}
            contentLocation={"Oche Fortitude Valley"}
            contentBody={<p>Working as a bartender in the heart of Fortitude Valley has taught me many things. The importance of team work, communication and how to work hard under pressure.<br/><br/>But most importantly it taught me how to make a mean Mai Tai.</p>}
            contentIcon={faCocktail}
        />
    </Layout>
  );
}

export default Experience;
