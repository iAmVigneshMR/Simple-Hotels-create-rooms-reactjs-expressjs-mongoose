const express = require('express');
const {getAllhotel, savehotel, edithotel, deletehotel,findhotel, usersId } = require('../controllers/hotel.js');

const router = express.Router();

router.route("/getAllhotel").get(getAllhotel);
router.route("/savehotel").post(savehotel);
router.route("/edithotel/:id").put(edithotel);
router.route("/deletehotel/:id").delete(deletehotel);
router.route("/findhotel/:id").get(findhotel);
router.route("/usersId/:id").get(usersId);

module.exports = router