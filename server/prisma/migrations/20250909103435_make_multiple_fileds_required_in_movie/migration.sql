/*
  Warnings:

  - Made the column `budget` on table `Movie` required. This step will fail if there are existing NULL values in that column.
  - Made the column `location` on table `Movie` required. This step will fail if there are existing NULL values in that column.
  - Made the column `duration` on table `Movie` required. This step will fail if there are existing NULL values in that column.
  - Made the column `year` on table `Movie` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Movie` MODIFY `budget` VARCHAR(191) NOT NULL,
    MODIFY `location` VARCHAR(191) NOT NULL,
    MODIFY `duration` VARCHAR(191) NOT NULL,
    MODIFY `year` VARCHAR(191) NOT NULL;
