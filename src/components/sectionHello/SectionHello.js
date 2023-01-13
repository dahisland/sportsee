import React from "react";
import PropTypes from "prop-types";

/**
 * Component React for display user's name with a welcoming message
 * @component
 */
const SectionHello = ({ name }) => {
  return (
    <section className="mainSection_hello">
      <h1>
        Bonjour <span>{name}</span>
      </h1>
      <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
    </section>
  );
};

SectionHello.propTypes = {
  /**
   * User's name
   */
  name: PropTypes.string,
};

export default SectionHello;
