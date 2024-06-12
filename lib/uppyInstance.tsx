"use client";

import "@uppy/core/dist/style.min.css";
import "@uppy/dashboard/dist/style.min.css";
import {  addNews } from "@/app/api/addNews.action"
import React, { useEffect, useState } from "react";
import { Dashboard } from "@uppy/react";
import Tus from "@uppy/tus";
import Uppy from "@uppy/core";
import { useSession } from "next-auth/react";
import { Button, Input, Textarea } from "@nextui-org/react";
import AddLinkButton from "@/components/dashboard/news/addLinkButton";

const bucketName = "attachement";
const folderName = null;
const supabaseUploadURL = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/upload/resumable`;

export default function FileUploader() {
  const { data: session } = useSession();
  const [uppy, setUppy] = useState<Uppy | null>(null);
  const [publicURLs, setPublicURLs] = useState<string[]>([]);
  const [title,setTitle]=useState("")
  const [content,setContent]=useState("")


  const AddNews=()=>{
      if(title==="" || content===""){
          console.log("missing title or content")
          return
      }
      addNews({title,content,attachement:publicURLs})
      setTitle("")
      setContent("")
      setPublicURLs([])
    }
  
  const AddLinkToContent=(link:string ,linkText:string)=>{
      setContent(content+`<a href="${link}">${linkText}</a>`)
  }

  useEffect(() => {
    if (!session) return;

    const upp = new Uppy()
      .use(Tus, {
        endpoint: supabaseUploadURL,
        headers: {
          authorization: `Bearer ${session.user.supabase_token}`,
          "x-upsert": "true", // optionally set upsert to true to overwrite existing files
        },
        chunkSize: 6 * 1024 * 1024,
        allowedMetaFields: ["bucketName", "objectName", "contentType", "cacheControl"],
      });

    upp.on("file-added", (file) => {
      file.meta = {
        ...file.meta,
        bucketName: bucketName,
        objectName: folderName ? `${folderName}/${file.name}` : file.name,
        contentType: file.type,
      };
    });

    upp.on("error", (error) => {
      console.error("Error", error);
    });

    upp.on("upload", (data) => {
      console.log("Upload started with data:", data);
    });

    upp.on("upload-error", (file, error) => {
      console.error("Error uploading file:", file?.name, error);
    });

    upp.on("complete", (result) => {
      const publicURLList = result.successful.map((file) => {
        const fileName = folderName ? `${folderName}/${file.name}` : file.name;
        return `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${bucketName}/${fileName}`;
      });

      setPublicURLs(prev=>[...prev, ...publicURLList]);//.concat(publicURLList);

      console.log("Upload complete! We’ve uploaded these files:", result.successful);
      console.log("Public URLs:", publicURLList);
    });

    setUppy(upp);

    // Cleanup on unmount
    return () => {
      upp.close();
    };
  }, [session]);

  if (!session || !uppy) return null;

  return (
    <div>
      <Input label="title" className="mb-4" value={title} onChange={(e)=>setTitle(e.target.value)}/>
      <Textarea label="content" className="mb-4" value={content} onChange={(e)=>setContent(e.target.value)}/>
      <Dashboard uppy={uppy} showProgressDetails={true} />
      {/* <div>
        <h3>Uploaded Files:</h3>
        <ul>
          {publicURLs.map((url, index) => (
            <li key={index}>
              <a href={url} target="_blank" rel="noopener noreferrer">
                {url}
              </a>
            </li>
          ))}
        </ul>
      </div> */}
      <div className="flex justify-between">
        <Button className="mt-4" onClick={AddNews}>Create</Button>
        <AddLinkButton urls={publicURLs}/>
      </div>
    </div>
    
  );
}
