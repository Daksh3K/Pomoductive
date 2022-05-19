const express = require('express');
const router = express.Router();
const { signInWithEmailAndPassword } = require('firebase/auth');
const { firebaseAuth } = require('../firebaseApp');

router.post("/", (req, res) => {
  const { email, password } = req.body;
  signInWithEmailAndPassword(firebaseAuth, email, password)
    .then((userCredentials) => {
      const user = userCredentials.user;
      res.send(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      res.status(400).send(errorMessage);
    })
})

module.exports = router;

