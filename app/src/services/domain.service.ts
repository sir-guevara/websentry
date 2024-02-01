import dns from 'dns';
import http from 'http';
import https from 'https';
import tls from 'tls';


const domain = 'pawwiki.com';


// Function to check if the domain is online
function isDomainOnline(domain:string) {
  return new Promise((resolve) => {
    dns.resolve(domain, (err) => {
      resolve(!err);
    });
  });
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
async function getResponseSpeed(domain:string, protocol:string) {
  return new Promise((resolve, reject) => {
    const start = Date.now();

    const options = {
      method: 'GET',
      hostname: domain,
      port: protocol === 'https' ? 443 : 80,
      path: '/',
    };

    const req = (protocol === 'https' ? https : http).request(options, (res) => {
      const end = Date.now();
      const speed = `${((end - start)/1000).toFixed(2)}s`;
      resolve(speed);
    });

    req.on('error', (err) => {
      reject(err);
    });

    req.end();
  });
}

  
// Example usage
export async function getDomainDetails(domain: string) {
  const domainDetails: { [key: string]: unknown } = {};

  const online = await isDomainOnline(domain);
  if (online) {
    domainDetails.status = 'ONLINE';
    const sslDetails = await getSSLDetails(domain);
  
    if (sslDetails) {
        if(sslDetails == 'CERT_HAS_EXPIRED'){
            domainDetails.ssl = {status:'EXPIRED'};
            domainDetails.speed = await getResponseSpeed(domain, "http")
        }else{
          domainDetails.speed = await getResponseSpeed(domain, "https")
            domainDetails.ssl = {
              status:'HEALTHY',
                 //@ts-ignore
              cert: sslDetails.subject.CN,
                 //@ts-ignore
              issuer: sslDetails.issuer.CN,
               //@ts-ignore
              country: sslDetails.issuer.C,
               //@ts-ignore
              organization: sslDetails.issuer.O,
               //@ts-ignore
              validFrom: sslDetails.valid_from,
               //@ts-ignore
              validTo: sslDetails.valid_to,
  
          };
        }
      
    }else {
      domainDetails.ssl = {status:'NOT_FOUND'};
      domainDetails.speed = await getResponseSpeed(domain, "http")

    }

  } else {
    domainDetails.status = 'OFFLINE';
    domainDetails.ssl = {status:'NOT_FOUND'};
    domainDetails.speed="N/A"
  }
 return domainDetails;
}