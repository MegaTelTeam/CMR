"use client"
import React, { useState } from "react";
import { Button, useDisclosure} from "@nextui-org/react";
import {QuestionMaker, question} from "./questionMaker";
import QuestionCard from "./questionCard";

import { addSurvay as addSurvayAction, getAllSurvays as getAllSurvaysAction } from "@/lib/actions/survays.action";


export default function SurvayComponent() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [questions, setQuestions] = useState<question[]>([]);

  const addQuestion = (question: question) => {
      setQuestions(prev=>[...prev, question])
  }

  const submit = () => {
    // addSurvayAction({questions})
    // .then((res)=>{
    //     if(res){
    //         console.log("success")
    //         setQuestions([])
    //     }
    // })
    // .catch((err)=>{
    //     console.log(err)
    // })

    getAllSurvaysAction().then((data)=>{
        console.log(data)
    })
  }

  const removeQuestion = (index:number) =>{
    setQuestions(questions.filter((_, i) => i !== index))
  }

  return (
    <div className="size-full flex flex-col">
        <div className="w-full flex gap-4 flex-wrap">
            <QuestionMaker nbr={questions.length} addQuestion={addQuestion} isOpen={isOpen} onOpenChange={onOpenChange}/>
            {
                questions.map((question, index) => (
                <QuestionCard key={index} question={question} index={index} removeQuestion={removeQuestion}/>
                ))
            }
            <Button 
                className="w-[300px]" 
                variant="flat" 
                onPress={onOpen}
            >
                    Add Question
            </Button>
        </div>
        <div className="flex-grow"/>
        <div className="flex justify-end w-full">
            <Button 
                className="w-[300px]" 
                variant="flat"
                color="primary" 
                onPress={submit}
            >
                    submit
            </Button>
        </div>
    </div>
  );
}
