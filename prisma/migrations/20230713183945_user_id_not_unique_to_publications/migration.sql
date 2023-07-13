-- DropIndex
DROP INDEX "Publication_userId_key";

-- AlterTable
ALTER TABLE "Publication" ALTER COLUMN "dateToPublish" SET DATA TYPE TEXT;
