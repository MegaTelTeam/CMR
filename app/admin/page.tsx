"use client"
import { Input , Button, Checkbox, Link} from "@nextui-org/react"
import { useState } from "react";
import Image from 'next/image'
import { FaEye, FaEyeSlash} from "react-icons/fa";
import { signIn} from "next-auth/react"
import { useRouter } from "next/navigation";
import NextLink from 'next/link'

export default function LoginForm() {
    const [isVisible, setIsVisible] = useState(false);
    const [isInvalid, setIsInvalid] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);

    const [formData, setFormData] = useState({
        email:"",
        password:""
    })

    const updateFormData = (e:any, atr:string)=>{
        setFormData((prev)=>{
            return {...prev, [atr]:e.target.value}
        })
    }
    
    const router=useRouter()

    const toggleVisibility = () => setIsVisible(!isVisible);

    const submit = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        setIsDisabled(true)

        signIn("credentials", {...formData, redirect:false}).then((res)=>{
            if(res?.error){
                throw Error("invalid credentials")
            }
            if(res?.ok && !res.error){
                router.push("/")
            }
        }).catch((error)=>{
            console.log(error)
            // Todo: add toast
            setIsInvalid(true)
        }).finally(()=>{
            setIsDisabled(false)
        })
    }

    return (
        <div className="flex bg-black h-screen relative justify-center items-center overflow-hidden">
            {/* el reflet */}
        <div className=" fixed z-0 w-[700px] h-[700px] rounded-full blur-3xl bg-[#D3570D]/10 rotate-45 bg-gradient-radial left-[-10%] top-[-30%] "></div>
        <div className="fixed z-0 w-[700px] h-[700px] rounded-full blur-3xl bg-[#D3570D]/10 rotate-45 bg-gradient-radial right-[-10%] bottom-[-30%] "></div>
        <div className="w-[50%] h-full flex justify-center items-center">
        <div className="z-0 absolute top-0 left-0 w-[30%] h-[100%] bg-[#D3570D]/70 " data-aos="slide-right"
            data-aos-duration="500"></div>
          <Image
            src="/bg3.jpg"
            width={400}
            height={400}
            alt="Picture of the author"
            className="brightness-75 w-[80%] h-[75%] object-cover object-left-bottom"
            data-aos="slide-right"
            data-aos-duration="500"
          />
        </div>
        <div className="w-[50%] h-full flex justify-center items-center mt-10 pr-10">
            <div className="z-10 w-full h-[70%] text-white  backdrop-blur-3xl p-10   sm:rounded-3xl sm:w-[640px]  transition-all delay-200" data-aos="fade-down"
            data-aos-duration="500" data-aos-once="true">
                <h1 className=" sm:text-center text-4xl font-semibold  text-logo_color  mb-10">Welcome Back</h1>
                <form onSubmit={submit}>
                <Input className="dark mb-3" 
                    isRequired
                    variant="bordered" 
                    type="email" 
                    label="Email"
                    value={formData.email}
                    onChange={(e)=>updateFormData(e,"email")}
                    isDisabled={isDisabled}
                    isInvalid={isInvalid}
                    errorMessage={isInvalid? "invalide credentials" : null}
                />
                <Input className="dark mb-8 " 
                    isRequired
                    variant="bordered" 
                    value={formData.password}
                    onChange={(e)=>updateFormData(e,"password")}
                    size="md"
                    type={isVisible ? "text" : "password"}
                    label="Password"
                    isDisabled={isDisabled}
                    isInvalid={isInvalid}
                    errorMessage={isInvalid? "invalide credentials" : null}
                    endContent={
                        <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                        {isVisible ? (
                            <FaEye/>
                        ) : (
                            <FaEyeSlash/>
                        )}
                        </button>
                    }
                />
                <div className="flex w-full justify-between mb-6">
                    <Checkbox isDisabled={isDisabled} color="warning" className="ml-[1px]"  defaultSelected={false}><p className="text-white">Remember me</p></Checkbox>
                    <Link href="#" underline="hover" className="text-logo_color">Forgot password ?</Link>
                </div>
                <Button className="dark w-full bg-logo_color/70 mb-6 text-white" 
                    isDisabled={isDisabled}
                    type="submit"
                    size="lg"
                    >
                    Login into account
                </Button>
                </form>
                <p>Don’t have an account yet ? <Link href="/signup" as={NextLink} className="text-logo_color" underline="hover">Sign up here</Link></p>
            </div>
            </div>
        </div>
    );
  }