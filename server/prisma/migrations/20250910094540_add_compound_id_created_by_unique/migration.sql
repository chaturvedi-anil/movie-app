/*
  Warnings:

  - A unique constraint covering the columns `[id,createdBy]` on the table `Movie` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE INDEX `Movie_year_idx` ON `Movie`(`year`);

-- CreateIndex
CREATE UNIQUE INDEX `Movie_id_createdBy_key` ON `Movie`(`id`, `createdBy`);
