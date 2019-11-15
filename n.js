export default (functionName) => {
  console.log('hei');

  if (process.env.NETLIFY) {
    return `/.netlify/functions/dist/${functionName}`;
  }

  return `http://localhost:9000/${functionName}`;
};
