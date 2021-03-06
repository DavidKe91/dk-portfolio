import React from "react";
import classNames from 'classnames';
import Menu from '../../components/Sidebar/Menu/Menu';
import { Link } from "react-router-dom";
import './About.css';
import MenuButtonClose from '../../components/Sidebar/MenuButtons/MenuButtonClose';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Footer from '../../components/Footer/Footer';

class About extends React.Component {
    state = {
        menuOpen: false,
    };

    handleMenuClick() {
        this.setState({
            menuOpen: !this.state.menuOpen
        });
    }

    handleAnchorClick() {
        this.setState({
            menuOpen: false
        });
    }

    render() {

        let toggleClasses = classNames({
            main: true,
            'toggled': this.state.menuOpen,
        });


        return (
            <>
                <div className={toggleClasses}>
                    <div className="topOuter">
                        <MenuButtonClose
                            open={this.state.menuOpen}
                            onClick={() => this.handleMenuClick()}>
                            <i className="fas fa-bars"></i>
                        </MenuButtonClose>
                        <Menu
                            open={this.state.menuOpen}>
                        </Menu>
                        <header className="about appHeader">
                            <div className="container">
                                <div className="headerWrapper">
                                    <h1>About <span>Me</span></h1>
                                </div>
                            </div>
                        </header>
                        <section className="aboutPage">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="aboutMeRow">
                                            <p className="mb-4">My name is David Kennedy and I am a Frontend Developer based in Meath. Having initially worked as a graphic designer, I later transitioned to Frontend web development and I am now looking for my next opportunity.</p>
                                            <p className="mb-4">My latest role at KAX Media involved working for the Growth Marketing team where my main responsibility was to develop and manage the PPC (Pay Per Click) website. This PPC site contained thousands of dynamically generated web pages that stems from a Laravel PHP application which pulls data from a relational database using Vue.js and internal APIs. I have spent the past year and a half creating a portfolio of projects using React.js. With my 6 years of experience with Javascript and my extensive experience with MVC frameworks, I am transitioning over to React with ease.</p>
                                            <p className="mb-4">I am currently looking a new opportunity in web development where I can use my experience effectively and hopefully immerse myself in a new challenge. I believe that progressive web applications are the future of web development and I would love to find a role that uses React at the core of their tech stack.</p>
                                            <Link to="/experience">
                                                <button>My Experience<FontAwesomeIcon icon={faArrowRight} /></button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <Footer />
            </>
        );
    }
};

export default About;