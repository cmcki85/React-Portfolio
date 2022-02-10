import React, { useState } from "react";

import { Helmet } from "react-helmet";
import Layout from "../components/layout";

const FORM_ENDPOINT = "https://public.herotofu.com/v1/ec6bc650-8a22-11ec-9849-fb4467695b96";

function Contact() {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
        setTimeout(() => {
            setSubmitted(true);
        }, 100);
    }

    if (submitted) {
        return(
            <>
                <div className="text-2xl font-body">Thank You!</div>
                <div className="text-md font-body">I'll be in touch soon.</div>
            </>
        )
    }

    return(
        <Layout>
            <Helmet>
                <title>Cameron Mckiddie | Contact Me</title>
            </Helmet>
            <form
                action={FORM_ENDPOINT}
                onSubmit={handleSubmit}
                method="POST"
                target="_blank"
            >
                <div className="mb-3 pt-0">
                    <input
                        type="text"
                        placeholder="Your name"
                        name="name"
                        className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Email"
                        name="email"
                        className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Your Message"
                        name="message"
                        className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                        required
                    />
                </div>
                <div className="mb-3 pt-0">
                    <button 
                        className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="submit"
                    >
                        Send a message
                    </button>
                </div>

            </form>
        </Layout>
    )
}

export default Contact