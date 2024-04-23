import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/css/slider.css';
const PROJECTS = [
  {
    imageUrl:
      'https://contenthub-static.grammarly.com/blog/wp-content/uploads/2017/11/how-to-write-a-blog-post.jpeg',
    title: 'BLOG PROJECT',
    githubLink: 'https://github.com/MatthewAndresWestMec/blog-project',
  },
  {
    imageUrl: 'https://i.ytimg.com/vi/jlodBfva-5s/maxresdefault.jpg',
    title: 'UWNA INTERNSHIP',
    githubLink: 'https://github.com/JRigney6993-coder/uwna-internship-project',
  },
  {
    imageUrl:
      'https://user-images.githubusercontent.com/52977034/119971715-9d0e2a80-bfb1-11eb-8938-b9da00b22b1f.png',
    title: 'UNITY GAME',
    githubLink: 'https://github.com/MatthewAndresWestMec/UNITYPLATFORMER',
  },
];

const Slider = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cards = gsap.utils.toArray('.card');

    cards.forEach((card) => {
      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top ', // Trigger animation when card reaches the center of the viewport
          end: 'bottom top', // End animation when card leaves the top of the viewport
          scrub: true, // Smoothly animate as the user scrolls
        },
        scale: 0.9,
        opacity: 0,
      });
    });
  }, []);

  return (
    <div className='container' ref={containerRef}>
      <div className='cards'>
        {PROJECTS.map((project, index) => (
          <div
            className='card'
            key={index}
            style={{ backgroundImage: `url(${project.imageUrl})` }}>
            <div className='card-content'>
              <h2>{project.title}</h2>
              <a
                href={project.githubLink}
                target='_blank'
                rel='noopener noreferrer'>
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
