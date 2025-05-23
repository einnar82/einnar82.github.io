import React from "react";

const handleEmail = () => {
  window.open(`mailto:rannieollit@gmail.com`);
};

export default function IndexSectionCta8() {
  return (
    <React.Fragment>
      <>
        <section className="bg-white overflow-hidden pt-10 pb-14" id="contact-us">
          <div className="container px-4 mx-auto">
            <div className="text-center max-w-lg mx-auto">
              <h2 className="mb-5 text-6xl md:text-7xl font-bold font-heading text-center tracking-px-n leading-tight">
                Need a tech partner? Let’s talk.
              </h2>
              <p className="mb-7 text-lg text-gray-600 font-medium">
                I assist teams in delivering code that makes a difference, from
                quick prototypes to scalable platforms. Send me a message, and
                we'll plot your next victory.
              </p>
              <div className="mb-11 md:inline-block">
                <a
                  className="py-4 px-6 w-full text-white font-semibold border border-indigo-700 rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200"
                  href="mailto:rannieollit@gmail.com"
                >
                  Work with me
                </a>
              </div>
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}
