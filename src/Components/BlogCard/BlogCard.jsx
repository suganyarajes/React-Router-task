

import React from 'react';
import PropTypes from 'prop-types';

export default function BlogCard({ blog = {} }) {
    return (
      <div className="card blog-card">
        <img src={blog.image} className="card-img-top" alt={blog.name} />
        <div className="card-body">
          <h5 className="card-title">{blog.name}</h5>
          <p className="card-text details">{blog.details}</p>
          <button className="btn btn-primary">Read</button>
        </div>
      </div>
    )
};

BlogCard.propTypes = {
    blog: PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      details: PropTypes.string.isRequired,
    }).isRequired,
  };