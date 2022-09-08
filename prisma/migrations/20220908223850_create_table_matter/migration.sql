-- CreateTable
CREATE TABLE "matter" (
    "id" SERIAL NOT NULL,
    "answeredById" INTEGER NOT NULL,
    "questionId" INTEGER NOT NULL,
    "answer" TEXT NOT NULL,

    CONSTRAINT "matter_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "matter" ADD CONSTRAINT "matter_answeredById_fkey" FOREIGN KEY ("answeredById") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "matter" ADD CONSTRAINT "matter_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "questions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
