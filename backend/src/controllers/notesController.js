export const getAllNotes = (request, response) => {
  response.status(200).send("You just fetched the notes");
};

export const createNotes = (request, response) => {
  response.status(201).send("Note created successfully");
};

export const updateNotes = (request, response) => {
  response.status(200).send("Note updated successfully");
};

export const deleteNotes = (request, response) => {
  response.status(200).send("Note deleted successfully");
};
