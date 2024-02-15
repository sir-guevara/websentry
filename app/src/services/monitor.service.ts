import { CreateMonitorDto } from "../models/monitor.dto";
import prisma from "../utils/prisma";



export const addMonitorService = async (data:CreateMonitorDto) => {
    const monitor = await prisma.monitor.findFirst({where: {userId:data.userId, url:data.url}})
    if(monitor){throw new Error("Monitor Already Exists")}
    return await prisma.monitor.create({
        data:{
            url:data.url,
            userId:data.userId
        }
    })
}

export  async function getMonitorByIdService (id:string){
    return await prisma.monitor.findFirst({where:{id}, include:{ssl:true,user:{
        select:{
            email:true,
            phoneNumber:true,
        }
    }}})
}
export const getMonitorService = async (userId:string) => {
    return await prisma.monitor.findMany({
        where:{
            userId:userId
        },
        
        include:{
            ssl:true,
            user:{
                select:{
                    email:true,
                    phoneNumber:true,
                }
            }
        },
        orderBy: {
            createdAt: 'desc',
          },
    })
}



export const getAllMonitorService = async () => {
    return await prisma.monitor.findMany({
        
        include:{
            ssl:true
        },
        orderBy: {
            createdAt: 'desc',
          },
    })
}

export const deleteMonitorService = async (id:string) => {
    return await prisma.monitor.delete({
        where:{
            id:id
        }
    })
}

export const updateMonitorService = async (id:string, data:any) => {
    return await prisma.monitor.update({
        where:{
            id:id
        },
        data:{
            ...data
        }
    })
}

export const createSSLService = async (id:string, data:any) => {
    return await prisma.sSL.create({
        data:{...data, monitorId:id},
    })
}

export const updateSSLService = async (id:number, data:any) => {
    return await prisma.sSL.update({
        where:{
            id:id
        },
        data:{
          ...data
        }
    })
}

// // Function to verify certificate for the specific service
// function verifyCertificate(certificate) {
//     switch (certificate.method) {
//       case 'https':
//         verifyHttpsCertificate(certificate);
//         break;
//       case 'ldap':
//         verifyLdapCertificate(certificate);
//         break;
//       case 'imaps':
//         verifyImapCertificate(certificate);
//         break;
//       // Add more cases for other methods
//       default:
//         console.error(`Unsupported method: ${certificate.method}`);
//     }
//   }


// // Function to verify HTTPS certificate
// function verifyHttpsCertificate(certificate) {
//     const options = {
//       host: certificate.server,
//       port: certificate.port,
//       method: 'GET',
//     };
  
//     const req = https.request(options, (res) => {
//       res.on('data', () => {}); // Consume response data
//       res.on('end', () => {
//         if (res.connection.getPeerCertificate().valid_to <= Date.now()) {
//           sendNotification(certificate);
//         }
//       });
//     });
  
//     req.end();
//   }


// // Function to verify LDAP certificate
// function verifyLdapCertificate(certificate) {
//     const client = ldap.createClient({
//       url: `ldaps://${certificate.server}:${certificate.port}`,
//     });
  
//     client.bind('your-ldap-username', 'your-ldap-password', (err) => {
//       if (err) {
//         console.error(err);
//         sendNotification(certificate);
//       } else {
//         client.unbind();
//       }
//     });
//   }
  

//   // Function to verify IMAPS certificate
// function verifyImapCertificate(certificate) {
//     const config = {
//       imap: {
//         user: 'your-imap-username',
//         password: 'your-imap-password',
//         host: certificate.server,
//         port: certificate.port,
//         tls: true,
//       },
//     };
  
//     imaps.connect(config).then((connection) => {
//       connection.end();
//     }).catch((err) => {
//       console.error(err);
//     //   sendNotification(certificate);
//     });
//   }

  

// //   // Function to send email notification
// // function sendNotification(certificate) {
// //     const mailOptions = {
// //       from: 'your-email@gmail.com',
// //       to: 'recipient-email@example.com',
// //       subject: `Certificate Expiry Alert: ${certificate.name}`,
// //       text: `Certificate "${certificate.name}" will expire soon. Please renew it.`,
// //     };
  
// //     transporter.sendMail(mailOptions, (error, info) => {
// //       if (error) {
// //         console.error(error);
// //       } else {
// //         console.log('Email sent: ' + info.response);
// //       }
// //     });
// //   }
  