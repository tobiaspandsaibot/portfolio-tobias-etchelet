import React from 'react';
import './VRExperience.css';
import { FiArrowLeft } from 'react-icons/fi';

const VRExperience = ({ isActive, onExit }) => {
  if (!isActive) return null;

  const handleExit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (onExit) {
      onExit();
    }
  };

  return (
    <div className="vr-experience-container" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 1000 }}>
      <button
        className="exit-vr-button"
        onClick={handleExit}
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          zIndex: 1001,
          backgroundColor: '#000',
          color: '#fff',
          border: 'none',
          padding: '10px',
          borderRadius: '8px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}
      >
        <FiArrowLeft />
        <span>Volver al Portfolio</span>
      </button>

      <div className="vr-content" style={{ width: '100%', height: '100%' }}>
        <a-scene
          embedded
          background="color: #000000"
          cursor="rayOrigin: mouse; fuse: false"
          raycaster="objects: .raycastable"
        >
          <a-assets>
            <img id="kazetachinu" src="/assets/Screenshot_1.png" crossorigin="anonymous" />
            <img id="kazetachinuPoster" src="/assets/developer.jpeg" crossorigin="anonymous" />
            <img id="ponyo" src="/assets/portfolioinprocess.png" crossorigin="anonymous" />
            <img id="ponyoPoster" src="/assets/OIG-20.jpeg" crossorigin="anonymous" />
            <img id="karigurashi" src="/assets/tobi-traje.png" crossorigin="anonymous" />
            <img id="karigurashiPoster" src="/assets/tobias.jpg" crossorigin="anonymous" />
            <img id="stars" src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/sechelt.jpg" crossorigin="anonymous" />

            <a-mixin id="frame" geometry="primitive: plane; width: 0.5783552; height: 0.8192" material="color: white; shader: flat" animation__scale="property: scale; to: 1.2 1.2 1.2; dur: 200; startEvents: mouseenter" animation__scale_reverse="property: scale; to: 1 1 1; dur: 200; startEvents: mouseleave" />
            <a-mixin id="poster" geometry="primitive: plane; width: 0.544768; height: 0.786432" material="color: white; shader: flat" position="0 0 0.005" />
            <a-mixin id="movieImage" geometry="primitive: plane; width: 1.5; height: 0.81" material="src: #ponyo; shader: flat; transparent: true;" position="0 0.495 0.002" fix-wrap />
          </a-assets>

          <a-sky src="#stars" rotation="0 -90 0"></a-sky>

          <a-entity id="sceneHeader" position="0 2 -3">
            <a-text
              value="Web Developer"
              align="center"
              color="#FFFFFF"
              width="3"
              position="0 0 0"
              rotation="0 0 0"
              shader="msdf"
              font="https://cdn.aframe.io/examples/ui/Viga-Regular.json"
            />
          </a-entity>

          <a-entity id="seniorWebDev" position="3 2 0" rotation="0 -90 0">
            <a-text
              value="Web Designer"
              align="center"
              color="#FFFFFF"
              width="3"
              position="0 0 0"
              shader="msdf"
              font="https://cdn.aframe.io/examples/ui/Viga-Regular.json"
            />
          </a-entity>

          <a-entity id="uiUxDesigner" position="0 2 3" rotation="0 180 0">
            <a-text
              value="UI/UX Designer"
              align="center"
              color="#FFFFFF"
              width="3"
              position="0 0 0"
              shader="msdf"
              font="https://cdn.aframe.io/examples/ui/Viga-Regular.json"
            />
          </a-entity>

          <a-entity id="graphicDesigner" position="-3 2 0" rotation="0 90 0">
            <a-text
              value="Graphic Designer"
              align="center"
              color="#FFFFFF"
              width="3"
              position="0 0 0"
              shader="msdf"
              font="https://cdn.aframe.io/examples/ui/Viga-Regular.json"
            />
          </a-entity>

          <a-entity id="background" position="0 0 0" geometry="primitive: sphere; radius: 2.0" material="color: red; side: back; shader: flat" scale="0.001 0.001 0.001" visible="false" class="raycastable" />

          <a-entity position="0 1.7 0" camera look-controls="magicWindowTrackingEnabled: true; touchEnabled: true; mouseEnabled: true">
            <a-entity id="fadeBackground" geometry="primitive: sphere; radius: 2.5" material="color: #999999; side: back; shader: flat; blending: subtractive;" visible="false" />
          </a-entity>

          <a-entity id="leftHand" laser-controls="hand: left" raycaster="objects: .raycastable" />
          <a-entity id="rightHand" laser-controls="hand: right" raycaster="objects: .raycastable" line="color: #118A7E" />
        </a-scene>
      </div>
    </div>
  );
};

export default VRExperience;
