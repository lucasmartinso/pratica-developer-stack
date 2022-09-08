-- CreateTable
CREATE TABLE "questions" (
    "id" SERIAL NOT NULL,
    "askedById" INTEGER NOT NULL,
    "question" TEXT NOT NULL,

    CONSTRAINT "questions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "questions" ADD CONSTRAINT "questions_askedById_fkey" FOREIGN KEY ("askedById") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
