import React from "react";

export default function IndexSectionFeatures6() {
  return (
    <React.Fragment>
      <>
        <section className="pt-28 pb-36 overflow-hidden" id="projects">
          <div className="container px-4 mx-auto">
            <div className="mb-20 flex flex-wrap items-end -m-8">
              <div className="w-full md:w-1/2 p-8">
                <h2 className="text-6xl md:text-7xl font-bold font-heading tracking-px-n leading-tight md:max-w-xl">
                  Three Stories of Impact: From Idea to Launch—x3
                </h2>
              </div>
              <div className="w-full md:w-1/2 p-8">
                <p className="text-lg text-gray-900 font-medium leading-relaxed md:max-w-lg">
                  These three projects demonstrate my entire stack—design, code,
                  discovery, and results—from rapid prototypes to flawless
                  launches. Each one addresses a distinct problem, describes the
                  resources I employed, and demonstrates the value produced.
                  Discover how vision becomes velocity and how I can help your
                  team achieve the same results.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap -m-3">
              <div className="w-full md:w-1/3 p-3">
                <a className="flex justify-center md:block h-full" href="https://drp.perahub.com.ph/root" target="_blank">
                  <div className="relative h-full rounded-3xl overflow-hidden">
                    <img
                      className="h-full md:w-full object-cover transform hover:scale-105 transition ease-in-out duration-1000"
                      src="https://static.shuffle.dev/uploads/files/49/49d622437799f128224ad2092b09c2c0accda394/Image-Editor.png"
                      alt
                    />
                    <div className="absolute bottom-0 left-0 w-full px-11 pb-10">
                      <div
                        className="px-8 py-4 bg-white bg-opacity-10 rounded-xl shadow-5xl"
                        style={{
                          WebkitBackdropFilter: "blur(5px)",
                          backdropFilter: "blur(5px)",
                        }}
                      >
                        <h3 className="text-lg text-white text-center font-semibold">
                          Perahub
                        </h3>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="w-full md:w-1/3 p-3">
                <a className="flex justify-center md:block h-full" href="https://poliigon.com" target="_blank">
                  <div className="relative h-full rounded-3xl overflow-hidden">
                    <img
                      className="h-full md:w-full object-cover transform hover:scale-105 transition ease-in-out duration-1000"
                      src="https://static.shuffle.dev/uploads/files/49/49d622437799f128224ad2092b09c2c0accda394/Image-Editor-1.png"
                      alt
                    />
                    <div className="absolute bottom-0 left-0 w-full px-11 pb-10">
                      <div
                        className="px-8 py-4 bg-white bg-opacity-10 rounded-xl shadow-5xl"
                        style={{
                          WebkitBackdropFilter: "blur(5px)",
                          backdropFilter: "blur(5px)",
                        }}
                      >
                        <h3 className="text-lg text-white text-center font-semibold">
                          Poliigon
                        </h3>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="w-full md:w-1/3 p-3">
                <a className="flex justify-center md:block h-full" href="https://lodago.com" target="_blank">
                  <div className="relative h-full rounded-3xl overflow-hidden">
                    <img
                      className="h-full md:w-full object-cover transform hover:scale-105 transition ease-in-out duration-1000"
                      src="https://static.shuffle.dev/uploads/files/49/49d622437799f128224ad2092b09c2c0accda394/Image-Editor-3.png"
                      alt
                    />
                    <div className="absolute bottom-0 left-0 w-full px-11 pb-10">
                      <div
                        className="px-8 py-4 bg-white bg-opacity-10 rounded-xl shadow-5xl"
                        style={{
                          WebkitBackdropFilter: "blur(5px)",
                          backdropFilter: "blur(5px)",
                        }}
                      >
                        <h3 className="text-lg text-white text-center font-semibold">
                          Lodago
                        </h3>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}
