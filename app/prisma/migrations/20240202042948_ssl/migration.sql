-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_SSL" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cert" TEXT,
    "issuer" TEXT,
    "country" TEXT,
    "organization" TEXT,
    "validFrom" TEXT,
    "validTo" TEXT,
    "status" TEXT NOT NULL DEFAULT 'NOT_FOUND',
    "monitorId" TEXT NOT NULL,
    CONSTRAINT "SSL_monitorId_fkey" FOREIGN KEY ("monitorId") REFERENCES "Monitor" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_SSL" ("cert", "country", "id", "issuer", "monitorId", "organization", "status", "validFrom", "validTo") SELECT "cert", "country", "id", "issuer", "monitorId", "organization", "status", "validFrom", "validTo" FROM "SSL";
DROP TABLE "SSL";
ALTER TABLE "new_SSL" RENAME TO "SSL";
CREATE UNIQUE INDEX "SSL_monitorId_key" ON "SSL"("monitorId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
