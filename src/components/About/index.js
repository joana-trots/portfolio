import { Link } from 'react-router-dom'
import './index.sass'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react'
import aboutCover from '../../assets/images/about-cover.png'
import Loader from 'react-loaders'


const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    return (
        <>
            <div className="container about-page">
                <div className="about-page__text-zone">
                    <div className='about-section'>
                        <div className='about-section__left-side'>
                            <h1>
                                <AnimatedLetters letterClass={letterClass} 
                                srtArray={['A', 'b', 'o', 'u', 't', '','', 'm', 'e']} 
                                idx={1}></AnimatedLetters>
                            </h1>
                            <p>I&rsquo;m an&nbsp;ambitious frontend developer with a&nbsp;good sense of&nbsp;beauty&nbsp;🤩 and willingness to develop amazing user experiences. I&rsquo;m really passionate about creating nice and stunning products with a&nbsp;clean code. Currently learning React and UX/UI. </p>
                            <p>Contributing to the design and development of web based user interfaces, working with the latest tools and cutting-edge web technologies - are the most important things I rely on when choosing a dream job.</p>
                            <p>I would like to be a part of a professional team that takes pride in its craft and ship expertly engineered UIs.</p>
                            <p>I'm exited to try new things and always ready for challenges&nbsp;🤘&nbsp;💪</p>
                        </div>
                        <div className='about-section__right-side'>
                            <div className='cv-block'>
                                <a href='/portfolio/CV_JoanaTrots.pdf' download>
                                    <span className='caption'>Learn more</span>
                                    <span className='par'>You can see my hard & soft skills, education and work background right in my CV</span>
                                    <FontAwesomeIcon icon={ faArrowRight } className='arrow-link' />
                                </a>
                            </div>
                            <img src={aboutCover} alt='about cover'></img>
                        </div>
                    </div>
                    <div className='portfolio-block'>
                        <Link to="/portfolio/my-work">
                            <span className='caption'>Portfolio</span>
                            <h3>Take a look at my work</h3>
                            <span className='par'>Development and design solutions</span>
                            <FontAwesomeIcon icon={ faArrowRight } className='arrow-link' />
                        </Link>
                    </div>
                    <div className='skills-block'>
                        <Link to='/portfolio/cv'>
                            <span className='caption'>Blog</span>
                            <h3>All about my professional life</h3>
                            <span className='par'>Tips & tricks, achievements and insights</span>
                            <FontAwesomeIcon icon={ faArrowRight } className='arrow-link' />
                        </Link>
                    </div>
                    <div className='roadmap-block'>
                        <Link to='/portfolio/roadmap'>
                            <span className='caption'>Roadmap</span>
                            <h3>My growth and learning plan</h3>
                            <span className='par'>See my roadmap</span>
                            <FontAwesomeIcon icon={ faArrowRight } className='arrow-link' />
                        </Link>
                    </div>
                    
                </div>
            </div>
            <Loader type="ball-scale-ripple-multiple" />
        </>
    )
}

export default About