import React from "react";
import {BsFillArrowDownCircleFill} from "react-icons/bs";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby"
import { SkillsBoard } from "../components/SkillsBoard";
import { Layout } from "../components/Layout";
import { SEO } from "../components/SEO";
import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
import scrollTo from 'gatsby-plugin-smoothscroll';


import "../styles/index.scss";
import "../components/Footer/styles.scss";


const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="Home | Portfolio"
        image="https://github.com/Hikki12/portfolio/blob/master/src/assets/images/me.jpeg?raw=true"
        description="This is my personal portfolio, here I put information about me, and my skills, and I show to people my work."
        url="https://hikki12.github.io/portfolio/"
      />
      <section className="d-flex flex-column v-center h-center main-section">
        <h1 className="h1">Greetings,</h1>
        <p>I'm <b>J</b><b className="pinky-word">A</b><b>SON</b></p>
        <div className="neon-hr">
          <div className="neon-light"></div>
        </div>
        <em className="mt-2">
          This is my personal portfolio.
        </em>
        <div class="mt-5 text-6xl pulse" onClick={() => scrollTo('#me-section')}>
          <BsFillArrowDownCircleFill/>
        </div>
      </section>
      <section id="me-section" className="d-flex flex-column justify-content-center align-items-center v-center about-section">
        <h2 className="title"> 
          Let me <b className="title-introduce">introuduce</b> myself
        </h2>
        <div className="myself-container">
          <div className="myself-image-container">
            <StaticImage className="profile-image" src="../assets/images/me.jpeg" alt="profile-image"/>
          </div>
          <div className="myself-info-container text-justify">
            <p>My name is Jason Macas Mora, I am passionate about the abstract, as such, I love programming. ⚡ 🥰 💻</p>
            <p>I studied electronics and telecommunications <b>engineering</b> and in the process I learned to use various tools. 📚 ⚙ 📡</p>
            <p>Here you can check <Link class="text-orange" to="/projects">my projects.</Link></p>
            <p>Below is my skills set, but if you want to know a little more about me, <Link class="text-pink" to="/resume">Click here</Link>.</p>
            <p>Finally I leave you my <a class="text-pink" href={`CV.pdf`} target='_blank' rel='noopener noreferrer'>CV</a> and my social networks:</p>
            <div class="media-links-container">
                <div class="media-link-container">
                    <a href="https://www.instagram.com/jasonm._/" target="_blank" rel="noopener noreferrer"><BsInstagram /></a>
                </div>
                <div class="media-link-container">
                    <a href="https://github.com/Hikki12" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
                </div>
                <div class="media-link-container">
                    <a href="https://www.linkedin.com/in/jason-francisco-macas-mora-47b938141/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
                </div>
            </div>
          </div>
        </div>
      </section>
      <section className="skills-section d-flex flex-column justify-content-center align-items-center">
        <h2 className="text-center">Skills</h2>
        <SkillsBoard />
      </section>
    </Layout>
  )
}

export default IndexPage
