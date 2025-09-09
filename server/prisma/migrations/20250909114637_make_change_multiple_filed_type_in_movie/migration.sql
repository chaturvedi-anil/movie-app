/*
  Warnings:

  - You are about to alter the column `budget` on the `Movie` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Decimal(65,30)`.
  - You are about to alter the column `year` on the `Movie` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - Added the required column `actors` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `country` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `genre` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `language` to the `Movie` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Movie` ADD COLUMN `actors` VARCHAR(191) NOT NULL,
    ADD COLUMN `boxOffice` DECIMAL(65, 30) NULL,
    ADD COLUMN `country` VARCHAR(191) NOT NULL,
    ADD COLUMN `description` VARCHAR(191) NOT NULL,
    ADD COLUMN `genre` VARCHAR(191) NOT NULL,
    ADD COLUMN `language` VARCHAR(191) NOT NULL,
    MODIFY `budget` DECIMAL(65, 30) NOT NULL,
    MODIFY `year` INTEGER NOT NULL;
