export const event = ({ action, value }) => {
  if (window.gtag !== "undefined") {
    window.gtag("event", action, {
      data: value,
    });
  }
};
