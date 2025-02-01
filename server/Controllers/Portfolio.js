const router = require("express").Router();
const db = require("../db");

//this is being built with mySQL, if we switch to mongo DB, we will need to change how we call things, but it'll be a solid start.

// Portfolio endpoints

// get all portfolio pictures (main portfolio)
router.get("/view-all", async (req, res) => {
  try {
    const sql = "SELECT * FROM images"; // finish "images" with server table. * selects all
    db.query(sql, (err, results) => {
      if (err) {
        throw err;
      }
      if (results.length === 0) {
        res.status(404).json({ message: "No Images Found" });
      } else {
        res.json({ images: results });
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete Photo (will be used for victoria's admin functionallity)
router.delete("/delete/:image_id", async (req, res) => {
  try {
    const imageId = req.params.image_id;
    const query = `DELETE FROM images WHERE id = ${image_id}`;
    db.query(query, (err, results) => {
      if (err) {
        throw err;
      }
      if (results.length === 0) {
        res.status(404).json({ message: "Image not found" });
      } else {
        res.json({ message: "image deleted" });
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST Photo (will be used for victoria's admin functionallity)
router.post("/new", async (req, res) => {
  try {
    // const {variables} = req.body camma delimmited variables for image storage
    // db.query(`INSERT INTO images(variables needed) VALUES (variables needed)`,[variables]
    (error, results, fields) => {
      if (err) {
        throw err;
      }
      console.log(results);
    };
    //)
    res.json({ message: "New Image Added" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
