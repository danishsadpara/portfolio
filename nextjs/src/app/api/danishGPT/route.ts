// app/api/danish-gpt/route.ts
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.resolve("./public/details.json");
const jsonData = JSON.parse(fs.readFileSync(filePath, "utf8"));

export async function GET(request: Request) {
  const url = new URL(request.url);
  const question = url.searchParams.get("question") || "";

  let response: string;

  if (question.includes("name")) {
    response = `My name is ${jsonData.name}.`;
  } else if (question.includes("email")) {
    response = `My email is ${jsonData.email}.`;
  } else if (question.includes("age")) {
    response = `I am ${jsonData.age} years old.`;
  } else if (question.includes("city")) {
    response = `I live in ${jsonData.city}.`;
  } else if (question.includes("designation")) {
    response = `I work as a ${jsonData.designation}.`;
  } else {
    response = "I'm not sure how to answer that.";
  }

  return NextResponse.json({ response });
}
