const express = require("express");
const router = express.Router();
const path = require("path");

router.post("/service", (req, res) => {
  if (req.file === null) {
    return res.status(400).json({ msg: "No file upload" });
  }
  const file = req.files.file;
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    if (file.size > 200000)
      return res.json({ err: "Zdjęcie nie może przekraczać 200kb" });
    if (file.mimetype === "image/jpeg")
      file.name = Math.random() * 100000000000000000 + ".jpg";
    else if (file.mimetype === "image/png")
      file.name = Math.random() * 100000000000000000 + ".png";

    const filePath = path.join(__dirname, "/../client/build/assets", file.name);
    file.mv(filePath, err => {
      if (err) {
        return res.status(500).send(err);
      }
      res.json({ fileName: file.name });
    });
  } else {
    return res.json({ err: "Nieprwidłowy format" });
  }
});

module.exports = router;
