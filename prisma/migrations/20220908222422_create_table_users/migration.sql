-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "nickname" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_nickname_key" ON "users"("nickname");
