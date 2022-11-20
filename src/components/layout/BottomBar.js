import React, { useContext } from 'react'
import GithubContext from '../../context/github/githubContext';

const BottomBar = ({repos, login}) => {
 const githubContext = useContext(GithubContext)
 const {page, nextPage, prevPage} = githubContext;
 const allPages = Math.ceil(repos/10);
 const onPrevButtonHandler = () => {
   if(page !== 1) {
    prevPage(login, page-1);
   }
 }
 const onNextButtonHandler = () => {
   if(page !== allPages) {
    nextPage(login, page+1);
   }
 }
  return (
    <div className='text-center m-2'>
     {page !== 1 && <button className='btn' onClick={onPrevButtonHandler}><i className='fas fa-arrow-left p' /> Previous</button>}
     <p className='btn'>{page}</p>
     {page !== allPages && <button className='btn' onClick={onNextButtonHandler}>Next <i className='fas fa-arrow-right p' /></button>}
    </div>
  )
}

export default BottomBar