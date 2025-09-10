-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `role` ENUM('ADMIN', 'USER') NOT NULL DEFAULT 'USER',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Movie` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `type` ENUM('MOVIE', 'TV_SHOW') NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `genre` VARCHAR(191) NOT NULL,
    `director` VARCHAR(191) NOT NULL,
    `actors` VARCHAR(191) NOT NULL,
    `language` VARCHAR(191) NOT NULL,
    `country` VARCHAR(191) NOT NULL,
    `budget` DECIMAL(65, 30) NOT NULL,
    `boxOffice` DECIMAL(65, 30) NULL,
    `location` VARCHAR(191) NOT NULL,
    `duration` VARCHAR(191) NOT NULL,
    `year` INTEGER NOT NULL,
    `imageUrl` VARCHAR(191) NULL,
    `status` ENUM('PENDING', 'APPROVED', 'REJECTED') NOT NULL DEFAULT 'PENDING',
    `createdBy` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    INDEX `Movie_status_idx`(`status`),
    INDEX `Movie_createdBy_idx`(`createdBy`),
    INDEX `Movie_title_idx`(`title`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Movie` ADD CONSTRAINT `Movie_createdBy_fkey` FOREIGN KEY (`createdBy`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
