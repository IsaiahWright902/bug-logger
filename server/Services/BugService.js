import mongoose from "mongoose";
import Bug from "../Models/Bug";

const _repository = mongoose.model("Bug", Bug);

class BugService {
  async getAll() {
    return await _repository.find({});
  }
  async findById(id) {
    return await _repository.findById(id);
  }
  async create(rawData) {
    return await _repository.create(rawData);
  }

  async update(id, update) {
    let bug = await _repository.findById(id)
    // @ts-ignore
    if (bug.closed = false) {
      //NOTE {new: true} insures I get the object back after the change
      return await _repository.findByIdAndUpdate(id, update, { new: true });
    }
    else {
      "bug is already closed"
    }
  }

  async delete(id) {
    // let bug = await _repository.findById(id)
    // @ts-ignore
    let update = { closed: true }
    return await _repository.findByIdAndUpdate(id, update, { new: true });
  }
}


const bugService = new BugService();
export default bugService;
