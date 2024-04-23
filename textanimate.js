// Define the text to animate
const text = "Hongxuan Liao";

// Split the text into individual characters
const chars = text.split('');

// Create a timeline
const tl = gsap.timeline();

// Loop through each character
chars.forEach((char, index) => {
  // Create a span element for each character
  const span = document.createElement('span');
  span.textContent = char;
  
  // Add the span to the text container
  document.getElementById('text-container').appendChild(span);
  
  // Add animation to each character
  tl.from(span, {
    duration: 0.5,
    opacity: 0,
    scale: 0.1,
    rotation: gsap.utils.random(-10, 10),
    x: gsap.utils.random(-20, 20),
    y: gsap.utils.random(-20, 20),
    ease: "power3.out",
    stagger: {
      amount: 0.1
    }
  }, index * 0.05);

});
