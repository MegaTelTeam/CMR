"use client"
import { question } from "./questionMaker"
import { Button } from "@nextui-org/react"
import { FaTrash } from "react-icons/fa"

export default function QuestionCard({
    question,
    index,
    removeQuestion
}:{
    question: question,
    index: number,
    removeQuestion?: (index: number) => void
}) {
    
    return(
        <div className="border p-4 rounded-lg w-[300px] relative">
            <h3 className="text-xl font-semibold">{question.question}</h3>
            <ul>
                {
                    question.responds.map((respond) => (
                        <li key={respond.text}>{respond.text}</li>
                    ))
                }
            </ul>
            <Button
                className="absolute bottom-2 right-2"
                isIconOnly
                color="danger"
                variant="light"
                onPress={()=>{
                    if(removeQuestion) removeQuestion(index)
                }}
                size="sm"
                radius="full"
            >
                <FaTrash />
            </Button>
        </div>
    )
}