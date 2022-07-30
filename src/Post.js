import React from "react";
import PropTypes from 'prop-types';

export default function Post(props) {
  return (
    <>
      <article>
        <strong>{props.post.title}</strong><br />
        <small>{props.post.subtitle}</small>
        <br />
        Media: {props.likes / 2}
      </article>
      <br />
    </>
    
  );
}

// Definir tipo recebido da propriedade
// shape -> objeto
Post.propTypes = {
  likes: PropTypes.number.isRequired,
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  }).isRequired,
};