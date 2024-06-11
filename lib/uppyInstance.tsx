"use client";

import "@uppy/core/dist/style.min.css";
import "@uppy/dashboard/dist/style.min.css";

import React, { useEffect, useState } from "react";

import { Dashboard } from "@uppy/react";
import Tus from "@uppy/tus";
import Uppy from "@uppy/core";
import supabase from "./database/supabase";
import { useSupabase } from "@/providers/supabaseProvider";
import { useSession } from "next-auth/react";

const bucketName = "attachement";
const folderName = null;
const supabaseUploadURL = `${process.env.NEXT_PUBLIC_SUPABASE_URL!}/storage/v1/upload/resumable`;

export default function FileUploader() {

  const {data:session}=useSession()
  // IMPORTANT: passing an initializer function to prevent Uppy from being reinstantiated on every render.
  const [uppy,setUppy] = useState <Uppy | null>(null)

  useEffect(() => {
    if (!session) return;
    const upp = new Uppy().use(Tus, {
      endpoint: supabaseUploadURL,
      headers: {
        authorization: `Bearer ${(session.user.supabase_token)}`,
        "x-upsert": "true", // optionally set upsert to true to overwrite existing files
      },
      chunkSize: 6 * 1024 * 1024,
      allowedMetaFields: [
        "bucketName",
        "objectName",
        "contentType",
        "cacheControl",
      ],
    })
    setUppy(upp)
  },[session])
  if (!session || !uppy) return null;

  uppy.on("file-added", (file) => {
    file.meta = {
      ...file.meta,
      bucketName: bucketName,
      objectName: folderName ? `${folderName}/${file.name}` : file.name,
      contentType: file.type,
    };
  });

  uppy.on("error", (error) => {
    console.error("Error", error);
  });

  uppy.on("upload", (data) => {
    console.log("Upload started with data:", data);
  });

  uppy.on("upload-error", (file, error) => {
    console.error("Error uploading file:", file?.name, error);
  });

  uppy.on("complete", (result) => {
    console.log(
      "Upload complete! We’ve uploaded these files:",
      result.successful
    );
  });

  return <Dashboard  uppy={uppy} showProgressDetails={true} /> ;
}