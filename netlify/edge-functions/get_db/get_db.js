// eslint-disable-next-line no-unused-vars
export default async (request) => {
  // eslint-disable-next-line no-undef
  return new Response('Hsello, World!', {
    headers: { 'content-type': 'text/html' },
  });
};
