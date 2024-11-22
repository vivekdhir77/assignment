const person = {
    id: 1, 
    name: "CS8000",
    description: "Initial Module",
    course: "cs",
  };
  export default function my(app) {
    app.get("/lab5/module", (req, res) => {
      res.json(person);
    });
    app.get("/lab5/module/name", (req, res) => {
        res.json(person.name);
      });
    app.get("/lab5/module/name/:newName", (req, res) => {
    const { newName } = req.params;
    person.name = newName;
    res.json(person);
    });
  };
  