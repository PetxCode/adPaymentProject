"use client";

import React, { createContext, FC, ReactNode, useState } from "react";

interface iProsp {
  children?: ReactNode;
  amount?: string;
  setAmount?: React.Dispatch<React.SetStateAction<string>>;
  email?: string;
  setEmail?: React.Dispatch<React.SetStateAction<string>>;
  link?: string;
  setLink?: React.Dispatch<React.SetStateAction<string>>;
  title?: string;
  setTitle?: React.Dispatch<React.SetStateAction<string>>;
  imageURL?: string;
  setImageURL?: React.Dispatch<React.SetStateAction<string>>;
  imageURLID?: string;
  setImageURLID?: React.Dispatch<React.SetStateAction<string>>;
}

interface iProsp {}

export const GlobalContext = createContext({} as iProsp);

export const GlobalProvider: FC<iProsp> = ({ children }: any) => {
  const [amount, setAmount] = useState("");
  const [email, setEmail] = useState("");
  const [link, setLink] = useState("");
  const [title, setTitle] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [imageURLID, setImageURLID] = useState("");
  return (
    <GlobalContext.Provider
      value={{
        amount,
        setAmount,
        email,
        setEmail,
        link,
        setLink,
        title,
        setTitle,
        imageURL,
        setImageURL,
        imageURLID,
        setImageURLID,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
