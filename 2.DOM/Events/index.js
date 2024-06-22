// The third argument is for the useCapurting and it is boolean if it is never given then it automatically
// false and support the bubbling
// If it is true then it is eventCapturnig
// Event Capurting is always runs first then the event bubbling

// Work on same events

document.getElementById("grandparent").addEventListener(
  "click",
  () => {
    console.log("Grandparent");
  },
  false
);

document.getElementById("parent").addEventListener(
  "click",
  (e) => {
    console.log("parent");
    e.stopPropagation();
  },

  false
);

document.getElementById("child").addEventListener(
  "click",
  (e) => {
    console.log("child");
  },
  false
);
