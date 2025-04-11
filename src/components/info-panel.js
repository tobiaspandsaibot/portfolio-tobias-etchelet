/* global AFRAME */
AFRAME.registerComponent('info-panel', {
  init: function () {
    var buttonEls = document.querySelectorAll('.menu-button');
    var fadeBackgroundEl = this.fadeBackgroundEl = document.querySelector('#fadeBackground');

    this.movieTitleEl = document.querySelector('#movieTitle');
    this.movieDescriptionEl = document.querySelector('#movieDescription');

    // Definimos la información para cada botón, incluyendo los nuevos.
    this.movieInfo = {
      karigurashiButton: {
        title: 'Who am I?',
        imgEl: document.querySelector('#karigurashiMovieImage'),
description: 'Hello! I am Tobias. Tobi. ' +
'With over 12 years of experience, specializing in Graphic Design, Web Design, UX/UI Design, and Front-End programming (HTML, CSS, and JavaScript). ' +
'I have extensive expertise in brand identity creation, developing cohesive visual strategies that resonate with target audiences.'
      },
      kazetachinuButton: {
        title: 'Developer',
        imgEl: document.querySelector('#kazetachinuMovieImage'),
        description: `I work with UX/UI design principles; technical soft skills to create, code, design unique digital experiences for whatever target or niche.
As a skilled webmaster, I manage hosting and domains efficiently, creating seamless and high-performing digital ecosystems.
I craft user-friendly 360-degree websites and leverage tools like Google Ads, Meta Ads, and Google Analytics to optimize performance.`
      },
      ponyoButton: {
        title: 'Portfolio',
        imgEl: document.querySelector('#ponyoMovieImage'),
  description: 'Proficient in Adobe Creative Suite, I create animations, video productions (After Effects, Premiere), and 3D objects. I use more than 40 different Ai software programs.' +
               ' I love to create impactful web/digital experiences that connect both user needs and business goals. My new portfolio is in process, but will be available soon.'
},
      ponyoButton2: {
        title: 'Portfolio 2',
        imgEl: document.querySelector('#ponyoMovieImage'),
        description: 'Portfolio version 2 description.'
      },
      ponyoButton3: {
        title: 'Portfolio 3',
        imgEl: document.querySelector('#ponyoMovieImage'),
        description: 'Portfolio version 3 description.'
      },
      ponyoButton4: {
        title: 'Portfolio 4',
        imgEl: document.querySelector('#ponyoMovieImage'),
        description: 'Portfolio version 4 description.'
      }
    };

    this.onMenuButtonClick = this.onMenuButtonClick.bind(this);
    this.onBackgroundClick = this.onBackgroundClick.bind(this);
    this.backgroundEl = document.querySelector('#background');

    // Asignamos los listeners a cada botón
    for (var i = 0; i < buttonEls.length; ++i) {
      buttonEls[i].addEventListener('click', this.onMenuButtonClick);
    }
    this.backgroundEl.addEventListener('click', this.onBackgroundClick);

    // Ajustes de render y depthTest
    this.el.object3D.renderOrder = 2;
    this.el.object3D.depthTest = false;
    fadeBackgroundEl.object3D.renderOrder = 1;
    fadeBackgroundEl.getObject3D('mesh').material.depthTest = false;
  },

  onMenuButtonClick: function (evt) {
    var movieInfo = this.movieInfo[evt.currentTarget.id];
    if (!movieInfo) { return; }

    // Hacemos visibles el panel y el fondo
    this.backgroundEl.object3D.scale.set(1, 1, 1);
    this.el.object3D.scale.set(1, 1, 1);
    if (AFRAME.utils.device.isMobile()) {
      this.el.object3D.scale.set(1.4, 1.4, 1.4);
    }
    this.el.object3D.visible = true;
    this.fadeBackgroundEl.object3D.visible = true;

    // Ocultamos la imagen anterior (si existe) y mostramos la imagen del botón actual
    if (this.movieImageEl) {
      this.movieImageEl.object3D.visible = false;
    }
    this.movieImageEl = movieInfo.imgEl;
    this.movieImageEl.object3D.visible = true;

    // Actualizamos el texto
    this.movieTitleEl.setAttribute('text', 'value', movieInfo.title);
    this.movieDescriptionEl.setAttribute('text', 'value', movieInfo.description);
  },

  onBackgroundClick: function (evt) {
    // Ocultamos el panel y el fondo
    this.backgroundEl.object3D.scale.set(0.001, 0.001, 0.001);
    this.el.object3D.scale.set(0.001, 0.001, 0.001);
    this.el.object3D.visible = false;
    this.fadeBackgroundEl.object3D.visible = false;
  }
});


AFRAME.registerComponent('fix-wrap', {
  init: function () {
    this.el.addEventListener('materialtextureloaded', function (evt) {
      var texture = evt.detail.texture;
      texture.wrapS = THREE.ClampToEdgeWrapping;
      texture.wrapT = THREE.ClampToEdgeWrapping;
      texture.needsUpdate = true;
    });
  }
});


// Initialize the start button functionality to position the camera in front of the menu
document.addEventListener('DOMContentLoaded', function () {
  var startEl = document.querySelector('#startButtonText');
  var menuEl = document.querySelector('#menu');
  var cameraEl = document.querySelector('[camera]');
  var sceneEl = document.querySelector('a-scene');

  if (!startEl || !menuEl || !cameraEl || !sceneEl) {
    console.error('One or more required elements are missing.');
    return;
  }

  // Wait until the whole scene is loaded.
  sceneEl.addEventListener('loaded', function () {
    startEl.addEventListener('click', function () {
      // Get the menu's world position.
      var menuWorldPos = new THREE.Vector3();
      menuEl.object3D.getWorldPosition(menuWorldPos);

      // Get the menu's forward direction.
      var forwardDir = new THREE.Vector3();
      menuEl.object3D.getWorldDirection(forwardDir);
      // Multiply by a scalar to move 2 units ahead (adjust as needed)
      forwardDir.multiplyScalar(-2);

      // Calculate the target position.
      var targetPos = menuWorldPos.clone().add(forwardDir);

      // Set the camera's position to the target position.
      cameraEl.setAttribute('position', targetPos);

      // Orient the camera so it looks at the menu.
      cameraEl.object3D.lookAt(menuWorldPos);

      console.log('Camera moved to:', targetPos);
    });
  });
});


function showContent(contentId) {
  // Hide all content
  document.querySelectorAll('a-text[id^="content"]').forEach(el => el.setAttribute('visible', 'false'));
  // Show the selected content
  document.getElementById(contentId).setAttribute('visible', 'true');
}