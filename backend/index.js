const express = require("express");
const { PrismaClient } = require("@prisma/client");
const fileUpload = require("express-fileupload");
const productRoutes = require("./routes/product.routes.js")
const cors = require("cors");

const prisma = new PrismaClient();
const app = express();

app.use(express.json());
app.use(cors());
app.use(fileUpload());

app.use('/api', productRoutes )

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
