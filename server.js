const http = require('http');

function redirectLocation(req) {
  const host = String(req.headers.host || '')
    .split(':')[0]
    .toLowerCase();
  const proto = String(req.headers['x-forwarded-proto'] || 'http')
    .split(',')[0]
    .trim()
    .toLowerCase();
  const pathWithQuery = req.url || '/';

  if (host === 'www.dawid-developer.pl') {
    return `https://dawid-developer.pl${pathWithQuery}`;
  }

  if (proto === 'http' && host === 'dawid-developer.pl') {
    return `https://dawid-developer.pl${pathWithQuery}`;
  }

  return null;
}

const originalCreateServer = http.createServer.bind(http);

http.createServer = function patchedCreateServer(requestListener, ...rest) {
  if (typeof requestListener !== 'function') {
    return originalCreateServer(requestListener, ...rest);
  }

  return originalCreateServer((req, res) => {
    const location = redirectLocation(req);
    if (location) {
      res.writeHead(301, { Location: location });
      res.end();
      return;
    }
    return requestListener(req, res);
  }, ...rest);
};

require('./server.next.js');
