import React from 'react';
import PropTypes from 'prop-types';
import RepoItem from './RepoItem';

const Repos = ({ repos }) => {
  return (
    <>
    <h2 className="my-2">Public Repositories:</h2>
    <div className='list-repo'>
      {
        repos.map(repo => <RepoItem repo={repo} key={repo.id} />)
      }
    </div>
    </>
  );
};

Repos.propTypes = {
  repos: PropTypes.array.isRequired
};

export default Repos;
