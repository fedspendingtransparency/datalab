const scrolledToBottom = () => document.getElementById('gatsby-focus-wrapper').getBoundingClientRect().bottom <= window.innerHeight;

export default scrolledToBottom;
