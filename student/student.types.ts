import { Schema } from "mongoose";

export interface IStudent {
  _id?: any;
  firstName: string;
  lastName: string;
  batch: trackOrBatch;
  track: trackOrBatch;
  isDeleted: boolean;
}
export interface trackOrBatch {
  $oid: Schema.Types.ObjectId;
}
