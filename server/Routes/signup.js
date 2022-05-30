const express = require("express");
const router = express.Router();
const { createUserWithEmailAndPassword } = require("firebase/auth");
const { firebaseAuth } = require('../firebaseApp');
const { getDatabase, ref, set } = require('firebase/database');
const { firebaseDatabase }  = require("../firebaseApp");


router.post("/", (req, res) => {
  const { email, password } = req.body;
  createUserWithEmailAndPassword(firebaseAuth, email, password)
    .then((userCredentials) => {
      const user = userCredentials.user;
      res.send(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      res.status(400).send(errorMessage);
    })

    // TODO: create realtime database, add code for inserting user, and initializing it
    
})

module.exports = router;
