import { Hono } from "hono";
import dashboardPage from "../views/pages/dashboard";
import DashboardLayout from "../views/DashboardLayout";
import AddMonitorPage from "../views/pages/add";
import StatusPage from "../views/pages/status";
import SubscriptionPage from "../views/pages/subscription";
import TeamPage from "../views/pages/team";
import { addMonitorService } from "../services/moitor.service";
import { CreateMonitorDto } from "../models/monitor.dto";

const dashboardRoute = new Hono();
dashboardRoute.get("/", async (c) => {
  // console.log(c.get("user").id);

  return c.html(DashboardLayout({title:"Websentry - Dashboard",content:dashboardPage()}))
});

dashboardRoute.get("/add-monitor", (c) => {
  return c.html(DashboardLayout({title:"Add new monitor - Dashboard",content:AddMonitorPage()}))
})
.post(async(c)=>{
    try {
      const body = await c.req.parseBody() as any;
      console.log(body.url);
      // const monitor = await addMonitorService(body); 

      return c.json(body)
      
    } catch (error:any) {
      c.status(400);
      return c.json(error.message);
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