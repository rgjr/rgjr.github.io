import React from 'react';

// {
//   name: name-of-project,
//   render: (
//     <div className='portfolio-item'>
//       <div className='portfolio-item__title'>
//         Project Title
//       </div>
//       <div className='portfolio-item__desc'>
//         Project Description
//       </div>
//       <div className='portfolio-item__icon'>
//         <i className='fab fa-js'></i>
//         <i className='fab fa-npm'></i>
//       </div>
//       <div className='portfolio-item__links'>
//         <a target='_blank' rel='noopener noreferrer' href='path/to/project'>Project Name</a>
//       </div>
//     </div>
//   )
// }

export default [
  {
    name: 'React-Youtube',
    render: (
      <div className='portfolio-item'>
        <div className='portfolio-item__title'>
          React Youtube
        </div>
        <div className='portfolio-item__desc'>
          Youtube frontend built in React
        </div>
        <div className='portfolio-item__icon'>
          <i className='fab fa-react'></i>
          <i className='fab fa-js'></i>
          <i className='fab fa-node'></i>
        </div>
        <div className='portfolio-item__links'>
          <a target='_blank' rel='noopener noreferrer' href='https://github.com/rgjr/react-youtube'>React Youtube</a>
        </div>
      </div>
    )
  }
]