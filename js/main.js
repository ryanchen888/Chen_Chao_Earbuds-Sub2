// pics-light boxes
document.addEventListener('DOMContentLoaded', function() {
    var lightboxTriggers = document.querySelectorAll('.lightbox-trigger');
    var lightbox = document.getElementById('lightbox');
    var closeLightbox = document.getElementById('closeLightbox');
    var lightboxContent = document.querySelector('.lightbox-content');

    lightboxTriggers.forEach(function(trigger) {
        trigger.addEventListener('click', function() {
            lightboxContent.src = trigger.src;
            lightbox.style.display = 'block';
        });
    });

    closeLightbox.addEventListener('click', function() {
        lightbox.style.display = 'none';
    });
});

// hot-spots

(() => {

    const model = document.querySelector("#model");
    const hotspots = document.querySelectorAll(".Hotspot");
    const infoBoxes = [
      { title: "Multi-function Control Button", 
        text:  "Multifunction button on Bluetooth earphones: Controls playback, calls, and voice assistants with ease.", 
        image: "images/01.jpg"
      },
      { title: "Intelligent Rotating Axis", 
        text:  "It can be manually rotated to suit each person's ear canal, catering for the different needs of each individual.", 
        image: "images/02.jpg"
      },
      { title: "Noise-canceling Earplugs", 
        text:  "Comfortable earplugs made of eco-friendly silicone, while different sizes are available for replacement.", 
        image: "images/03.jpg"
      },
      { title: "Charging Contacts", 
        text:  "VOCO's exclusive patented fast-charging technology allows the headset to be fully charged to 80% in less than 10 minutes.", 
        image: "images/04.jpg"
      }
    ]
  
    function modelLoaded() {
      console.log(hotspots);
      hotspots.forEach(hotspot => {
        hotspot.style.display = "block";
      });
    }
  
    function loadInfo() {
      infoBoxes.forEach((infoBox, index) => {
      let selected = document.querySelector(`#hotspot-${index+1}`);
      console.log(selected);
    
      
      let h2 = document.createElement("h2");
      h2.textContent = infoBox.title;
  
      let p = document.createElement("p");
      p.textContent = infoBox.text;
      // console.log(infoBox.title);
      // console.log(infoBox.text);
  
      let imageElement = document.createElement('img');
      imageElement.src = infoBox.image; 
      imageElement.alt = "Image"; 
      
      selected.appendChild(h2);
      selected.appendChild(p);
      selected.appendChild(imageElement);
  
    })
  }
  
    loadInfo();
  
    function showInfo() {
      let selected = document.querySelector(`#${this.slot}`);
      gsap.to(selected, 1, { autoAlpha: 1 });
    }
  
    function hideInfo() {
      let selected = document.querySelector(`#${this.slot}`);
      gsap.to(selected, 1, { autoAlpha: 0 });
    }
  
    model.addEventListener("load", modelLoaded);
  
    hotspots.forEach(function (hotspot) {
      hotspot.addEventListener("mouseover", showInfo);
      hotspot.addEventListener("mouseout", hideInfo);
    });
  })();