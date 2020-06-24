# Migration `20200621155712-turn-content---text`

This migration has been generated by Kunal at 6/21/2020, 3:57:12 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
PRAGMA foreign_keys=OFF;

CREATE TABLE "quaint"."new_Tweet" (
"createdAt" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP ,"id" INTEGER NOT NULL  PRIMARY KEY AUTOINCREMENT,"text" TEXT NOT NULL  )

INSERT INTO "quaint"."new_Tweet" ("createdAt", "id") SELECT "createdAt", "id" FROM "quaint"."Tweet"

PRAGMA foreign_keys=off;
DROP TABLE "quaint"."Tweet";;
PRAGMA foreign_keys=on

ALTER TABLE "quaint"."new_Tweet" RENAME TO "Tweet";

PRAGMA foreign_keys=off;
DROP TABLE "quaint"."User";;
PRAGMA foreign_keys=on

PRAGMA "quaint".foreign_key_check;

PRAGMA foreign_keys=ON;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200621151018-create-tweets..20200621155712-turn-content---text
--- datamodel.dml
+++ datamodel.dml
@@ -3,26 +3,18 @@
 datasource sqlite {
   provider = "sqlite"
-  url = "***"
+  url      = "file:./dev.db"
 }
 generator client {
   provider      = "prisma-client-js"
   binaryTargets = ["native"]
 }
-model User {
-  id        Int      @id @default(autoincrement())
-  createdAt DateTime @default(now())
-  email     String   @unique
-  name      String?
-  password String
-  posts     Tweet[]
-}
 model Tweet {
   id        Int      @id @default(autoincrement())
   createdAt DateTime @default(now())
-  content     String   
+  text     String   
 }
```

