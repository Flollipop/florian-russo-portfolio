import PropTypes from "prop-types"
import React from "react"
import { Link } from "react-scroll"

function HeaderButton({ label, href }) {
  return (
    <Link
      activeClass="active"
      spy={true}
      smooth={true}
      duration={500}
      to={`${href ? href : label.toLowerCase()}`}
      className="flex w-24 justify-center text-white hover:bg-gray-700 h-16 py-6 px-4 hover:border-solid border-blue-100 hover:border-b-2 cursor-pointer select-none"
    >
      {label}
    </Link>
  )
}

HeaderButton.prototype = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
}

const Header = ({ siteTitle, sections }) => (
  <nav className="flex items-center justify-between flex-row bg-gray-800 sticky top-0 z-50">
    <div className="flex px-4 items-center flex-shrink-0 text-white mr-6 hidden md:block">
      <span className="font-semibold text-xl tracking-tight">{siteTitle}</span>
    </div>
    <div className="text-sm w-full flex-grow flex h-16">
      {sections.map(sectionLabel => (
        <HeaderButton label={sectionLabel} key={`${sectionLabel}`} />
      ))}
    </div>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  sections: PropTypes.arrayOf(PropTypes.string).isRequired,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
