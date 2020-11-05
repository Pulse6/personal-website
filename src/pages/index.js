import React, { useState, useEffect } from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const AboutPage = () => {

  const [timeLeft, setTimeLeft] = useState(GetSec())

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(GetSec());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

    function GetSec() {
      let now = new Date();
      let hour = now.getHours();
      let minutes = now.getMinutes();
      let seconds = now.getSeconds();
      let totalSecondsToday = (hour * 60 + minutes) * 60 + seconds;

      let date0 = new Date(now.toString().slice(11, 15), 0, 1);
      let date1 = new Date();
      let numberOfDays = Math.ceil((date1 - date0) / 8.64e7);

      let temp = ((numberOfDays - 1) * 86400) + totalSecondsToday
      let secondLeft = 31622400 - temp
      return secondLeft
    }

  return (
    <Layout>
      <SEO title="About" />
      <div className="about">
        <div className="img">
          <Image />
        </div>
        <div>
          <h1>Nice to meet you <span role="img" aria-label="sheep">🐑</span></h1>
          <p>My name is Hok Lun Siu, You may call me Marco. I am passionate about web development. Enjoy helping my colleagues hone their coding abilities, and solving problems. I am always looking forward to the new challenges of the ever changing technological world we live in. I am excited to be given the opportunity to be apart of a coding team.</p>
        </div>
        <div class="time-left">Year Left: {timeLeft} sec</div>
      </div>
    </Layout>
  )
}

export default AboutPage
