
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const mockSchema = new Schema({
   name: String,
   place: String
})

const mockModel = mongoose.model('mock', mockSchema, 'mock');
export default mockModel;
