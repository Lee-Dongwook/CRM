import OpenAI from "openai";
import { prismadb } from "./prisma";

export async function openAiHelper(userId: string) {
  const openAiKey = await prismadb.systemServices.findFirst({
    where: {
      name: "openAiKey",
    },
  });

  const userOpenAiKey = await prismadb.openAi_keys.findFirst({
    where: {
      user: userId,
    },
  });

  let apiKey = openAiKey?.serviceKey || userOpenAiKey?.api_key;

  if (!apiKey) {
    if (!process.env.OPENAI_API_KEY) {
      console.log("No API key found in the environment");
      return null;
    }
    apiKey = process.env.OPENAI_API_KEY;
  }

  const openai = new OpenAI({
    apiKey: apiKey,
  });

  return openai;
}
