"use client";

import axios from "axios";
import { useSearchParams } from "next/navigation";
import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../global/GlobalProvider";

const page = () => {
  const searchParams = useSearchParams();

  const search = searchParams.get("reference");

  const { link, title, imageURL, imageURLID }: any = useContext(GlobalContext);

  console.log(title, link, imageURL, imageURLID);

  const confirmPayment = async () => {
    await axios
      .post("http://localhost:3000/api/verify", { refValue: search })
      .then(async (res) => {
        if (res?.data?.data?.data?.reference === search) {
          const readData = JSON.parse(localStorage.getItem("payment")!);

          if (readData !== null || undefined) {
            await fetch("http://localhost:3000/api", {
              method: "POST",
              headers: {
                "Content-Type": "Application/json",
              },
              body: JSON.stringify({
                title: readData?.title,
                link: readData?.link,
                imageURL: readData?.imageURL,
                imageURLID: readData?.imageURLID,
              }),
            }).then(() => {});
          }
        }
      });
  };

  useEffect(() => {
    confirmPayment();
  }, []);

  return <div>Payment success Page</div>;
};

export default page;
