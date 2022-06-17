"use strict";

const express = require("express");
const router = express.Router();
const moment = require("moment");

const categoryValues = ["Personal", "Work", "School", "Cleaning", "Other"];
let allNotes = [
  { description: "vfs", category: "Personal", date: "Jun 13, 2022" },
  { description: "gsdh", category: "Personal", date: "Jun 14, 2022" },
  { description: "ghsdhr", category: "Personal", date: "Jun 15, 2022" },
];

router.get("/", (req, res) => {
  // console.log("allNotes = ", allNotes);
  return res.render("all_notes", {
    todo_list: allNotes,
    category_dropdown: categoryValues,
  });
});
router.post("/craete-note", (req, res) => {
  let form = req.body;
  if (form.date) {
    form.date = moment(form.date, "YYYY-MM-DD").format("ll");
  }
  allNotes.push(req.body);
  return res.redirect("/");
});
router.get("/delete-note/:index", (req, res) => {
  let idx = req.params.index;
  if (idx > -1) {
    allNotes.splice(idx, 1);
  }
  return res.redirect("/");
});

module.exports = router;
