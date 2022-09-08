import { matter, questions } from '@prisma/client';
import { Request, Response } from 'express';
import * as questionService from "../services/questionService"
import * as answerService from "../services/answerService";

export async function createQuestion(req: Request, res: Response) {
  const { askedBy, question }: Omit<questions, 'id'> = req.body;
  await questionService.createQuestion(askedBy,question);
  return res.sendStatus(200);
}

export async function createAnswer(req: Request, res: Response) {
  const  id : number = Number(req.params.id); 
  const { answeredBy, answer }: Omit<matter, 'id'> = req.body; 
  await answerService.createAnswer(answeredBy,answer,id);
  return res.sendStatus(200);
}

export async function get(req: Request, res: Response): Promise<Response<any, Record<string, any>>> {
  const questions = await questionService.getQuestions();
  return res.status(200).json({
    questions: questions
  });
}

export async function getById(req: Request, res: Response) {
  const  id : number = Number(req.params.id); 
  //const questionData = await 
}
