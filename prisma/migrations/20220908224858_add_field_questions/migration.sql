/*
  Warnings:

  - A unique constraint covering the columns `[question]` on the table `questions` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `question` to the `questions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "questions" ADD COLUMN     "question" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "questions_question_key" ON "questions"("question");
