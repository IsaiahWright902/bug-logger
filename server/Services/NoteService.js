import mongoose from "mongoose";
import Note from "../Models/Note";

const _repository = mongoose.model("Note", Note);

class NoteService {
  async getAll() {
    return await _repository
      .find({})
      .populate("bugId", "title")
  }
  async findById(id) {
    return await _repository.findById(id);
  }

  async getBugById(id) {
    return await _repository.find({ bugId: id })
  }
  async create(rawData) {
    return await _repository.create(rawData);
  }

  async update(id, update) {
    //NOTE {new: true} insures I get the object back after the change
    return await _repository.findByIdAndUpdate(id, update, { new: true });
  }

  async delete(id) {
    await _repository.findByIdAndDelete(id);
  }
}


const noteService = new NoteService();
export default noteService;