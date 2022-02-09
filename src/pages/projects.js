import React from "react";

import { Helmet } from "react-helmet";
import Layout from "../components/layout"
import GoProjectImg from '../media/2560px-Go_Logo_Blue.svg.png'

const ProjectsPage = () => {
    return(
        <Layout>
            <Helmet>
                <title>Cameron Mckiddie | Projects</title>
            </Helmet>
            <span className="flex justify-center font-nav-title text-3xl pb-8">
                What I'm Working On
            </span>
            <div className="max-w-sm rounded border border-gray-800/10 overflow-hidden shadow-sm p-2">
                <img
                    src={GoProjectImg}
                    alt={"Golang logo with blue text."}
                    className="w-full"
                />
                <div className="px-6 py-4">
                    <div className="font-nav-title text-xl mb-2">Golang API</div>
                    <span className="font-body text-base">An API used for creating, deleting and altering comments made by authenticated users.</span>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <a
                        href="https://github.com/cmcki85"
                        className="inline-block border border-nav-main rounded-full px-3 py-1 text-sm font-semibold font-body text-nav-main mr-2 mb-2 hover:text-nav-hover hover:border-nav-hover">View on Github</a>
                </div>
            </div>
        </Layout>
    )
}

export default ProjectsPage