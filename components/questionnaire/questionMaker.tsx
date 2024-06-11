"use client"
import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Textarea } from "@nextui-org/react";
import { useState } from "react"
import { FaTrash } from "react-icons/fa";

export type question = {
    question: string
    responds: string[]
}

export function QuestionMaker({
    addQuestion,
    isOpen,
    onOpenChange,
    nbr
}:{
    addQuestion?: (question:question) => void,
    isOpen: boolean,
    onOpenChange?: (isOpen: boolean) => void,
    nbr: number
}) {
    const [question, setQuestion] = useState<string>("")
    const [responds, setResponds] = useState<string[]>([])
    const [currentRespond, setCurrentRespond] = useState<string>("")

    const addRespond = () => {
        if(currentRespond.length > 0) {
            setResponds([...responds, currentRespond])
            setCurrentRespond("")
        }
    }

    const removeRespond = (index:number) => setResponds(responds.filter((_, i) => i !== index))

    const onSubmit = (onClose: () => void) => {
        if(question.length > 0 && responds.length > 0 && addQuestion) {
            addQuestion({question, responds})
            setQuestion("")
            setResponds([])
            onClose()
        }
    }

    return(
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Question n° {nbr + 1} :</ModalHeader>
              <ModalBody>
                <div className="relative size-full flex flex-col gap-4 items-center">
                    <div className="">
                        <h3 className="text-xl font-semibold mb-2">Question: </h3>
                        <Textarea
                            label="Description"
                            placeholder="Enter your description"
                            className="max-w-xs"
                            value={question}
                            onValueChange={setQuestion}
                            />
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className="text-xl font-semibold">Responds: </h3>
                        {
                            responds.map((respond, index) => (
                                <div key={index} className="flex justify-between">
                                    <h4>{respond}</h4>
                                    <Button
                                        isIconOnly
                                        color="danger"
                                        variant="light"
                                        onPress={()=>{removeRespond(index)}}
                                        size="sm"
                                        radius="full"
                                    >
                                        <FaTrash />
                                    </Button>
                                </div>
                            ))
                        }
                        <Input
                            type="text"
                            label="respond"
                            placeholder="Enter your respond"
                            className="max-w-xs"
                            value={currentRespond}
                            onValueChange={setCurrentRespond}
                            onKeyDown={(e) => e.code === "Enter" && addRespond()}
                        />
                        <Button 
                            isDisabled={currentRespond.length === 0}
                            onClick={addRespond}
                        >
                            Add
                        </Button>
                    </div>
                </div>
            </ModalBody>
            <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button 
                    color="primary" 
                    isDisabled={question.length === 0 || responds.length === 0 || !addQuestion}
                    onPress={()=>{onSubmit(onClose)}}
                >
                  Action
                </Button>
            </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    )
}