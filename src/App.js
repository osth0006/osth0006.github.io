import React from 'react';
import { useState } from "react";
import ReactFullpage from '@fullpage/react-fullpage';
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import './App.css';
import { images } from "./images";


function MainPage() {
  return (
    <div>
      <div className="main_text">
        <ul className="main">
          <p className="main">© 2022 Peter Osthus</p>
          {/*<li className="main"><a href="https://github.com/osth0006" target="blank">github</a></li>
          <li className="main"><a href="https://www.linkedin.com/in/peter-o-686978156/" target="blank">linkedin</a></li>*/}
        </ul>
      </div>
      <div>
        <ul>
          <li id="uptown"><a href="https://github.com/osth0006" target="blank">github</a></li>
          <li id="downtown"><a href="https://www.linkedin.com/in/peter-o-686978156/" target="blank">linkedin</a></li>
        </ul>
      </div>
    </div>
    
  );
}


function PhotoGrid() {

  const [index, setIndex] = useState(-1);
  const currentImage = images[index];
  const nextIndex = (index + 1) % images.length;
  const nextImage = images[nextIndex] || currentImage;
  const prevIndex = (index + images.length - 1) % images.length;
  const prevImage = images[prevIndex] || currentImage;

  const handleClick = (index) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);
  
  return (    
      <div>
        <Gallery
          images={images}
          onClick={handleClick}
          enableImageSelection={false}
        />
        {!!currentImage && (
          <Lightbox
            mainSrc={currentImage.original}
            imageTitle={currentImage.caption}
            mainSrcThumbnail={currentImage.src}
            nextSrc={nextImage.original}
            nextSrcThumbnail={nextImage.src}
            prevSrc={prevImage.original}
            prevSrcThumbnail={prevImage.src}
            onCloseRequest={handleClose}
            onMovePrevRequest={handleMovePrev}
            onMoveNextRequest={handleMoveNext}
          />
        )}
      </div>
  );
}


const Fullpage = () => (
  
  <ReactFullpage
    //pluginWrapper = {pluginWrapper}
    //fullpage options
    //licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {1000} /* Options here */
    scrollHorizontally = {true}  /* Because we are using the extension */
    //scrollHorizontallyKey = {'YOUR KEY HERE'}
    
    render={({ state }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section" id="main_section">
            <MainPage />
          </div>
          {/*<div className="section">
            <PhotoGrid />
          </div>*/}
        </ReactFullpage.Wrapper>
        
      );
    }}
  />
);


function App() {
  return (
    <Fullpage />
  );
}

export default App;
