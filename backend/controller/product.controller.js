const { PrismaClient } = require("@prisma/client");
const AWS = require("aws-sdk");
const path = require("path");
const prisma = new PrismaClient();
exports.get = async (req, res) => {
  const Product = await prisma.product.findMany();
  res.json(Product);
};

exports.getSingle = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await prisma.product.findFirst({
      where: {
        id: parseInt(id), // Parse the ID to an integer
      },
    });

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.create =async (req, res) => {
  const fileUrls = [];
  const attachmentss = [];
  const certificationss = [];
  const lcas = [];
  const productImage =[];

  // Configure AWS SDK
  AWS.config.update({
    accessKeyId: process.env.accessKeyId,
    secretAccessKey: process.env.secretAccessKey,
  });

  const s3 = new AWS.S3();

  function getContentType(fileName) {
    const extension = path.extname(fileName).toLowerCase();
    switch (extension) {
      case ".png":
        return "image/png";
      case ".jpg":
      case ".jpeg":
        return "image/jpeg";
      case ".pdf":
        return "application/pdf";
      default:
        return "application/octet-stream";
    }
  }

  function uploadFileToS3(uploadedFile) {
    return new Promise((resolve, reject) => {
      const params = {
        Bucket: "beyond-projects-files/AIFA",
        Key: uploadedFile.name,
        Body: uploadedFile.data,
        ContentType: getContentType(uploadedFile.name),
      };

      s3.upload(params, (err, data) => {
        if (err) {
          console.error("Error uploading file to S3:", err);
          reject(err);
        } else {
          const fileUrl = data.Location;
          fileUrls.push(fileUrl);

          resolve(fileUrl);
        }
      });
    });
  }

  try {
    if (req.files && Object.keys(req.files).length > 0) {
      let uploadPromises = [];
     
      if (req.files && Object.keys(req.files).length > 0) {
        uploadPromises = Object.values(req.files).map(uploadFileToS3);
      }
      await Promise.all(uploadPromises);
      Object.keys(req.files).forEach((key, index) => {
        if (key.includes("attachments")) {
          attachmentss.push(fileUrls[index]);
        } else if (key.includes("certifications")) {
          certificationss.push(fileUrls[index]);
        } else if (key.includes("lca")) {
          lcas.push(fileUrls[index]);
        } else if(key.includes("productImage")){
          productImage.push(fileUrls[index]);
        }
        
      });

      req.body.attachments = attachmentss;
      req.body.certifications = certificationss;
      req.body.lca = lcas;
      req.body.productImage=productImage?.length>0?productImage[0]:null;
    } else {
      req.body.attachments = [];
      req.body.certifications = [];
      req.body.lca = [];
      req.body.productImage=null;
    }
    req.body.updatedAt = new Date();
    req.body.createdAt= new Date();
    const product = await prisma.product.create({
      data: req.body,
    });
    res.json("Product Created Successfully");
  } catch (error) {
    console.error("Error uploading files:", error);
    res.status(500).json({ error: "Error uploading files" }); // Sending error response to client
  }
};