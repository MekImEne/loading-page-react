import React, { Component } from "react";
import Banner from "./components/Banner";
import Classes from "./components/Classes";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Schedule from "./components/Schedule";
import Subscribe from "./components/Subscribe";
import Trainers from "./components/Trainers";

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Banner />
        <Features />
        <Subscribe />
        <Classes />
        <Schedule />
        <Trainers />
        <Contact />
        <Footer />
      </>
    );
  }
}
