const handler = async (event) => {
  try {
    const subject = event.queryStringParameters.name || 'Wocrld';
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `wwffHello ${subject}` }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
