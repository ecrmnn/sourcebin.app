export default (functionName) => {
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    return `http://localhost:9000/${functionName}`;
  }

  return `/.netlify/functions/${functionName}`;
};
