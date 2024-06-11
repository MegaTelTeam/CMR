"use client"
import { useState } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input} from "@nextui-org/react";
import { AddUser } from "@/lib/actions/user.action";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { IoPersonAdd } from "react-icons/io5";
import { userCred } from "./userTable";

export default function AddUserModal({
    AddUsers,
}:{
    AddUsers?:(user:userCred)=>void
}) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const submit = (e:React.FormEvent<HTMLFormElement>, onClose:()=>void)=>{
    e.preventDefault();

    AddUser({email,username,password})
    .then((user)=>{
        AddUsers?.(user)
        onClose();
    }).catch((err)=>{
        console.log(err)
    })
  }

  return (
    <>
      <Button variant="flat" color="warning" onPress={onOpen}><IoPersonAdd />Add User</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Create new User</ModalHeader>
              <form onSubmit={(e)=>{submit(e, onClose)}}>
              <ModalBody>
                <Input
                  variant="bordered"
                  label="Email"
                  type="email"
                  value={email}
                  onValueChange={setEmail}
                />
                <Input
                    label="Username"
                    variant="bordered"
                    value={username}
                    onValueChange={setUsername}
                />
                <Input
                    label="Password"
                    variant="bordered"
                    endContent={
                        <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                        {isVisible ? (
                            <FaEyeSlash className="text-2xl text-default-400 pointer-events-none" />
                        ) : (
                            <FaEye className="text-2xl text-default-400 pointer-events-none" />
                        )}
                        </button>
                    }
                    type={isVisible ? "text" : "password"}
                    value={password}
                    onValueChange={setPassword}
                    />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button type="submit" color="primary">
                  Add User
                </Button>
              </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
