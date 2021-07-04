import BatchRepo from "./batch.repo";
import { IBatch } from "./batch.types";

const createBatch = (batch: IBatch) => BatchRepo.createBatch(batch);

const readBatch = () => BatchRepo.readBatch();

const readBatchById = (id: string) => BatchRepo.readBatchById(id);

const updateBatchById = (id: string, batch: IBatch) => BatchRepo.updateBatchById(id, batch);

const deleteBatch = (id: string) => BatchRepo.deleteBatch(id);

export default {
    createBatch,
    readBatch,
    readBatchById,
    updateBatchById,
    deleteBatch
}