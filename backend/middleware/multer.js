import multer from "multer";
const storage = multer.diskStorage({
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  },
});

const upload = multer({ storage });

export default upload;  


// import multer from "multer";
// import path from "path";
// import fs from "fs";

// // Ensure the uploads folder exists
// const uploadDir = "backend/uploads"; // ✅ Use relative path
// if (!fs.existsSync(uploadDir)) {
//   fs.mkdirSync(uploadDir, { recursive: true });
// }

// const storage = multer.diskStorage({
//   destination: function (req, file, callback) {
//     callback(null, uploadDir); // ✅ Save files inside uploads/
//   },
//   filename: function (req, file, callback) {
//     callback(null, Date.now() + path.extname(file.originalname)); // ✅ Unique filename
//   },
// });

// const upload = multer({ storage });

// export default upload;
