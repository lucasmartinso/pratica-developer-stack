import { questions } from "@prisma/client";
import { prisma } from "../config/database";

export async function postQuestions(askedBy: string, question: string): Promise<void> {
    await prisma.questions.create({ data: { askedBy, question }});
} 

export async function findQuestion( question: string): Promise<questions | null> {
    const result: questions | null =  await prisma.questions.findFirst({ where: { question }});
    return result;
}

export async function allQuestions():  Promise<questions[]>  {
    const result = await prisma.questions.findMany();
    return result;
}