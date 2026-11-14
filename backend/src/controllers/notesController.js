import { request } from "express";
import Note from "../models/Note.js";

export const getAllNotes = async (_, response) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    response.status(200).json(notes);
  } catch (error) {
    console.error("Error in getAllNotes controller", error);
    response.status(500).json({ message: "Internal Server Error" });
  }
};

export const getNoteById = async (request, response) => {
  try {
    const note = await Note.findById(request.params.id);
    if (!note) {
      response.status(404).json({ message: "Note couldn't be found" });
    }
    response.status(200).json(note);
  } catch (error) {
    console.error("Error in getNoteById controller", error);
    response.status(500).json({ message: "Internal Server Error" });
  }
};

export const createNotes = async (request, response) => {
  try {
    const { title, content } = request.body;
    const newNote = new Note({ title: title, content: content });

    const savedNote = await newNote.save();
    response.status(201).json(savedNote);
  } catch (error) {
    console.error("Error in createNotes controller", error);
    response.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateNotes = async (request, response) => {
  try {
    const { title, content } = request.body;
    const updatedNote = await Note.findByIdAndUpdate(
      request.params.id,
      { title, content },
      { new: true },
    );
    if (!updatedNote) {
      return response.status(404).json({ message: "Note couldn't be found" });
    }
    response.status(200).json(updatedNote);
  } catch (error) {
    console.error("Error in updateNotes controller", error);
    response.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteNotes = async (request, response) => {
  try {
    const deletedNote = await Note.findByIdAndDelete(request.params.id);
    if (!deletedNote) {
      return response.status(404).json({ message: "Note couldn't be found" });
    }
    response.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    console.error("Error in deleteNotes controller", error);
    response.status(500).json({ message: "Internal Server Error" });
  }
};
