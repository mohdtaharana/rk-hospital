// js for email sending
  // Handle form submission
  document.getElementById("appointmentForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form input values
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var department = document.getElementById("department").value;
    var date = document.getElementById("date").value;
    var message = document.getElementById("message").value;

    // Set up the email template parameters
    var templateParams = {
      name: name,
      phone: phone,
      email: email,
      department: department,
      date: date,
      message: message
    };

    // Send the email using EmailJS
    emailjs.send('service_cohchpl', 'template_24er3j7', templateParams)
      .then(function(response) {
        // Show a success message or handle response
        alert('Appointment booked successfully!');
        console.log('Success:', response);

        // Reset the form fields after success
        document.getElementById("appointmentForm").reset(); // This will clear all fields
      }, function(error) {
        // Show an error message or handle error
        alert('Failed to send the appointment request. Please try again.');
        console.log('Error:', error);
      });
});

// js for hero section
const hamburger = document.querySelector('.hamburger');
const fullscreenNav = document.querySelector('.fullscreen-nav');
const logo = document.querySelector('.logo'); // Select the logo element
const navLinks = document.querySelectorAll('.fullscreen-nav a'); // Get all navbar links

// Toggle navbar on hamburger click
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  fullscreenNav.classList.toggle('active');
  // Toggle the opacity of the logo
  if (logo) {
    logo.style.opacity = logo.style.opacity === '0' ? '1' : '0';
  }
});





// GSAP timeline animations (for hero section)
const herotl = gsap.timeline();

// Step 1: Animate the entire hero section with border-radius
herotl.from(".content,.overlayy", {
  opacity: 0, // Start with 0 opacity
  scale: 0.7, // Start with smaller scale
  borderRadius: "0%", // Start with rounded corners
  duration: 2, // Duration of the animation
  ease: "power3.out", // Smooth easing
});

// Step 3: Animate hero-left content (coming from the left)
herotl.from(".leftcon > *:not(.images)", {
  x: -50, // Slide from the left
  opacity: 0, // Start with 0 opacity
  duration: 1, // Duration for each element
  ease: "power3.out", // Smooth easing
  stagger: 0.1, // Delay between each element
}, "-=1"); // Start slightly earlier for smooth flow

// Step 4: Animate images inside the .images container
herotl.from(".images img", {
  x: -50, // Slide from the left
  opacity: 0, // Start with 0 opacity
  duration: 0.8, // Duration for each image
  ease: "power3.out", // Smooth easing
  stagger: 0.05, // Delay between each image
}, "-=1");

// Step 5: Animate the paragraph inside con-down after images
herotl.from(".con-down p", {
  x: -50, // Slide up into view
  opacity: 0, // Start with 0 opacity
  duration: 1, // Duration for the animation
  ease: "power3.out", // Smooth easing
}, "-=1");



// ===============================================================================================================================
// ===============================================================================================================================
// ===============================================================================================================================

// preabout

// ===============================================================================================================================
// ===============================================================================================================================
// ===============================================================================================================================



document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Common ScrollTrigger for all animations
  const triggerConfig = {
    trigger: ".preabout",
    start: "top 80%",
    toggleActions: "play none none none",
  };

  // Animate item1 (from left with increasing width)
  gsap.from(
    ".item1",
  {
    opacity:0,
      x: "-100%",
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: triggerConfig,
    }
  );

  // Animate item2 (height increases)
  gsap.from(
    ".item2",
    { height: "0" },
    {
      height: "100%", // Original height
      duration: 1.2,
    opacity:0,
      ease: "power2.out",
      scrollTrigger: triggerConfig,
    }
  );

  // Animate item3 (height increases)
  gsap.from(
    ".item3",
    {
      y:200,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: triggerConfig,
    }
  );

  // Animate item4 (from right with increasing width)
  gsap.from(
    ".item4",
   
    {
      x:"100",
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: triggerConfig,
    }
  );

  // Animate item5 (from right with increasing width)
  gsap.from(
    ".item5",
    {
      y:200,
      duration: 1.2,
      ease: "power2.out",
      delay:0.1,
      scrollTrigger: triggerConfig,
    }
  );
 });

// ===============================================================================================================================
// ===============================================================================================================================
// ===============================================================================================================================

// about us

// ===============================================================================================================================
// ===============================================================================================================================
// ===============================================================================================================================




    const contentData = [
      {
        title: "Same Day Results",
        text: "Get your test results on the same day, ensuring faster diagnosis and treatment. Experience prompt and reliable services that prioritize your health and peace of mind.",
      },
      {
        title: "Expert Team",
        text: "Our team consists of highly trained professionals dedicated to providing the best care for our patients with state-of-the-art technology.",
      },
      {
        title: "Personalized Care",
        text: "We prioritize understanding our patients' needs to deliver personalized care and ensure their satisfaction.",
      },
      {
        title: "Advanced Facilities",
        text: "Our facilities are equipped with the latest medical equipment, ensuring accurate diagnoses and effective treatments.",
      },
    ];

    
    function moveWheel(amount) {
      let progress = tl2.progress();
      tl2.progress(wrapProgress(snap(tl2.progress() + amount)));
      let next = tracker.item;
      tl2.progress(progress);
    
      // Update the active image
      document.querySelector('.item.active').classList.remove('active');
      items[next].classList.add('active');
    
      // Update content based on the active item
      const activeContent = contentData[next];
      document.querySelector('.right-content h1').textContent = activeContent.title;
      document.querySelector('.right-content p').textContent = activeContent.text;
    
      // Animate the content update (optional)
      gsap.fromTo(
        ".right-content",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 }
      );
    
      gsap.to(tl2, {
        progress: snap(tl2.progress() + amount),
        modifiers: {
          progress: wrapProgress,
        },
      });
    }

    function moveWheel(amount) {
      let progress = tl2.progress();
      tl2.progress(wrapProgress(snap(tl2.progress() + amount)));
      let next = tracker.item;
      tl2.progress(progress);
    
      // Update the active image
      document.querySelector(".item.active").classList.remove("active");
      items[next].classList.add("active");
    
      // Update content based on the active item
      const activeContent = contentData[next];
    
      // Animate the text content (fade in separately)
      const rightContent = document.querySelector(".right-content");
      const heading = rightContent.querySelector("h1");
      const paragraph = rightContent.querySelector("p");
      const buttons = rightContent.querySelectorAll("button");
    
      // Animate heading, paragraph, and buttons out
      gsap.to([heading, paragraph, ...buttons], {
        opacity: 0,
        y: 10,
        duration: 0.3,
        onComplete: () => {
          heading.textContent = activeContent.title;
          paragraph.textContent = activeContent.text;
    
          // Animate each element back in
          gsap.fromTo(
            heading,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, delay: 0.1 }
          );
          gsap.fromTo(
            paragraph,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, delay: 0.2 }
          );
          gsap.fromTo(
            buttons,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, delay: 0.3, stagger: 0.1 }
          );
        },
      });
      // Animate the image coming into view
      gsap.fromTo(
        items[next],
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.6, delay: 0.1 }
      );
    
      // Update the timeline progress for the rotation
      gsap.to(tl2, {
        progress: snap(tl2.progress() + amount),
        modifiers: {
          progress: wrapProgress,
        },
      });
    }

    // impatient,outpatient,visitors

    function redirectToPage(pageType) {
      switch (pageType) {
        case 'impatient':
          window.location.href = "impatient.html"; // Replace with the actual URL for this page
          break;
        case 'outpatient':
          window.location.href = "outpatient.html"; // Replace with the actual URL for this page
          break;
        case 'visitors':
          window.location.href = "visitors.html"; // Replace with the actual URL for this page
          break;
        default:
          console.log('Unknown page type');
      }
    }
    
// services


  // Create a GSAP timeline
  const tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".services",
      start: "top 80%", // Animation starts when services section comes into view
    },
  });

  // Heading animation
  tl4.from(".services h1", {
    x: -200, // Start 200px to the left
    opacity: 0, // Fade in
    duration: 1, // Animation duration
    ease: "power2.out", // Smooth ease
  }, 0); // Start at the same time (0 seconds into the timeline)

  // Images animation
  tl4.fromTo(
    ".services img",
    {
      y: 200, // Start 200px below
      rotation: 0, // Start with no rotation
    },
    {
      y: 0, // Settle in original position
      rotation: (index) => [0, -1, 3, 7, 11, 15, 19][index], // Settle to specified rotation
      duration: 1.5, // Animation duration
      ease: "power2.out", // Smooth ease
    },
    0 // Start at the same time (0 seconds into the timeline)
  );
  
    
  // timeline for stay Animation

   //  parallax animation
   gsap.registerPlugin(ScrollTrigger);
   const stay = gsap.timeline({
    scrollTrigger: {
      trigger: ".stay",
      start: "top 80%", // Animation starts when .stay enters the viewport
      end: "bottom 20%",
      // scrub: true, // Smooth scrolling effect
    },
  });

  // Animate elements
  stay.to(".stay", { opacity: 1, duration: 0.5 }); // Fade in the container
  stay.to(".hd_stay", { y: 30, opacity: 1, duration: 1 }, "<"); // Headline comes first
  stay.to(".bg_stay", { y: 30, opacity: 1, duration: 1.2 }, "-=0.5"); // Background heading
  stay.to(
    ".p_stay",
    { y: 0, opacity: 1, duration: 1.5, ease: "power3.out" },
    "-=0.8"
  ); // Paragraph with span highlights






 
  // for services
  const track = document.querySelector('.carousel-track');
    const itemss = Array.from(track.children);
    const nextButton = document.querySelector('.next-btn');
    const prevButton = document.querySelector('.prev-btn');

       let currentIndex = 1;

function updateCarousel() {
  itemss.forEach((item, index) => {
    if (index === currentIndex) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  // Update the position of the carousel
  const visibleIndex = currentIndex === 1 ? 0 : currentIndex - 1;
  const offset = -visibleIndex * (itemss[0].offsetWidth + 10); // Adjust for item margin
  track.style.transform = `translateX(${offset}px)`;




// Update the active service name in the <p> element
  const updateActiveServiceName = (elementClass) => {
  const activeServiceElement = document.querySelector(elementClass);
  const activeSlide = itemss[currentIndex];
  const activeServiceName = activeSlide.getAttribute('data-service') || 'Unknown Service';

  // Change the inner HTML of the <p> element
  activeServiceElement.innerHTML = activeServiceName;
};

// Call the function for both elements
updateActiveServiceName('.active_service2');
updateActiveServiceName('.active_service');
}






nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % itemss.length;
  updateCarousel();
});

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + itemss.length) % itemss.length;
  updateCarousel();
});

updateCarousel();


    // Get the elements
    const servicesSection = document.querySelector('.services-section');
    const postServices = document.querySelector('.post_services');
    const learnMoreButton = document.getElementById('learnMore');
    const backButton = document.getElementById('back');

    learnMoreButton.addEventListener('click', () => {
      servicesSection.classList.add('hidden');
      postServices.classList.remove('hidden');
      postServices.classList.add('active');
    });

    backButton.addEventListener('click', () => {
      postServices.classList.remove('active');
      postServices.classList.add('hidden');
      servicesSection.classList.remove('hidden');
    });

    learnMoreButton.addEventListener('click', () => {
  // Get the current active carousel item
  const activeItem = document.querySelector('.carousel-item.active');
  
  // Extract the service name from the data-service attribute of the active carousel item
  const activeService = activeItem ? activeItem.getAttribute('data-service') : '';

  // Content mapping for each service
  const contentMapping = {
    // surgery
    surgery: {
      conditions: [
        "All types of hernia surgery", "Hydrocele surgery", "Appendix surgery", "Piles/Fissures/Fistula surgery (Open laser/Stapler method)",
        "Gallbladder surgery", "Diabetic foot surgery", "Surgery of swelling/Abscess in kidney", "Surgery of swelling or abscess on any part of the body",
        "All types of burn treatment"
      ],
      diagnostic: ["Blood/Urine reports", "Biopsy", "UPPER GI SCOPY", "LOWER GI SCOPY", "X-RAY", "Ultrasound"],
      treatment: ['Medication/Surgeries', 'Post-operative care', 'Physiotherapy', 'Rehabilitation'],
    },

    // orthopedic
    orthopedic: {
      conditions: [
        "Joints/Bone/Muscle pain", "Joint effusion (Water/Pus/Blood collection in joint space)", "Chronic backache", "Arthritis"
      ],
      diagnostic: ["Synovial fluids examination", "Blood/Urine reports", "X-ray", "Ultrasound"],
      treatment: ["Medication", "Physiotherapy", "Rehabilitation", "Synovial fluid tapping"],
    },

    // ENT
    ENT: {
      conditions: [
        "Chronic rhinitis/cough/throat pain", "Chronic oral ulceration", "Sinusitis", "Ear pain/Ear discharge"
      ],
      diagnostic: ["Otoscopy", "Laryngoscopy", "Nasal endoscopy", "Nasal swab/Throat swab"],
      treatment: ["Medication", "Physiotherapy (speech/facial palsy/vestibular)"],
    },

    // Pediatric
    Pediatric: {
      conditions: [
        "All types of fever (Dengue/Malaria/Typhoid/Pyrexia of unknown origin)", "Pneumonia/Cough", "Loose motion/Vomiting", "Common Cold and Allergies"
      ],
      diagnostic: ["Blood/Urine reports", "X-ray", "Ultrasound"],
      treatment: ["Medication", "Nebulizer"],
    },

    // Medicine
    Medicine: {
      conditions: [
        "Medication", "Nebulizer", "Blood Pressure & Sugar Levels", "Heart-Related Conditions", "Respiratory Issues", "Blood Disorders",
        "Emergency Situations: Care for snakebites and poisoning", "Urinary System Conditions", "Abdominal & Digestive Issues", "Infectious Diseases"
      ],
      diagnostic: ["ECG", "Blood/Urine reports", "Body fluids reports", "Sputum reports", "2D ECHO", "X-RAY/Ultrasound", "Blood/Urine reports", "Biopsy", "Allergy Test"],
      treatment: ["Medication", "Intervention procedure (Ascitic tap/Pleural tap/Lumbar puncture/Spinal fluid tap)", "Physiotherapy", "Nebulizer"],
    },
  };

  // Get the corresponding content based on the active service
  const content = contentMapping[activeService];

  if (content) {
    // Populate the content in the post_services section
    const conditionsList = postServices.querySelector('.ser1 ul');
    const diagnosticList = postServices.querySelector('.ser2 ul');
    const treatmentList = postServices.querySelector('.ser3 ul');

    // Clear previous content
    conditionsList.innerHTML = '';
    diagnosticList.innerHTML = '';
    treatmentList.innerHTML = '';

    // Add new content
    content.conditions.forEach((condition) => {
  const li = document.createElement('li');
  li.innerHTML = `<i class="fas fa-check"></i> ${condition}`;
  conditionsList.appendChild(li);
});

content.diagnostic.forEach((procedure) => {
  const li = document.createElement('li');
  li.innerHTML = `<i class="fas fa-check"></i> ${procedure}`;
  diagnosticList.appendChild(li);
});

content.treatment.forEach((option) => {
  const li = document.createElement('li');
  li.innerHTML = `<i class="fas fa-check"></i> ${option}`;
  treatmentList.appendChild(li);
});

  }

  // Switch to the post_services section
  servicesSection.classList.add('hidden');
  postServices.classList.remove('hidden');
});





// gsap Animation

  // Ensure GSAP is included
  gsap.registerPlugin(ScrollTrigger);

  // Animate the carousel when it enters the viewport
  // Animate the carousel when it enters the viewport
  gsap.from(".carousel-track-container", {
    x: 1000, // Start from off-screen to the right
    opacity: 0,
    duration: 3,
    ease: "elastic.out(1,0.3)",
    scrollTrigger: {
      trigger: ".services-section", // Trigger animation when the section enters the viewport
      start: "top center", // Animation starts when the top of the section is in the center of the viewport
      end: "bottom center",
      // scrub: true, // Scrub animation as you scroll
    },
  });

  document.getElementById('learnMore').addEventListener('click', function() {
    // Animating the "post_services" div to slide into view
    gsap.fromTo('.post_services', 
      {
        opacity: 0,
        y: 100
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
      });

   
  });
  gsap.from(".active_service",{
    y:50,
    opacity:0
  })

gsap.registerPlugin(ScrollTrigger);

// MatchMedia for responsive animations
const mm = gsap.matchMedia();

// Desktop animations
// mm.add("(min-width: 481px)", () => {
//  // Register GSAP plugins
// gsap.registerPlugin(ScrollTrigger);

// // Timeline for animations
// const tl1 = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".about",
//     start: "top 60%", // Trigger when the top of .about reaches the top of the viewport
//     end: "bottom 0%", // Animation lasts for the height of the section
//     // scrub: true, // Smoothly animates with scroll
//     // pin: true, // Pins the .about section
//     // markers: true // Debug markers (optional)
//   }
// });

// // Add animations to the timeline
// tl1
//   .from(".about-hd", {
//     opacity: 0,
//     x: -300, // Slide in from left
//     duration: 1,
//     ease: "power3.out"
//   })
  



//   .from(".images-abt", {
//     x: 550, // Slide in from the right
//     opacity: 0,
//     duration: 1,
//     // delay:1,
//     ease: "power3.out"
//   }, "-=1"); // Overlap with the second animation

//   tl1.to(".about", {
//     // overflow: "hidden", // Apply overflow:hidden
//     duration: 0 // Instantly set the property
//   })

// tl1 .from(".circle-abt", {
//         y: 200, // Slide in from the bottom
//         opacity:0,
//         duration: 1.5,
//         ease: "power3.out"
//       }, "-=1"); // Overlap with the previous animation
    
//       tl1.to(".images-abt", {
       
//         opacity:0,
//         delay:1,
//         // duration:1,
//       }, "-=1"); // Overlap with the second animation
//       tl1
//       .to(".about-hd", {
//         // y: -200, // Move up
//         opacity: 0, // Fade out
//         ease: "power3.out",
//         duration: 1 ,// Animation duration
//         delay:1

//       }, "-=1") // Start together
     
      
//       tl1.to(".circle-abt", {
//         x: -650, // Slide in from the bottom  
//         y:0,
//         duration: 1.5,
//         scale:4,
//         ease: "power3.out"
//       }, "-=1"); // Overlap with the previous animation

//      tl1.to(".container ",{
//      opacity:1,
//      x:50,
//      },"-=1")
//      tl1.to(".item",{
//       scale:1,
//       },"-=1")
//      tl1.to(".abt-btns",{
//       opacity:1,
//       },"-=1")
//       tl1.to(".right-content",{
//         opacity:1,
//         x:-50,
//          ease: "power3.out",
//          duration:1,
//         },"-=1")
//         tl1.to(".scroll-down2",{
//           opacity:1,
//           },"-=1")
     
//       gsap.registerPlugin(MotionPathPlugin);

//     const circlePath = MotionPathPlugin.convertToPath("#holder", false)[0];
//     circlePath.id = "circlePath";
//     document.querySelector("svg").prepend(circlePath);
    
//     let items = gsap.utils.toArray(".item"),
//       numItems = items.length,
//       itemStep = 1 / numItems,
//       wrapProgress = gsap.utils.wrap(0, 1),
//       snap = gsap.utils.snap(itemStep),
//       wrapTracker = gsap.utils.wrap(0, numItems),
//       tracker = { item: 0 };
    
//     gsap.set(items, { motionPath: {
//         path: circlePath,
//         align: circlePath,
//         alignOrigin: [0.5, 0.5],
//         end: i => i / items.length
//       }, scale: 0.9 
//     });
    
//     const tl2 = gsap.timeline({ paused:true, reversed: true });
    
//     tl2.to('.wrapper', {
//       rotation: 360, 
//       transformOrigin: 'center', 
//       duration: 1, 
//       ease: 'none'
//     });
    
//     tl2.to(items, {
//       rotation: "-=360", 
//       transformOrigin: 'center', 
//       duration: 1, 
//       ease: 'none',
//     }, 0);
    
//     tl2.to(tracker, {
//       item: numItems,
//       duration: 1, 
//       ease: 'none',
//       modifiers: {
//         item(value) {
//           return wrapTracker(numItems - Math.round(value))
//         }
//       }
//     }, 0);
    
//     items.forEach(function (el, i) {
    
//       el.addEventListener("click", function () {
//         var current = tracker.item,
//           activeItem = i;
    
//         if (i === current) {
//           return;
//         }
    
//         //set active item to the item that was clicked and remove active class from all items
//         document.querySelector('.item.active').classList.remove('active');
//         items[activeItem].classList.add('active');
    
//         var diff = current - i;
    
//         if (Math.abs(diff) < numItems / 2) {
//           moveWheel(diff * itemStep);
//         } else {
//           var amt = numItems - Math.abs(diff);
    
//           if (current > i) {
//             moveWheel(amt * -itemStep);
//           } else {
//             moveWheel(amt * itemStep);
//           }
//         }
//       });
//     });
    
//     document.getElementById('next').addEventListener("click", function () {
//       return moveWheel(-itemStep);
//     });
    
//     document.getElementById('prev').addEventListener("click", function () {
//       return moveWheel(itemStep);
//     });
    
//     function moveWheel(amount, i, index) {
      
//       let progress = tl2.progress();
//       tl2.progress(wrapProgress(snap(tl2.progress() + amount)))
//       let next = tracker.item;
//       tl2.progress(progress);
    
//       document.querySelector('.item.active').classList.remove('active');
//       items[next].classList.add('active');  
    
//       gsap.to(tl2, {
//         progress: snap(tl2.progress() + amount),
//         modifiers: {
//           progress: wrapProgress
//         }
//       });
//     }

     
//     function moveWheel(amount) {
//       let progress = tl2.progress();
//       tl2.progress(wrapProgress(snap(tl2.progress() + amount)));
//       let next = tracker.item;
//       tl2.progress(progress);
    
//       // Update the active image
//       document.querySelector('.item.active').classList.remove('active');
//       items[next].classList.add('active');
    
//       // Update content based on the active item
//       const activeContent = contentData[next];
//       document.querySelector('.right-content h1').textContent = activeContent.title;
//       document.querySelector('.right-content p').textContent = activeContent.text;
    
//       // Animate the content update (optional)
//       gsap.fromTo(
//         ".right-content",
//         { opacity: 0, y: 20 },
//         { opacity: 1, y: 0, duration: 0.5 }
//       );
    
//       gsap.to(tl2, {
//         progress: snap(tl2.progress() + amount),
//         modifiers: {
//           progress: wrapProgress,
//         },
//       });
//     }

//     function moveWheel(amount) {
//       let progress = tl2.progress();
//       tl2.progress(wrapProgress(snap(tl2.progress() + amount)));
//       let next = tracker.item;
//       tl2.progress(progress);
    
//       // Update the active image
//       document.querySelector(".item.active").classList.remove("active");
//       items[next].classList.add("active");
    
//       // Update content based on the active item
//       const activeContent = contentData[next];
    
//       // Animate the text content (fade in separately)
//       const rightContent = document.querySelector(".right-content");
//       const heading = rightContent.querySelector("h1");
//       const paragraph = rightContent.querySelector("p");
//       const buttons = rightContent.querySelectorAll("button");
    
//       // Animate heading, paragraph, and buttons out
//       gsap.to([heading, paragraph, ...buttons], {
//         opacity: 0,
//         y: 10,
//         duration: 0.3,
//         onComplete: () => {
//           heading.textContent = activeContent.title;
//           paragraph.textContent = activeContent.text;
    
//           // Animate each element back in
//           gsap.fromTo(
//             heading,
//             { opacity: 0, y: 20 },
//             { opacity: 1, y: 0, duration: 0.6, delay: 0.1 }
//           );
//           gsap.fromTo(
//             paragraph,
//             { opacity: 0, y: 20 },
//             { opacity: 1, y: 0, duration: 0.6, delay: 0.2 }
//           );
//           gsap.fromTo(
//             buttons,
//             { opacity: 0, y: 20 },
//             { opacity: 1, y: 0, duration: 0.6, delay: 0.3, stagger: 0.1 }
//           );
//         },
//       });
//       // Animate the image coming into view
//       gsap.fromTo(
//         items[next],
//         { opacity: 0, scale: 0.8 },
//         { opacity: 1, scale: 1, duration: 0.6, delay: 0.1 }
//       );
    
//       // Update the timeline progress for the rotation
//       gsap.to(tl2, {
//         progress: snap(tl2.progress() + amount),
//         modifiers: {
//           progress: wrapProgress,
//         },
//       });
//     }
//   // post services
//   const backButton = document.getElementById('back');
// const postServicesSection = document.getElementById('post_services');

// // Add event listener to the back button
// backButton.addEventListener('click', function() {
//     // Toggle visibility of the post_services section
//     postServicesSection.style.display = 'block'; // Show the section

//     // Optionally, hide other sections if needed
//     // document.getElementById('anotherSection').style.display = 'none';
// });

//      // animations for your section

//    // Function to split text into individual spans
//    function breakText(selector) {
//     const elements = document.querySelectorAll(selector);
//     elements.forEach((el) => {
//       const textContent = el.textContent;
//       const splitText = textContent.split(""); // Split into individual characters
//       let clutter = "";
//       splitText.forEach((char) => {
//         if (char === " ") {
//           clutter += `<span>&nbsp;</span>`; // Preserve space
//         } else {
//           clutter += `<span>${char}</span>`;
//         }
//       });
//       el.innerHTML = clutter;
//     });
//   }

//   // Split text for both .yh11 and .yh12
//   breakText(".yh11, .yh12");

 

// // Create a GSAP timeline
// const timeline = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".your", // The element you want to watch for
//     start: "top 80%", // When the top of the element reaches 80% of the viewport height
//     end: "bottom 20%", // When the bottom of the element reaches 20% of the viewport height (optional)
//     // scrub: true, // Optional: For smooth scrolling effect
//     // markers: true, // Optional: To see the start and end points (remove in production)
//   }
// });

// timeline
//   .from(".yh11 span", {
//     x: -10,
//     stagger: 0.1,
//     duration: 0.5,
//     opacity: 0,
//     ease: "power2.out",
//   })
//   .from(
//     ".yh12 span",
//     {
//       x: -10,
//       stagger: 0.1,
//       duration: 0.5,
//       opacity: 0,
//       ease: "power2.out",
//     },
//     "+=0.2" // Delay between the two animations
//   );

//   gsap.from(".ftr_img1, .ftr_img2, .ftr_img3", {
//     x: 100,
//     opacity: 0,
//     y: 100,
//     duration: 1,
//     stagger:0.3,
//     scrollTrigger: {
//       trigger: ".footer", // Target the footer
//       start: "top bottom", // When the top of the footer enters the bottom of the viewport
//       end: "bottom bottom", // When the bottom of the footer is at the bottom of the viewport
//       toggleActions: "play none none none", // Play animation on scroll into view
//     },
//   });




    
// });


mm.add("(max-width: 480px)", () => {
  const tlMobile = gsap.timeline({
    scrollTrigger: {
      trigger: ".about",
      start: "-40% 0%", // Adjusted for smaller screens
      end: "100% 100%",
      // scrub: true, // Uncomment for smooth scroll
      // markers: true, // Debug markers (optional)
    },
  });

  tlMobile
    .from(".about-hd", {
      opacity: 1,
      x: -100, // Slide in from the top
      duration: 1,
      ease: "power3.out",
    })
  
    
    .from(
      ".circle-abt",
      {
        y: 150,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.8"
    )
    .from(".images-abt", {
      x: 550, // Slide in from the right
      opacity: 0,
      duration: 1,
      // delay:1,
      ease: "power3.out"
    }, "-=0.8") // Overlap with the second animation
    .to(".images-abt", {
       
        opacity:0,
        delay:1,
        // duration:1,
      }, "-=0.8")
   
   
    

    .to(".about-hd", {
      x: 400, 
      duration: 1,
      ease: "power3.out",
    },"-=1")
    .to(".images-abt", {
       
      opacity:0,
      delay:1,
      // duration:1,
    }, "-=1") // Overlap with the second animation
    .to(
      ".circle-abt",
      {
        y: -450,
        duration: 1,
        scale:2.5,
        ease: "power3.out",
      },
      "-=0.8"
    )
    
   
    .to(".container ",{
      opacity:1,
      x:50,
      },"-=1")
    .to(".item",{
       scale:1,
       },"-=1")
      .to(".abt-btns",{
       opacity:1,
       },"-=1")
       .to(".right-content",{
         opacity:1,
         y:-100,
          ease: "power3.out",
          duration:1,
         },"-=1")
      .to(".scroll-down2",{
           opacity:1,
           },"-=1")

           gsap.registerPlugin(MotionPathPlugin);

           const circlePath = MotionPathPlugin.convertToPath("#holder", false)[0];
           circlePath.id = "circlePath";
           document.querySelector("svg").prepend(circlePath);
           
           let items = gsap.utils.toArray(".item"),
             numItems = items.length,
             itemStep = 1 / numItems,
             wrapProgress = gsap.utils.wrap(0, 1),
             snap = gsap.utils.snap(itemStep),
             wrapTracker = gsap.utils.wrap(0, numItems),
             tracker = { item: 0 };
           
           gsap.set(items, { motionPath: {
               path: circlePath,
               align: circlePath,
               alignOrigin: [0.5, 0.5],
               end: i => i / items.length
             }, scale: 0.9 
           });
           
           const tl2 = gsap.timeline({ paused:true, reversed: true });
           
           tl2.to('.wrapper', {
             rotation: 360, 
             transformOrigin: 'center', 
             duration: 1, 
             ease: 'none'
           });
           
           tl2.to(items, {
             rotation: "-=360", 
             transformOrigin: 'center', 
             duration: 1, 
             ease: 'none',
           }, 0);
           
           tl2.to(tracker, {
             item: numItems,
             duration: 1, 
             ease: 'none',
             modifiers: {
               item(value) {
                 return wrapTracker(numItems - Math.round(value))
               }
             }
           }, 0);
           
           items.forEach(function (el, i) {
           
             el.addEventListener("click", function () {
               var current = tracker.item,
                 activeItem = i;
           
               if (i === current) {
                 return;
               }
           
               //set active item to the item that was clicked and remove active class from all items
               document.querySelector('.item.active').classList.remove('active');
               items[activeItem].classList.add('active');
           
               var diff = current - i;
           
               if (Math.abs(diff) < numItems / 2) {
                 moveWheel(diff * itemStep);
               } else {
                 var amt = numItems - Math.abs(diff);
           
                 if (current > i) {
                   moveWheel(amt * -itemStep);
                 } else {
                   moveWheel(amt * itemStep);
                 }
               }
             });
           });
           
           document.getElementById('next').addEventListener("click", function () {
             return moveWheel(-itemStep);
           });
           
           document.getElementById('prev').addEventListener("click", function () {
             return moveWheel(itemStep);
           });
           
           function moveWheel(amount, i, index) {
             
             let progress = tl2.progress();
             tl2.progress(wrapProgress(snap(tl2.progress() + amount)))
             let next = tracker.item;
             tl2.progress(progress);
           
             document.querySelector('.item.active').classList.remove('active');
             items[next].classList.add('active');  
           
             gsap.to(tl2, {
               progress: snap(tl2.progress() + amount),
               modifiers: {
                 progress: wrapProgress
               }
             });
           }
       
            
           function moveWheel(amount) {
             let progress = tl2.progress();
             tl2.progress(wrapProgress(snap(tl2.progress() + amount)));
             let next = tracker.item;
             tl2.progress(progress);
           
             // Update the active image
             document.querySelector('.item.active').classList.remove('active');
             items[next].classList.add('active');
           
             // Update content based on the active item
             const activeContent = contentData[next];
             document.querySelector('.right-content h1').textContent = activeContent.title;
             document.querySelector('.right-content p').textContent = activeContent.text;
           
             // Animate the content update (optional)
             gsap.fromTo(
               ".right-content",
               { opacity: 0, y: 20 },
               { opacity: 1, y: 0, duration: 0.5 }
             );
           
             gsap.to(tl2, {
               progress: snap(tl2.progress() + amount),
               modifiers: {
                 progress: wrapProgress,
               },
             });
           }
       
           function moveWheel(amount) {
             let progress = tl2.progress();
             tl2.progress(wrapProgress(snap(tl2.progress() + amount)));
             let next = tracker.item;
             tl2.progress(progress);
           
             // Update the active image
             document.querySelector(".item.active").classList.remove("active");
             items[next].classList.add("active");
           
             // Update content based on the active item
             const activeContent = contentData[next];
           
             // Animate the text content (fade in separately)
             const rightContent = document.querySelector(".right-content");
             const heading = rightContent.querySelector("h1");
             const paragraph = rightContent.querySelector("p");
             const buttons = rightContent.querySelectorAll("button");
           
             // Animate heading, paragraph, and buttons out
             gsap.to([heading, paragraph, ...buttons], {
               opacity: 0,
               y: 10,
               duration: 0.3,
               onComplete: () => {
                 heading.textContent = activeContent.title;
                 paragraph.textContent = activeContent.text;
           
                 // Animate each element back in
                 gsap.fromTo(
                   heading,
                   { opacity: 0, y: 20 },
                   { opacity: 1, y: 0, duration: 0.6, delay: 0.1 }
                 );
                 gsap.fromTo(
                   paragraph,
                   { opacity: 0, y: 20 },
                   { opacity: 1, y: 0, duration: 0.6, delay: 0.2 }
                 );
                 gsap.fromTo(
                   buttons,
                   { opacity: 0, y: 20 },
                   { opacity: 1, y: 0, duration: 0.6, delay: 0.3, stagger: 0.1 }
                 );
               },
             });
             // Animate the image coming into view
             gsap.fromTo(
               items[next],
               { opacity: 0, scale: 0.8 },
               { opacity: 1, scale: 1, duration: 0.6, delay: 0.1 }
             );
             
             // Update the timeline progress for the rotation
             gsap.to(tl2, {
               progress: snap(tl2.progress() + amount),
               modifiers: {
                 progress: wrapProgress,
               },
             });

             
           }

      
      


          const track = document.querySelector('.carousel-track');
const itemss = document.querySelectorAll('.carousel-item');
const activeServiceElement = document.querySelector('.active_service'); // Element for active_service
const activeService2Element = document.querySelector('.active_service2'); // Element for active_service2
let activeIndex = 0;

// Add unique data attributes or identifiers to your carousel items
const services = ["Surgery", "Orthopedic", "ENT", "Pediatric", "Medicine"]; // Replace with actual names

// Function to update active_service2
function updateActiveService2(activeService) {
  if (activeService2Element) {
    activeService2Element.textContent = activeService; // Update text of active_service2
  }
}

// Function to update active item and center it
function updateCarousel() {
  itemss.forEach((item, index) => {
    if (index === activeIndex) {
      item.classList.add('active');
      const offset = -(item.offsetWidth + 10) * activeIndex + (window.innerWidth - item.offsetWidth) / 2;
      track.style.transform = `translateX(${offset}px)`;

      // Get the active service based on the active index
      const activeService = services[index];
      activeServiceElement.textContent = activeService; // Update active_service
      updateActiveService2(activeService); // Update active_service2
    } else {
      item.classList.remove('active');
    }
  });
}

// Event listeners for buttons
document.querySelector('.prev-btn').addEventListener('click', () => {
  activeIndex = (activeIndex - 1 + itemss.length) % itemss.length; // Loop to the last item if needed
  updateCarousel();
});

document.querySelector('.next-btn').addEventListener('click', () => {
  activeIndex = (activeIndex + 1) % itemss.length; // Loop to the first item if needed
  updateCarousel();
});

// Initial setup
updateCarousel();

           
});
