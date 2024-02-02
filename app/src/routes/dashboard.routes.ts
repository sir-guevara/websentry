import { Hono } from "hono";
import dashboardPage from "../views/pages/dashboard";
import DashboardLayout from "../views/DashboardLayout";
import AddMonitorPage from "../views/pages/add";
import StatusPage from "../views/pages/status";
import SubscriptionPage from "../views/pages/subscription";
import TeamPage from "../views/pages/team";
import { addMonitorService, createSSLService, getMonitorService, updateMonitorService } from "../services/monitor.service";
import { CreateMonitorDto } from "../models/monitor.dto";
import dashboardNewPage from "../views/pages/dashboardNew";
import { getDomainDetails } from "../services/domain.service";

const dashboardRoute = new Hono();
dashboardRoute.get("/", async (c) => {
  //@ts-ignore
  const userId = c.get("user").id;
  const userMonitors = await getMonitorService(userId);
  if(userMonitors.length < 1) {
    return c.html(DashboardLayout({title:"Websentry - Dashboard",content:dashboardNewPage()}))
  }
  return c.html(DashboardLayout({title:"Websentry - Dashboard",content:dashboardPage(userMonitors)}))
});

dashboardRoute.get("/add-monitor", (c) => {
  return c.html(DashboardLayout({title:"Add new monitor - Dashboard",content:AddMonitorPage()}))
})
.post(async(c)=>{
    try {
      const body = await c.req.json() as any;
      //@ts-ignore
      const user = c.get('user'); 
      const data  ={ url:body.url.split('/')[2], userId:user.id};
      
      const monitor = await addMonitorService(data); 
      let domainDetails:any;
      getDomainDetails(monitor.url).
      then(async (domainDetail) =>{
        domainDetails = domainDetail;
      
      })
      .catch(err => {
        if (err.code === 'ERR_TLS_CERT_ALTNAME_INVALID'){
          domainDetails = {
            status:"OFFLINE",
            speed:"N/A",
            ssl:{
            status:'NOT_FOUND'
          }}
        }
        console.log("========================",{err},"\n",'-----------------------',err.message)
      }).finally(async()=>{
        console.log({domainDetails:domainDetails})
        await createSSLService(monitor.id,domainDetails!.ssl)
        const newDomainDetails = await updateMonitorService(monitor.id,{speed:domainDetails!.speed, 
          status:domainDetails!.status})
          return c.json(newDomainDetails)
      })
 
      
    } catch (error:any) {
      console.log(error) 
      c.status(400);
      return c.json({"message":error.message});
    }
});
dashboardRoute.get("/status-page", (c) => {
  return c.html(DashboardLayout({title:"Status Page - Dashboard",content:StatusPage()}))
});

dashboardRoute.get("/subscription", (c) => {
  return c.html(DashboardLayout({title:"Subscription - Dashboard",content:SubscriptionPage()}))
});

dashboardRoute.get("/team", (c) => {
  return c.html(DashboardLayout({title:"Team - Dashboard",content:TeamPage()}))
});


export default dashboardRoute;