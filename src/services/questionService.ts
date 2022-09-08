import { questions } from "@prisma/client";
import { allQuestions, findQuestion, postQuestions } from "../repositories/questionRepository";

async function findQuestions(question:string) {
    const questions = await findQuestion(question);
    if(questions) { 
        throw { type: "unauthorized"}
    }
}

export async function createQuestion(askedBy: string, question: string) { 
    await findQuestions(question);
    await postQuestions(askedBy,question);
}

export async function getQuestions(): Promise<questions[]> { 
    const questions: questions[] = await allQuestions();
    return questions;
}
