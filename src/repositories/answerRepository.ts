import { questions } from "@prisma/client";
import { prisma } from "../config/database";

export async function postAnswer(answeredBy: string, answer: string, questionId: number): Promise<void> {
    await prisma.matter.create({ data: { questionId, answeredBy, answer }});
} 

export async function findQuestionById(id:number): Promise<questions | null> {
    const result: questions | null = await prisma.questions.findUnique({ where: {id}});
    return result;
}

export async function findQuestionIfo(id:number) { 

}