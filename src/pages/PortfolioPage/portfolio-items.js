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
  },
  {
    name: 'React-Weathermap',
    render: (
      <div className='portfolio-item'>
        <div className='portfolio-item__title'>
          React Weathermap
        </div>
        <div className='portfolio-item__desc'>
          Weathermap example built in React
        </div>
        <div className='portfolio-item__icon'>
          <i className='fab fa-react'></i>
          <i className='fab fa-js'></i>
          <i className='fab fa-node'></i>
        </div>
        <div className='portfolio-item__links'>
          <a target='_blank' rel='noopener noreferrer' href='https://github.com/rgjr/react-weathermap'>React Weathermap</a>
        </div>
      </div>
    )
  },
  {
    name: 'Server-Side-Rendering',
    render: (
      <div className='portfolio-item'>
        <div className='portfolio-item__title'>
          React Server Side Rendering
        </div>
        <div className='portfolio-item__desc'>
          SSR example built in React
        </div>
        <div className='portfolio-item__icon'>
          <i className='fab fa-react'></i>
          <i className='fab fa-js'></i>
          <i className='fab fa-node'></i>
        </div>
        <div className='portfolio-item__links'>
          <a target='_blank' rel='noopener noreferrer' href='https://github.com/rgjr/server-side-rendering'>React SSR</a>
        </div>
      </div>
    )
  },
  {
    name: 'Cards',
    render: (
      <div className='portfolio-item'>
        <div className='portfolio-item__title'>
          Cards Against Humanity Clone
        </div>
        <div className='portfolio-item__desc'>
          Cards Against Humanity clone built in React
        </div>
        <div className='portfolio-item__icon'>
          <i className='fab fa-react'></i>
          <i className='fab fa-js'></i>
          <i className='fab fa-node'></i>
          <i className="fab fa-gulp"></i>
        </div>
        <div className='portfolio-item__links'>
          <a target='_blank' rel='noopener noreferrer' href='https://github.com/rgjr/cards'>Cards</a>
        </div>
      </div>
    )
  },
  {
    name: 'Iris-Slack-Bot',
    render: (
      <div className='portfolio-item'>
        <div className='portfolio-item__title'>
          Iris Slack Bot
        </div>
        <div className='portfolio-item__desc'>
          Slack Bot example
        </div>
        <div className='portfolio-item__icon'>
          <i className='fab fa-js'></i>
          <i className='fab fa-node'></i>
          <i className="fab fa-slack"></i>
        </div>
        <div className='portfolio-item__links'>
          <a target='_blank' rel='noopener noreferrer' href='https://github.com/rgjr/iris-slack-bot'>Iris Slack Bot</a>
        </div>
      </div>
    )
  }
]