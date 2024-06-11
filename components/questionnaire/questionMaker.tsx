"use client"
import { Button, Divider, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ScrollShadow, Textarea } from "@nextui-org/react";
import { useEffect, useRef, useState } from "react"
import { FaTrash } from "react-icons/fa";
import { FaRegCheckSquare } from "react-icons/fa";
import { RxInput } from "react-icons/rx";
import { MdRadioButtonChecked } from "react-icons/md";

export type questionRespond = {
    text: string,
    type: "checkbox" | "input" | "radio"
}

export type question = {
    question: string
    responds: questionRespond[]
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
    const [responds, setResponds] = useState<questionRespond[]>([])
    const [currentRespond, setCurrentRespond] = useState<string>("")
    const [respondType, setRespondType] = useState<"checkbox" | "input" | "radio" | null>(null)

    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    },[respondType])

    const addRespond = () => {
        if(currentRespond.length > 0 && respondType) {
            setResponds([...responds, {text:currentRespond, type: respondType}])
            setCurrentRespond("")
            setRespondType(null)
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
        <Modal size="4xl" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="">Question n° {nbr + 1} :</ModalHeader>
              <ModalBody>
                <div className="relative w-full flex flex-col gap-4 items-center h-[70vh]">
                    <div className="w-full">
                        <h3 className="text-xl font-semibold mb-2">Question: </h3>
                        <Textarea
                            label="Description"
                            placeholder="Enter your description"
                            value={question}
                            onValueChange={setQuestion}
                            />
                    </div>
                    <div className="flex flex-col gap-4 w-full">
                        <div className="w-full">
                            <h3 className="text-xl font-semibold">Responds: </h3>
                            <Divider className="mb-2"/>
                            <div className="flex gap-4">
                                <Button 
                                    className="w-fit"
                                    color="warning"
                                    variant="flat"
                                    onPress={()=>{setRespondType("checkbox")}}
                                >
                                    <FaRegCheckSquare /> Checkbox
                                </Button>
                                <Button 
                                    className="w-fit"
                                    color="warning"
                                    variant="flat"
                                    onPress={()=>{setRespondType("input")}}
                                >
                                    <RxInput /> input
                                </Button>
                                <Button 
                                    className="w-fit"
                                    color="warning"
                                    variant="flat"
                                    onPress={()=>{setRespondType("radio")}}
                                >
                                    <MdRadioButtonChecked /> radio
                                </Button>
                            </div>
                            <Divider className="my-2"/>
                        </div>
                        <ScrollShadow className="flex flex-col gap-4 pb-6 h-[calc(70vh-300px)] overflow-auto">
                        {   responds.length > 0 || respondType ?
                            responds.map((respond, index) => (
                                <div key={index} className="flex justify-between border p-2 rounded-lg shadow-sm">
                                    <div className="flex gap-4 items-center text-lg">
                                        { respond.type === "checkbox" ? <FaRegCheckSquare /> : respond.type === "input" ? <RxInput /> : <MdRadioButtonChecked /> } <h4 className="font-semibold">{respond.text}</h4>
                                    </div>
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
                            )):
                            <div className="w-full h-full flex justify-center items-center">
                                <span className="text-CRM_text-200 text-lg">add some responses</span>
                            </div>
                        }
                        {   respondType ?
                            <Input
                                type="text"
                                label={respondType}
                                autoFocus={true}
                                placeholder="Enter your respond"
                                variant="bordered"
                                value={currentRespond}
                                onValueChange={setCurrentRespond}
                                onKeyDown={(e) => e.code === "Enter" && addRespond()}
                            />:null
                        }
                        <div ref={messagesEndRef} />
                        </ScrollShadow>
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
                  ADD
                </Button>
            </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    )
}