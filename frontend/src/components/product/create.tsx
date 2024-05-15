import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";
import * as Yup from "yup";
import LoadingSpinner from "@/components/loading";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import { instance } from "@/components/service/api";

interface ProductFormValues {
  title: string;
  author: string;
  name: string;
  price: string;
  productInfo: string;
  attachments: FileList | null;
  certifications: FileList | null;
  productImage: "";

  totalCarbonFootprint: string;
  reductionTargets: string;
  reductionAchievements: string;
  conventionalLeather: string;
  bioBasedContent: string;
  wasteReduction: string;
  totalWaterConsumption: string;
  waterRecycled: string;
  recylability: string;
  mechanical: string;
  chemical: string;
  naturalComposable: string;
  m1: string;
  m2: string;
  m3: string;
  m4: string;
  m5: string;
  m6: string;
  lca: FileList | null;
  lcaDescription: string;
}

const ProductForm=() => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [attachments, setAttachments] = useState([]);
  const [certifications, setCertifications] = useState([]);
  const formData = new FormData();
  const initialValues: ProductFormValues = {
    title: "",
    author: "",
    name: "",
    price: "",
    productInfo: "",
    productImage: "",
    attachments: [],
    certifications: [],
    totalCarbonFootprint: "",
    reductionTargets: "",
    recylability: "",
    reductionAchievements: "",
    conventionalLeather: "",
    bioBasedContent: "",
    wasteReduction: "",
    totalWaterConsumption: "",
    waterRecycled: "",
    mechanical: "",
    chemical: "",
    naturalComposable: "",
    m1: "",
    m2: "",
    m3: "",
    m4: "",
    m5: "",
    m6: "",
    lca: [],
    lcaDescription: "",
    impactFacts0: "",
    impactFacts1: "",
    impactFacts2: "",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    author: Yup.string().required("Author is required"),
    name: Yup.string().required("Name is required"),
    price: Yup.number()
      .required("Price is required")
      .positive("Price must be positive"),
    productInfo: Yup.string().required("Product info is required"),

    totalCarbonFootprint: Yup.string().required(
      "Total carbon footprint is required"
    ),
    reductionTargets: Yup.string().required("Reduction targets are required"),
    reductionAchievements: Yup.string().required(
      "Reduction achievements are required"
    ),
    conventionalLeather: Yup.string().required(
      "Conventional leather is required"
    ),
    bioBasedContent: Yup.number()
    .typeError("Bio based content must be a number")
    .min(0, "Bio based content must be greater than or equal to 0")
    .max(100, "Bio based content must be less than or equal to 100")
    .required("Bio based content is required"),
  wasteReduction: Yup.number()
    .typeError("Waste reduction must be a number")
    .min(0, "Waste reduction must be greater than or equal to 0")
    .max(100, "Waste reduction must be less than or equal to 100")
    .required("Waste reduction is required"),
  mechanical: Yup.number()
    .typeError("Mechanical must be a number")
    .min(0, "Mechanical must be greater than or equal to 0")
    .max(100, "Mechanical must be less than or equal to 100")
    .required("Mechanical is required"),
  chemical: Yup.number()
    .typeError("Chemical must be a number")
    .min(0, "Chemical must be greater than or equal to 0")
    .max(100, "Chemical must be less than or equal to 100")
    .required("Chemical is required"),
  naturalComposable: Yup.number()
    .typeError("Natural composable must be a number")
    .min(0, "Natural composable must be greater than or equal to 0")
    .max(100, "Natural composable must be less than or equal to 100")
    .required("Natural composable is required"),
    totalWaterConsumption: Yup.string().required(
      "Total water consumption is required"
    ),
    waterRecycled: Yup.string().required("Water recycled is required"),
    recylability: Yup.string().required("recylability is required"),

    m1: Yup.string().required("M1 is required"),
    m2: Yup.string().required("M2 is required"),
    m3: Yup.string().required("M3 is required"),
    m4: Yup.string().required("M4 is required"),
    m5: Yup.string().required("M5 is required"),
    lcaDescription: Yup.string().required("LCA description is required"),
    impactFacts0: Yup.string().required("Impact facts are required"),
    impactFacts1: Yup.string().required("Impact facts are required"),
    impactFacts2: Yup.string().required("Impact facts are required"),
  });
const handleFileChange = (event: any, fieldName: any) => {
  const files = event.target.files;

  if (files.length > 0) {
    for (let i = 0; i < files.length; i++) {
      if (fieldName === "productImage") {
        formData.append(`${fieldName}0`, files[i]);
      } else {
        formData.append(fieldName + i, files[i]);
      }
    }
  }
};

  const handleSubmitted = async (values: any) => {
    setLoading(true);
    try {
      formData.append("name", values?.name);
      formData.append("price", values?.price);
      formData.append("productInfo", values?.productInfo);
      formData.append("totalCarbonFootprint", values?.totalCarbonFootprint);
      formData.append("reductionTargets", values?.reductionTargets);
      formData.append("reductionAchievements", values?.reductionAchievements);
      formData.append("conventionalLeather", values?.conventionalLeather);
      formData.append("bioBasedContent", values?.bioBasedContent);
      formData.append("wasteReduction", values?.wasteReduction);
      formData.append("totalWaterConsumption", values?.totalWaterConsumption);
      formData.append("waterRecycled", values?.waterRecycled);
      formData.append("recylability", values?.recylability);
      formData.append("mechanical", values?.mechanical);
      formData.append("chemical", values?.chemical);
      formData.append("naturalComposable", values?.naturalComposable);
      formData.append("m1", values?.m1);
      formData.append("m2", values?.m2);
      formData.append("m3", values?.m3);
      formData.append("m4", values?.m4);
      formData.append("m5", values?.m5);
      formData.append("m6", values?.m6);
      formData.append("lca", values?.lca);
      formData.append("lcaDescription", values?.lcaDescription);
      formData.append("impactFacts0", values?.impactFacts0);
      formData.append("impactFacts1", values?.impactFacts1);
      formData.append("impactFacts2", values?.impactFacts2);

      const response = await instance.post("/product", formData);

      toast.success(response?.data, {
        position: "top-right", // Position of the toast
        duration: 4000, // Duration the toast is shown (in milliseconds)
        style: {
          background: "green", // Background color of the toast
          color: "#fff", // Text color of the toast
        },
      });
      setTimeout(() => {
        router.push("/");
        setLoading(false);
      }, 4000);
    } catch (error) {
      toast.error("Error Creating Product", {
        position: "top-right",
        duration: 3000, // 3 seconds
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          handleSubmitted(values);
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setFieldValue,
        }) => (
          <Form>
            <div className="max-w-4xl mx-auto px-4 py-8">
              <h1 className="text-2xl font-bold mb-6">Add New Product</h1>
              {Object.keys(initialValues).map((key) => (
                <div className="mb-4" key={key}>
                  <label htmlFor={key}>
                  {
                      key === "impactFacts0" || key === "impactFacts1" || key === "impactFacts2"  ? key.slice(0, -1).charAt(0).toUpperCase() + key.slice(0, -1).slice(1):
                      key.charAt(0).toUpperCase() + key.slice(1)}
                  </label>

                  <Field
                    type={
                      key === "attachments" ||
                      key === "certifications" ||
                      key === "lca" ||
                      key === "productImage"
                        ? "file"
                        : key === "bioBasedContent" ||
                          key === "wasteReduction" ||
                          key === "mechanical" ||
                          key === "chemical" ||
                          key === "naturalComposable"
                        ? "number"
                        : "text"
                    }
                    name={key}
                    placeholder={
                      key === "impactFacts0" || key === "impactFacts1" || key === "impactFacts2"  ? key.slice(0, -1).charAt(0).toUpperCase() + key.slice(0, -1).slice(1):
                      key.charAt(0).toUpperCase() + key.slice(1)}
                    className="w-full p-2 border border-zinc-300 rounded-md"
                    onChange={(event:any) => {
                      if (
                        key === "attachments" ||
                        key === "certifications" ||
                        key === "lca"||
                        key === "productImage"
                      ) {
                        handleFileChange(event, key);
                        handleChange(event);
                      } else {
                        handleChange(event);
                      }
                    }}
                    multiple={
                      key === "attachments" ||
                      key === "certifications" ||
                      key === "lca"
                    }
                    min={
                      key === "bioBasedContent" ||
                      key === "wasteReduction" ||
                      key === "mechanical" ||
                      key === "chemical" ||
                      key === "naturalComposable"
                        ? 0
                        : undefined
                    }
                    max={
                      key === "bioBasedContent" ||
                      key === "wasteReduction" ||
                      key === "mechanical" ||
                      key === "chemical" ||
                      key === "naturalComposable"
                        ? 100
                        : undefined
                    }
                    required
                  />
                  <ErrorMessage
                    name={key}
                    component="div"
                    className="text-red-500"
                  />
                </div>
              ))}

              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
      {loading && <LoadingSpinner />}
      <Toaster />
    </>
  );
};

export default ProductForm;
