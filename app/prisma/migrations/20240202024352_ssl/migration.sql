-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phoneNumber" TEXT,
    "isVerified" BOOLEAN NOT NULL DEFAULT false,
    "role" TEXT NOT NULL DEFAULT 'USER',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Monitor" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "url" TEXT NOT NULL,
    "name" TEXT,
    "speed" TEXT,
    "status" TEXT NOT NULL DEFAULT 'OFFLINE',
    "userId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Monitor_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "SSL" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cert" TEXT NOT NULL,
    "issuer" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "organization" TEXT NOT NULL,
    "validFrom" TEXT NOT NULL,
    "validTo" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "monitorId" TEXT NOT NULL,
    CONSTRAINT "SSL_monitorId_fkey" FOREIGN KEY ("monitorId") REFERENCES "Monitor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Monitor_id_key" ON "Monitor"("id");

-- CreateIndex
CREATE UNIQUE INDEX "SSL_monitorId_key" ON "SSL"("monitorId");
