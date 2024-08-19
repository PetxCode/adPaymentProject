import { Types } from "mongoose";
import { Schema, models, model } from "mongoose";
interface iAd {
  title: string;
  link: string;
  imageURL: string;
  imageURLID: string;
}

interface iAdData extends iAd, Document {}

const adData = new Schema<iAdData>(
  {
    title: {
      type: String,
    },
    link: {
      type: String,
    },
    imageURL: {
      type: String,
    },
    imageURLID: {
      type: String,
    },
  },
  { timestamps: true }
);

const AdModel = models.myAds || model<iAdData>("myAds", adData);

export default AdModel;
