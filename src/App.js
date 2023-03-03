import React from 'react';
import { useState } from "react";
import ReactFullpage from '@fullpage/react-fullpage';
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import { WithContext as ReactTags } from 'react-tag-input';
import FolderTree, { testData } from 'react-folder-tree';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import "react-image-lightbox/style.css";
import './App.css';
import './flicker.scss';
import { images as IMAGES } from "./images";


function Copyright() {
  return (
    <div>
      <div className="main_text">
        <ul className="main">
          <p className="main">© 2023 Peter Osthus</p>
        </ul>
      </div>
    </div>
  );
}


function MainPage() {
  return (
    <div>
      <Copyright />
      <div>
        <ul>
          <li>
            <a id="flicker-github" data-heading="git" href="https://github.com/osth0006" target="blank">github</a>
          </li>
          <li>
            <a id="flicker-linkedin" data-heading="ink" href="https://www.linkedin.com/in/peter-o-686978156/" target="blank">linkedin</a>
          </li>
          <li>
            <a id="flicker-insta" data-heading="insta" href="https://www.instagram.com/osth0006/" target="blank">instagram</a>
          </li>
        </ul>
      </div>
    </div>
  );
}


/*
function SecondaryPage() {
  return (
    <div>
      <Copyright />
      <div class="box">
        <form name="search" action="/">
          <input type="text" class="input" name="search" placeholder="" onmouseout="this.value = ''; this.blur();" />
        </form>
        <i><FontAwesomeIcon icon={faSearch} /></i>
      </div>
    </div>
  );
}
*/

/*
const images = IMAGES.map((image) => ({
  ...image,
  customOverlay: (
    <div className="custom-overlay__caption">
      <div>{image.collection}</div>
      <div>{image.caption}</div>
      {image.tags &&
        image.tags.map((t, index) => (
          <div key={index} className="custom-overlay__tag">
            {t.value}
          </div>
        ))}
    </div>
  ),
}));
*/

/*
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
*/

// add fake url to data for testing purpose
/*
const addUrl = node => {
  const fakeUrl = `root/${node.name}`;
if (node.children) {
  node.url = fakeUrl;
  node.children = node.children.map(c => addUrl(c));
} else {
  node.url = fakeUrl;
}

return node;
};
*/

// simulate a download function
//const fakeDownload = nodeData => console.log('downloading...', nodeData);

// custom event handler for node name click
/*
const onNameClick = ({ defaultOnClick, nodeData }) => {
  const {
    // internal data
    path, name, checked, isOpen,
    // custom data
    url, ...whateverRest
  } = nodeData;

  fakeDownload({ name, url });
};
*/

/*
const CustomFolderTree = () => (
  <div>
    <FolderTree
        data={ addUrl(testData) }
        onNameClick={ onNameClick }
        showCheckbox={ false }
      />
  </div>
);
*/
const Fullpage = () => (

  <ReactFullpage
    //pluginWrapper = {pluginWrapper}
    //fullpage options
    //licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed={1000} /* Options here */
    scrollHorizontally={true}  /* Because we are using the extension */
    //scrollHorizontallyKey = {'YOUR KEY HERE'}

    render={({ state }) => {
      /*return (
        <ReactFullpage.Wrapper>
          <div className="section" id="main_section">
            <MainPage />
          </div>
          <div className="section" id="secondary_section">
            <SecondaryPage />
          </div>
          <div className="section">
            <PhotoGrid />
          </div>
          <div className="section">
            <CustomFolderTree />
          </div>
        </ReactFullpage.Wrapper>
      );*/
      return (
        <ReactFullpage.Wrapper>
          <div className="section" id="main_section">
            <MainPage />
          </div>
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
