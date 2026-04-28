import Link from "next/link";
import React from "react";

const Notfound = () => {
  return (
    <>
      <div className="hero min-h-screen bg-base-300 font-mono text-base-content">
        {/* Background Tech Pattern (Optional) */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        ></div>

        <div className="hero-content text-center z-10">
          <div className="max-w-md">
            {/* Animated Error Code */}
            <div className="relative inline-block">
              <h1 className="text-9xl font-black text-primary animate-pulse">
                404
              </h1>
              <span className="absolute -bottom-2 right-0 bg-secondary text-secondary-content px-2 py-1 text-xs font-bold uppercase tracking-widest">
                Packet Lost
              </span>
            </div>

            <div className="divider uppercase tracking-widest opacity-50 mt-8">
              System Analysis
            </div>

            {/* daisyUI Mockup Code Block */}
            <div className="mockup-code bg-base-100 text-left mb-8 shadow-2xl border border-primary/20">
              <pre data-prefix="$">
                <code>npm install hope</code>
              </pre>
              {/* Changed 'class' to 'className' below */}
              <pre data-prefix=">" className="text-warning">
                <code>installing...</code>
              </pre>
              <pre data-prefix=">" className="text-error">
                <code>Error: 404_Page_Not_Found</code>
              </pre>
              <pre data-prefix=">" className="text-success">
                <code>Suggestion: Return to index.js</code>
              </pre>
            </div>
            <p className="py-6 text-lg">
              The requested{" "}
              <span className="text-secondary font-bold">URL</span> was not
              found on this node. It may have been garbage collected.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Next.js Link for optimized routing */}
              <Link
                href="/"
                className="btn btn-primary btn-wide sm:btn-md group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 group-hover:-translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Initialize Recovery
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notfound;
<h1>Not found</h1>;
