import { BatchModel } from "./batch.schema";
import { IBatch } from "./batch.types";

const createBatch = (batch: IBatch) => BatchModel.create(batch);

const readBatch = () => BatchModel.find();

const readBatchById = (id: string) => BatchModel.findById(id);

const updateBatchById = (id: string, batch: IBatch) => BatchModel.findByIdAndUpdate(id, batch, { new: true });

const deleteBatch = (id: string) => BatchModel.findByIdAndUpdate(id, { isDeleted: true }, { new: true });

export default {
    createBatch,
    readBatch,
    readBatchById,
    updateBatchById,
    deleteBatch
}
