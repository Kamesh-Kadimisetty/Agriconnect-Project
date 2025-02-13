import React from 'react';
import './ComponentStyles/Card.css';
import Layout from './Layout/Layout';

function Card({username,rollno,description})
{
  return (
    <Layout>
    <div className='Card'>
      <div className='upper-container'>
        <div className='image-container'>
          <img src="" alt='' width='100px' height='100px'/>
        </div>
      </div>
      <div className='lower-container'>
        <h3> { username } </h3>
        <h6> { rollno } </h6>
        <p> {description} </p>
        <button>Add</button>
      </div>
    </div>
    </Layout>
  );
}

export default Card