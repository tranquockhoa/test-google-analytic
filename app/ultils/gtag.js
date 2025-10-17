export const event = (action, value) => {
  if (window.gtag !== "undefined") {
    window.gtag("event", action, value);
    console.log("GA event sent:", action, value);
  }
};
