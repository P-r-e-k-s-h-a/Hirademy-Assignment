
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/assistantDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

const assistantRoutes = require("./routes/assistantRoutes");
app.use("/api", assistantRoutes);
