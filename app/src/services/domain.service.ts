import dns from 'dns';
import http from 'http';
import https from 'https';
import tls from 'tls';


const domain = 'Akivas.com';

// Function to check if the domain is online
function isDomainOnline(domain:string) {
  return new Promise((resolve) => {
    dns.resolve(domain, (err) => {
      resolve(!err);
    });
  });
}

function getDNSDetails(domain:string){

}

function getSSLDetails(domain:string) {
    return new Promise((resolve) => {
      const options = {
        host: domain,
        port: 443,
      };
  
      const socket = tls.connect(options, () => {
        const sslDetails = socket.getPeerCertificate();
        resolve(sslDetails);
        socket.end();
      });
  
      socket.on('error', (err) => {
        console.error(err);
        if(err == 'CERT_HAS_EXPIRED: certificate has expired')
        resolve('CERT_HAS_EXPIRED')
        else{
            resolve(null);
        }
      });
    });
  }

// Function to measure response speed
function getResponseSpeed(domain:string, protocol:any) {
  const start = Date.now();

  const options = {
    method: 'GET',
    hostname: domain,
    port: protocol === 'https' ? 443 : 80,
    path: '/',
  };

  const req = (protocol === 'https' ? https : http).request(options, (res) => {
    const end = Date.now();
    console.log(`Response Speed (${protocol}): ${end - start}ms`);
  });
  req.end();
}

  
// Example usage
async function getDomainDetails(domain: string) {
  const online = await isDomainOnline(domain);

  if (online) {
    console.log(`Domain ${domain} is online`);
    const sslDetails = await getSSLDetails(domain);

    if (sslDetails) {
        if(sslDetails == 'CERT_HAS_EXPIRED'){
            console.log(`Domain ${domain} has expired`);
        }else{
            console.log('SSL Information:', sslDetails);
        }
      
    }else {
      console.log('SSL Information not available');
    }

    // Measure response speed for both HTTP and HTTPS
    getResponseSpeed(domain, 'http');
    getResponseSpeed(domain, 'https');
  } else {
    console.log(`Domain ${domain} is offline`);
  }
}

getDomainDetails('badssl.com');