import React from 'react';
import aboutpic from '../layout/about.svg';
function About() {
  return (
    <div>
      <h1 className='h1-about'> About</h1>
      <div className='home-card'>
        <p>Github finder helps you to find users in github.</p>
        <p>
          It also gives you a breif information about that user profile, which
          includes name, location, hireable, bio, followers, gists, recent repos
          and much more.
        </p>
      </div>
      <div className='home-card about-card'>
        <p>It is a webapp made on react framework.</p>
        <p>
          It's open source. You can contribute here.{' '}
          <a style={{ color: ' #ff79c6' }} href='https://github.com/Abhay-G'>
            Contribute
          </a>
        </p>
      </div>
      <div className='contact-links'>
        <a
          className='colored-link'
          href='https://github.com/Abhay-G'
          target='_blank'
          rel='noreferrer'
        >
          <i class='fab fa-github'></i>
        </a>
        <a
          className='colored-link'
          href='https://www.linkedin.com/in/abhay-gupta-253a45198/'
          target='_blank'
          rel='noreferrer'
        >
          <i class='fab fa-linkedin-in'></i>
        </a>
        <a
          className='colored-link'
          href='https://www.instagram.com/a_b_h_a_y_77/'
          target='_blank'
          rel='noreferrer'
        >
          {' '}
          <i class='fab fa-instagram'></i>
        </a>
      </div>
      <img src={aboutpic} alt='img' className='cartoon-about' />
    </div>
  );
}

export default About;
