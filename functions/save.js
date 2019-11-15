const { generate } = require('shortid');
const S3 = require('../services/S3/S3');

exports.handler = async (event) => {
  const response = {
    method: event.httpMethod,
  };

  if (event.httpMethod === 'POST') {
    const id = generate();

    const { Location } = await S3.upload({
      fileName: `${id}.json`,
      content: event.body,
      contentType: 'application/json',
    });

    response.id = id;
    response.location = Location;
  }

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    },
    body: JSON.stringify(response),
  };
};
