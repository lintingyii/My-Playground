import "./App.css";
import {
  FigmaEmbedValentine,
  FigmaEmbedChristmas,
  FigmaEmbedNewYear,
} from "./FigmaEmbed";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

function App() {
  const appRef = useRef(null); // 取得 App 容器

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      // smoothWheel: true,
      wrapper: appRef.current, // 讓 Lenis 作用在 `.App`
      content: appRef.current, // 讓滾動內容也是 `.App`
      gestureOrientation: "vertical", // 垂直滾動
      smoothTouch: true, // 讓觸控裝置也有 Smooth Scroll
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="App" ref={appRef}>
      <header className="header">
        <p className="title">
          <div className="text-wrapper">
            <span className="special-title-lg">W</span>elcome
          </div>
          <div className="text-wrapper">
            t<span className="special-title-sl">o</span>
          </div>
          my
          <div className="text-wrapper">
            <span className="special-title-lg"> P</span>laygr
            <span className="special-title-sl">o</span>und
          </div>
        </p>
        <div className="arrow">
          <img src="/arrow.svg" alt="Arrow" />
        </div>
      </header>
      <div className="section">
        <div className="text-block">
          <div className="block-wrapper">
            <p className="section-title-year">2025</p>
            <p className="section-title">Chocolate for Valentine</p>
            <p className="section-content">
              I made a box of chocolates using basic prototyping on figma—but
              with a twist! 🍫💡
              <br />
              Instead of just gifting sweets, I designed an interactive
              experience, where every click is a little piece of love.
            </p>
          </div>
        </div>
        <FigmaEmbedValentine />
      </div>
      <div className="section">
        <div className="text-block">
          <div className="block-wrapper">
            <p className="section-title-year">2025</p>
            <p className="section-title">Happy Chinese New Year</p>
            <p className="section-content">
              Celebrate the Year of the Snake in a Modern Way! 🐍
              <br />
              Blending Chinese calligraphy with Eastern and Western design, this
              series reimagines festive greetings with playful homophones and
              cultural symbolism for the Year of the Snake.
            </p>
          </div>
        </div>
        <FigmaEmbedNewYear />
      </div>
      <div className="section" style={{ marginBottom: "0" }}>
        <div className="text-block">
          <div className="block-wrapper">
            <p className="section-title-year">2024</p>
            <p className="section-title">Christmas miracle </p>
            <p className="section-content">
              Experience the Joy of Digital Wishing! 🎄✨
              <br />
              Turn the magic of Christmas into an interactive experience! Watch
              as a pixel art Christmas tree lights up step by step, revealing a
              festive miracle with every wish made.
            </p>
          </div>
        </div>
        <FigmaEmbedChristmas />
      </div>
      {/* <div className="spacer"></div> */}
      <div className="section-lg-scroll">
        <img src="/me-1.png" className="me-pic" />
        <img src="/bg.png" className="bg-pic" />
        <img src="/deco.png" className="deco-pic" />
      </div>
      <div className="section-lg-scroll-m">
        <img src="/me-m.png" className="me-pic" />
        <img src="/bg-m.png" className="bg-pic" />
        <img src="/deco-m.png" className="deco-pic" />
      </div>
      <div className="section-lg">
        <img src="/workspace.png" className="room-pic" />
        <div className="text-pic">
          Where
          <span className="special-title-lg" style={{ color: "#fff" }}>
            Creativity
          </span>
          meets
          <span className="special-title-lg" style={{ color: "#fff" }}>
            Reality.
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
