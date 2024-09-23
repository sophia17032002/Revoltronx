const express = require("express");
const cors = require("cors");
const searchRoutes = require("./search");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use("/search", searchRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
