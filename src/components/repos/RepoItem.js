import React from 'react';
import PropTypes from 'prop-types';

const RepoItem = ({ repo }) => {
  return (
    <div className='card-repo'>
      <h3>
        <a href={repo.html_url}>{repo.name}</a>
      </h3>
      <p className='small'>{repo.description}</p>
      <div>
      {
        repo.topics.map((topic, index) => {
          return (
            <div key={index} className='badge badge-light'>
              <p>{topic}</p>
            </div>
          )
        })
      }
      </div>
    </div>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired
};

export default RepoItem;
