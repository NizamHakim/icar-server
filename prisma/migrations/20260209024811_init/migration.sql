-- CreateEnum
CREATE TYPE "IcarStatus" AS ENUM ('ACTIVE', 'INACTIVE');

-- CreateEnum
CREATE TYPE "ScheduleSession" AS ENUM ('SESSION_1', 'SESSION_2');

-- CreateEnum
CREATE TYPE "TicketStatus" AS ENUM ('FINISHED', 'CANCELED', 'IN_QUEUE');

-- CreateTable
CREATE TABLE "IcarRoute" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "color" TEXT NOT NULL,

    CONSTRAINT "IcarRoute_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IcarStop" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "coordinate" JSONB NOT NULL,

    CONSTRAINT "IcarStop_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RouteStopWaypoint" (
    "id" SERIAL NOT NULL,
    "icarRouteId" INTEGER NOT NULL,
    "icarStopId" INTEGER NOT NULL,
    "order" INTEGER NOT NULL,

    CONSTRAINT "RouteStopWaypoint_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Icar" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "capacity" INTEGER NOT NULL,
    "status" "IcarStatus" NOT NULL DEFAULT 'ACTIVE',
    "icarRouteId" INTEGER NOT NULL,

    CONSTRAINT "Icar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Schedule" (
    "id" SERIAL NOT NULL,
    "session" "ScheduleSession" NOT NULL,
    "arrivalTime" TIMESTAMP(3) NOT NULL,
    "icarId" INTEGER NOT NULL,
    "icarStopId" INTEGER NOT NULL,

    CONSTRAINT "Schedule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ticket" (
    "id" SERIAL NOT NULL,
    "arrivedAt" TIMESTAMP(3) NOT NULL,
    "expiredAt" TIMESTAMP(3) NOT NULL,
    "status" "TicketStatus" NOT NULL DEFAULT 'IN_QUEUE',
    "userId" INTEGER NOT NULL,
    "scheduleId" INTEGER NOT NULL,
    "review" JSONB,

    CONSTRAINT "Ticket_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "IcarRoute_name_key" ON "IcarRoute"("name");

-- CreateIndex
CREATE UNIQUE INDEX "IcarStop_name_key" ON "IcarStop"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Icar_name_key" ON "Icar"("name");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "RouteStopWaypoint" ADD CONSTRAINT "RouteStopWaypoint_icarRouteId_fkey" FOREIGN KEY ("icarRouteId") REFERENCES "IcarRoute"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RouteStopWaypoint" ADD CONSTRAINT "RouteStopWaypoint_icarStopId_fkey" FOREIGN KEY ("icarStopId") REFERENCES "IcarStop"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Icar" ADD CONSTRAINT "Icar_icarRouteId_fkey" FOREIGN KEY ("icarRouteId") REFERENCES "IcarRoute"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Schedule" ADD CONSTRAINT "Schedule_icarId_fkey" FOREIGN KEY ("icarId") REFERENCES "Icar"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Schedule" ADD CONSTRAINT "Schedule_icarStopId_fkey" FOREIGN KEY ("icarStopId") REFERENCES "IcarStop"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_scheduleId_fkey" FOREIGN KEY ("scheduleId") REFERENCES "Schedule"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
