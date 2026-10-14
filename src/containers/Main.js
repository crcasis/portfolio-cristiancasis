import React, {Component, Suspense, lazy} from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import Loading from "./loading/Loading";
import {StyleProvider} from "../contexts/StyleContext";
import "./Main.css";

const StackProgress = lazy(() => import("./skillProgress/skillProgress"));
const Education = lazy(() => import("./education/Education"));
const WorkExperience = lazy(() => import("./workExperience/WorkExperience"));
const Projects = lazy(() => import("./projects/Projects"));
const StartupProject = lazy(() => import("./StartupProjects/StartupProject"));
const Achievement = lazy(() => import("./achievement/Achievement"));
const Blogs = lazy(() => import("./blogs/Blogs"));
const Talks = lazy(() => import("./talks/Talks"));
const Twitter = lazy(() => import("./twitter-embed/twitter"));
const Podcast = lazy(() => import("./podcast/Podcast"));
const Profile = lazy(() => import("./profile/Profile"));
const Footer = lazy(() => import("../components/footer/Footer"));
const Top = lazy(() => import("./topbutton/Top"));

const renderLoader = () => <Loading />;

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDark: false
    };
  }

  componentDidMount() {
    if (localStorage.getItem("isDark") === null) {
      const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
      localStorage.setItem("isDark", darkPref.matches);
    }
    this.setState({isDark: JSON.parse(localStorage.getItem("isDark"))});
  }
  changeTheme = () => {
    this.setState({isDark: !this.state.isDark}, () => {
      localStorage.setItem("isDark", this.state.isDark);
    });
  };

  render() {
    return (
      <div className={this.state.isDark ? "dark-mode" : null}>
        <StyleProvider
          value={{isDark: this.state.isDark, changeTheme: this.changeTheme}}
        >
          <Header />
          <Greeting />
          <Skills />
          <Suspense fallback={renderLoader()}>
            <StackProgress />
            <Education />
            <WorkExperience />
            <Projects />
            <StartupProject />
            <Achievement />
            <Blogs />
            <Talks />
            <Twitter />
            <Podcast />
            <Profile />
            <Footer />
            <Top />
          </Suspense>
        </StyleProvider>
      </div>
    );
  }
}
