const https = require('https');

// const websiteUrl = 'http://example.com';

const checkWebsiteStatus = (url) => {
  https.get('https://'+url, (response) => {
    const { statusCode } = response;

    if (statusCode < 400) {
      console.log(`${url} is online`);
    } else {
      console.log(`${url} is offline. Status code: ${statusCode}`);
    }
  }).on('error', (error) => {
    console.error(`Error checking ${url}: ${error.message}`);
  });
};


// Example usage
// const websiteHostname = 'example.com';
// checkWebsiteStatus(websiteHostname);

checkWebsiteStatus('www.sedoparking.com')