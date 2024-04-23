const img = document.querySelector('#scrollimg');

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(img, {
    x: 0,
    // y: 0,
}, {
    x: function (_, target) {
        return document.documentElement.clientWidth - target.offsetWidth;   //page width
    },
    rotation: function(_, target){
        const radius = target.offsetWidth/2;
        const perimeter = 2 * Math.PI * radius;
        return (document.documentElement.clientWidth - target.offsetWidth) / perimeter * 360; 
    },  //circle of rotation: page width / perimeter
    duration: 2,
    ease:'none',
    // y: document.documentElement.clientHeight,

    scrollTrigger: {
        trigger: img,
        scrub: true,    //connect state of element with scroll
        start: 'center bottom',
        // pin: true,
    }
})

// gsap.fromTo (img, {
//     x: 0,
//     y: 0,
// }, {
//     y: document.documentElement.clientHeight,

//     scrollTrigger: {
//         trigger: img,
//         // scrub: true,
//         start: 'bottom center',

//     }
// })

// Function to handle scroll-based animations
function handleScrollAnimations() {
    gsap.utils.toArray('.animated').forEach(element => {
      ScrollTrigger.create({
        trigger: element,
        start: 'top 90%', // Adjust the start trigger position as needed
        end: 'bottom 10%', // Adjust the end trigger position as needed
        onEnter: () => {
          element.classList.add('visible');
        },
        onLeaveBack: () => {
          element.classList.remove('visible');
        }
      });
    });
  }
  
  // Call the function to initiate scroll-based animations
  document.addEventListener('DOMContentLoaded', handleScrollAnimations);

  //current date
  document.addEventListener("DOMContentLoaded", function() {
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1; // Month is zero-based
    var year = currentDate.getFullYear();
    var formattedDate = month + '-' + day + '-' + year;
    
    document.getElementById("currentDate").textContent = formattedDate;
  });
  