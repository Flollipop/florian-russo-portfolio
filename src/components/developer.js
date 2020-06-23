import React from "react"
import PropTypes from "prop-types"

const Developer = ({ label, headline, name, picture, summary }) => (
  <section
    className="font-sans antialiased bg-center bg-cover flex justify-center items-center py-6 px-3 min-h-screen"
    style={{
      backgroundImage: 'url("https://source.unsplash.com/1L71sPT5XKc")',
    }}
    id="about"
  >
    <div className="max-w-md rounded flex-col shadow-lg bg-gray-100 bg-opacity-15 p-1 shadow-2xl m-0">
      <div className="rounded overflow-hidden flex-wrap flex-col shadow-lg bg-r-gradient shadow-base">
        <div className=" px-4 py-4 bg-l-gradient">
          <div className="text-center sm:text-left flex-row md:flex mb-4">
            <div className="flex justify-center">
              <img
                className="h-32 w-32 rounded-full shadow-2xl"
                src={picture}
                alt=""
              />
            </div>
            <div className="flex-initial self-center text-center md:text-left px-3 ">
              <h1 className="w-full text-xl font-bold py-1 leading-tight text-gray-800">
                {name}
              </h1>
              <p className="w-full text-md font-light leading-normal text-gray-900">
                {label}
              </p>
              <p className="w-full mb-1 text-sm italic font-normal text-gray-900">
                "{headline}"
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 text-left p-4">
          <p className="w-full text-md font-bold text-gray-900">About</p>
          <div className="leading-tight tracking-tighter">
            <text className="w-full font-light whitespace-pre-line text-gray-600">
              {summary}
            </text>
          </div>
        </div>
      </div>
    </div>
  </section>
)

Developer.propTypes = {
  label: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
}

export default Developer
