import PropTypes from "prop-types"
import React from "react"

function HeaderButton({ label, href }) {
  return (
    <a
      href={`#${href}`}
      className="flex w-24 justify-center text-white hover:bg-gray-700 h-16 py-6 px-4 hover:border-solid border-blue-100 hover:border-b-2"
    >
      {label}
    </a>
  )
}

HeaderButton.prototype = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
}

const Header = ({ siteTitle }) => (
  <nav className="flex items-center justify-between flex-row bg-gray-800 sticky top-0">
    <div className="flex px-4 items-center flex-shrink-0 text-white mr-6 hidden md:block">
      <span className="font-semibold text-xl tracking-tight">{siteTitle}</span>
    </div>
    <div className="text-sm w-full flex-grow flex h-16">
      <HeaderButton label={"About"} href={"about"} />
      <HeaderButton label={"Education"} href={"education"} />
      <HeaderButton label={"Work"} href={"work"} />
    </div>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
