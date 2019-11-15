exports.handler = (event, context, callback) => {
  const response = {
    method: event.httpMethod,
  };

  if (event.httpMethod === 'POST') {
    const data = JSON.parse(event.body);
  }

  return callback(null, {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    },
    body: JSON.stringify(response),
  });
};
