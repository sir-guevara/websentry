import { getDomainDetails } from "../services/domain.service";
import { createSSLService, getAllMonitorService, updateMonitorService } from "../services/monitor.service";

export const timeInSeconds = (seconds: number): number => {
    const now = new Date();
    const expirationInSeconds = seconds; //7 days expiration in seconds
    const expirationTimestamp =
      Math.floor(now.getTime() / 1000) + expirationInSeconds;
      return expirationTimestamp
}


export async function domainUpdate(monitor:any){
    try {
      
      let domainDetails = await getDomainDetails(monitor.url)
      await updateMonitorService(monitor.id,{speed:domainDetails!.speed,  status:domainDetails!.status})

    } catch (error:any) {
      if (error.code === 'ERR_TLS_CERT_ALTNAME_INVALID'){
        let domainDetails = {
          status:"OFFLINE",
          speed:"N/A",
          ssl:{
          status:'NOT_FOUND'
        }}
        await updateMonitorService(monitor.id,{speed:domainDetails!.speed,  status:domainDetails!.status})
      }
    }
}


export async function getAllActiveMonitors(){
   const monitors = await getAllMonitorService();

   return monitors
}