export default (functionName) => {
  if (process.env.NETLIFY) {
    return `${process.env.URL}/.netlify/functions/dist/${functionName}`;
  }

  return `http://localhost:9000/${functionName}`;
};
