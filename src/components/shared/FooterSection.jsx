import PropTypes from "prop-types";

const FooterSection = ({ title, items }) => (
  <li>
    <ul className="text-center">
      <span className="text-lg font-bold text-center text-black">{title}</span>
      {items.map((item, index) => (
        <li key={index} className="mt-3 text-base leading-loose text-opacity-60">
          {item}
        </li>
      ))}
    </ul>
  </li>
);

FooterSection.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FooterSection;