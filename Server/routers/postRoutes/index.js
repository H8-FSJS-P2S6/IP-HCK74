const router = require("express").Router();
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const Post = require("../../controllers/postController");
const authentication = require("../../middlewares/authentication");

router.get("/", Post.getAllPost);
router.post("/", authentication, upload.single("imgUrl"), Post.createPost);
router.post("/:id", authentication, Post.toggleLike);

module.exports = router;
