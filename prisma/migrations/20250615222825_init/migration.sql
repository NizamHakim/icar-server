-- CreateTable
CREATE TABLE `IcarRoute` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `color` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `IcarRoute_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `IcarStop` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `coordinate` JSON NOT NULL,

    UNIQUE INDEX `IcarStop_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RouteStopWaypoint` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `icarRouteId` INTEGER NOT NULL,
    `icarStopId` INTEGER NOT NULL,
    `order` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Icar` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `capacity` INTEGER NOT NULL,
    `status` ENUM('ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'ACTIVE',
    `icarRouteId` INTEGER NOT NULL,

    UNIQUE INDEX `Icar_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Schedule` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `session` ENUM('SESSION_1', 'SESSION_2') NOT NULL,
    `arrivalTime` DATETIME(3) NOT NULL,
    `icarId` INTEGER NOT NULL,
    `icarStopId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Ticket` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `expiredAt` DATETIME(3) NOT NULL,
    `status` ENUM('FINISHED', 'CANCELED', 'IN_QUEUE') NOT NULL DEFAULT 'IN_QUEUE',
    `userId` INTEGER NOT NULL,
    `scheduleId` INTEGER NOT NULL,
    `review` JSON NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `RouteStopWaypoint` ADD CONSTRAINT `RouteStopWaypoint_icarRouteId_fkey` FOREIGN KEY (`icarRouteId`) REFERENCES `IcarRoute`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RouteStopWaypoint` ADD CONSTRAINT `RouteStopWaypoint_icarStopId_fkey` FOREIGN KEY (`icarStopId`) REFERENCES `IcarStop`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Icar` ADD CONSTRAINT `Icar_icarRouteId_fkey` FOREIGN KEY (`icarRouteId`) REFERENCES `IcarRoute`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Schedule` ADD CONSTRAINT `Schedule_icarId_fkey` FOREIGN KEY (`icarId`) REFERENCES `Icar`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Schedule` ADD CONSTRAINT `Schedule_icarStopId_fkey` FOREIGN KEY (`icarStopId`) REFERENCES `IcarStop`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Ticket` ADD CONSTRAINT `Ticket_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Ticket` ADD CONSTRAINT `Ticket_scheduleId_fkey` FOREIGN KEY (`scheduleId`) REFERENCES `Schedule`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
