import { matter, questions } from "@prisma/client";
import { findQuestionById, findQuestionIfo, postAnswer } from "../repositories/answerRepository";

export async function createAnswer(answeredBy: string, answer: string, id:number) { 
    const question = await findQuestionById(id);
    if(!question) { 
        throw {type: "not_found"}
    }
    await postAnswer(answeredBy,answer,id);
}

export async function getQuestionInfo(id:number): Promise<(questions & {
    matter: matter[];
}) | null> { 
    const questions = await findQuestionIfo(id);
    return questions;
}
