import { Hono } from "hono";
import dashboardPage from "../views/pages/dashboard";
import DashboardLayout from "../views/DashboardLayout";
import AddMonitorPage from "../views/pages/add";
import StatusPage from "../views/pages/status";
import SubscriptionPage from "../views/pages/subscription";
import TeamPage from "../views/pages/team";

const dashboardRoute = new Hono();

dashboardRoute.get("/", (c) => {
  return c.html(DashboardLayout({title:"Websentry - Dashboard",content:dashboardPage()}))
});

dashboardRoute.get("/add-monitor", (c) => {
  return c.html(DashboardLayout({title:"Add new monitor - Dashboard",content:AddMonitorPage()}))
})
.post(async(c)=>{
  
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