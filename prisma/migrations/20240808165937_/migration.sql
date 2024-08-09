-- CreateTable
CREATE TABLE "Loans" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "document" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "income" DOUBLE PRECISION NOT NULL,
    "location" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Loans_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Loans_document_key" ON "Loans"("document");
