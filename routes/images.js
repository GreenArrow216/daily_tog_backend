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

router.get("/category/:category", async (req, res) => {
  const category = req.params.category;

  const allowedCategories = ["street", "black-and-white", "travel", "animals"];
  if (!allowedCategories.includes(category)) {
    return res.status(400).json({ error: "Invalid category" });
  }

  const { data, error } = await supabase
    .from("images")
    .select("*")
    .eq("category", category);

  if (error) return res.status(500).json({ error: error.message });

  res.json(data);
});

module.exports = router;
