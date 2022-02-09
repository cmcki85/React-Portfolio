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
      className="flex justify-center"
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
        In ut deserunt elit pariatur eiusmod in irure eiusmod enim duis pariatur
        tempor ut. Eiusmod cillum quis duis adipisicing amet commodo esse sit et
        duis exercitation officia duis. Adipisicing culpa laboris aute ea ipsum
        sunt officia minim dolor do. Quis Lorem proident quis excepteur eiusmod
        dolor eiusmod quis. Voluptate esse aute labore dolor excepteur cupidatat
        irure laboris Lorem amet ipsum magna sit.
        <br />
        <br />
        Ex veniam qui commodo sunt adipisicing duis incididunt. Laboris veniam
        ut elit ipsum nisi sint. Cupidatat sunt ut fugiat cupidatat laborum
        nulla sunt est elit magna fugiat reprehenderit irure. Velit irure est
        consectetur ex aute eiusmod officia adipisicing cupidatat eu. Aliquip
        commodo nulla aliquip proident nostrud incididunt labore adipisicing
        occaecat esse duis et laborum aliquip.
        <br />
      </p>
    </article>
  </Layout>
)

export default ProfilePage