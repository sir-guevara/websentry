import { Hono } from "hono";
import dashboardPage from "../views/pages/dashboard";
import DashboardLayout from "../views/DashboardLayout";
import AddMonitorPage from "../views/pages/add";
import StatusPage from "../views/pages/status";
import SubscriptionPage from "../views/pages/subscription";
import TeamPage from "../views/pages/team";
import { addMonitorService, createSSLService, getMonitorByIdService, getMonitorService, updateMonitorService } from "../services/monitor.service";
import { CreateMonitorDto } from "../models/monitor.dto";
import dashboardNewPage from "../views/pages/dashboardNew";
import { getDomainDetails } from "../services/domain.service";
import MonitorPage from "../views/pages/monitor";

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
      const body = await c.req.json() as any;
      //@ts-ignore
      const user = c.get('user'); 
      const data  ={ url:body.url.split('/')[2], userId:user.id};
      const monitor = await addMonitorService(data); 
    try {
      let domainDetails = await getDomainDetails(monitor.url)
      await createSSLService(monitor.id,domainDetails!.ssl)
      const newDomainDetails = await updateMonitorService(monitor.id,{speed:domainDetails!.speed,  status:domainDetails!.status})
      c.status(200)
      return c.json(newDomainDetails)

    } catch (error:any) {
      if (error.code === 'ERR_TLS_CERT_ALTNAME_INVALID'){
        let domainDetails = {
          status:"OFFLINE",
          speed:"N/A",
          ssl:{
          status:'NOT_FOUND'
        }}
        await createSSLService(monitor.id,domainDetails!.ssl)
        const newDomainDetails = await updateMonitorService(monitor.id,{speed:domainDetails!.speed,  status:domainDetails!.status})
        c.status(200);
        return c.json(newDomainDetails)
      }
      
      console.log('+++++++++++++++++++++',{error}) 
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
  return c.html(DashboardLayout({title:"Team - Dashboard",content:TeamPage()}));
});

dashboardRoute.get("/monitor/:id", async (c) => {
  try {
    const monitor = await getMonitorByIdService(c.req.param('id'));
  return c.html(DashboardLayout({title:"Monitor - Dashboard",content:MonitorPage(monitor)}))
  } catch (error) {
    console.log(error);
    return c.redirect("/dashboard")
  }
  
});



export default dashboardRoute;