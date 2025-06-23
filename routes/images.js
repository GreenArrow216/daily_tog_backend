const express = require("express");
const router = express.Router();
const { supabase } = require("../utils/supabaseClient");

// // POST /api/images — insert new image metadata
// router.post("/", async (req, res) => {
//   const { name, description, category, tags, image_url } = req.body;

//   const { data, error } = await supabase.from("images").insert([
//     { name, description, category, tags, image_url },
//   ]);

//   if (error) {
//     console.error("Insert error:", error);
//     return res.status(500).json({ error: error.message });
//   }

//   res.status(201).json({ message: "Image metadata saved", data });
// });

// GET /api/images — fetch all images
router.get("/", async (req, res) => {
  const { data, error } = await supabase.from("images").select("*");

  if (error) return res.status(500).json({ error: error.message });

  res.json(data);
});

module.exports = router;
