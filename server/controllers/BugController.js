import express from "express";
import BugService from "../Services/BugService";
import NoteService from "../Services/NoteService";


export default class BugController {
  constructor() {
    this.router = express
      .Router()
      .get("", this.getAll)
      .get("/:id", this.getById)
      .get("/:id/notes", this.getBugById)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete);
  }
  async getAll(req, res, next) {
    try {
      let data = await BugService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async getById(req, res, next) {
    try {
      let data = await BugService.findById(req.params.id);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async getBugById(req, res, next) {
    try {
      let data = await NoteService.getBugById(req.params.id);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      let data = await BugService.create(req.body);
      res.status(201).send(data);
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    try {
      let data = await BugService.update(req.params.id, req.body);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async delete(req, res, next) {
    try {
      await BugService.delete(req.params.id);
      res.send("Closed");
    } catch (error) {
      next(error);
    }
  }

}
