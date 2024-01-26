export type CreateMonitorDto = {
    url:string;
    userId:string;
}
enum SSLStatus{
    HEALTHY = "HEALTHY",
    NOT_FOUND = "NOT_FOUND",
    EXPIRED = "EXPIRED",
}

enum SiteStatus{
    ONLINE = "ONLINE",
    OFFLINE = "OFFLINE",
}

export type UpdateMonitorDto  =  CreateMonitorDto &{
    name:string;
    sslStatus:SSLStatus;
    siteStatus:SiteStatus;
  }