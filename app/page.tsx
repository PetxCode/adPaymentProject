"use client";

// import { imageUpload } from "@/utils/imageUpload";
import { File } from "buffer";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

import React, { useContext, useState } from "react";
import { GlobalContext } from "./global/GlobalProvider";

const page = () => {
  const {
    setAmount,
    amount,
    setEmail,
    setLink,
    setTitle,
    setImageURL,
    setImageURLID,

    link,
    title,
    imageURL,
    imageURLID,
  }: any = useContext(GlobalContext);
  const [toggle, setToggle] = useState<boolean>(false);
  const [state, setState] = useState<string>("");

  const uploadAd = async (formData: FormData) => {
    const title = formData.get("title") as string;
    const link = formData.get("link") as string;
    const amount = formData.get("amount") as string;
    const email = formData.get("email") as string;

    const image = formData.get("image") as File | null;

    setAmount(amount);
    setEmail(email);
    setLink(link);
    setTitle(title);
    setImageURL(
      "https://res.cloudinary.com/druv5bmxf/image/upload/v1724076566/kd49bqqhni8k35bby5hz.webp"
    );
    setImageURLID("imageNumber");

    localStorage.setItem(
      "payment",
      JSON.stringify({
        link,
        title,
        imageURL:
          "https://res.cloudinary.com/druv5bmxf/image/upload/v1724076566/kd49bqqhni8k35bby5hz.webp",
        imageURLID: "Number 2",
      })
    );

    // const file = await image!.arrayBuffer();
    // const buffer: Uint8Array = new Uint8Array(file);

    const data = await fetch("http://localhost:3000/api/payment", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({
        amount,
        email,
      }),
    })
      .then(async (res) => {
        return await res.json();
      })
      .then(async (res: any) => {
        setState(await res?.data?.data?.authorization_url);
        return res?.data?.data?.authorization_url;
      })
      .then((res) => {
        redirect(res);
      })
      .finally(() => {
        setToggle(false);
      });

    // revalidateTag("images");

    console.log("reading state", state);
  };

  return (
    <div>
      {amount!}
      <div className="mt-10">
        <form action={uploadAd}>
          <div className="flex flex-col mb-3">
            <label className="text-[12px] font-semibold mb-1">Title</label>
            <input
              placeholder="Title"
              className="h-[45px] w-[300px] border rounded-md pl-2"
              name="title"
            />
          </div>
          <div className="flex flex-col mb-3">
            <label className="text-[12px] font-semibold mb-1">Email</label>
            <input
              placeholder="Email"
              className="h-[45px] w-[300px] border rounded-md pl-2"
              name="email"
            />
          </div>
          <div className="flex flex-col mb-3">
            <label className="text-[12px] font-semibold mb-1">Amount</label>
            <input
              placeholder="Amount"
              className="h-[45px] w-[300px] border rounded-md pl-2"
              name="amount"
            />
          </div>
          <div className="flex flex-col mb-3">
            <label className="text-[12px] font-semibold mb-1">Link</label>
            <input
              placeholder="Link"
              className="h-[45px] w-[300px] border rounded-md pl-2"
              name="link"
            />
          </div>
          <div className="flex flex-col mb-3">
            <label
              className="text-[12px] font-semibold mb-1 cursor-pointer"
              htmlFor="image"
            >
              Image
            </label>
            <input
              placeholder="Link"
              className="h-[45px] w-[300px] border rounded-md pl-2 hidden"
              name="image"
              type="file"
              accept="image/*"
              id="image"
            />
          </div>

          <button
            className="bg- h-[45px] w-[300px] border rounded-md pl-2 bg-blue-950 text-white"
            onClick={() => {
              setToggle(true);
            }}
          >
            {toggle ? "Loading..." : "Add to Add-List"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
