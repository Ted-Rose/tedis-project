import Links from "../../Links";

async function AddProductToDatabase(productFormData) {
  const response = await fetch(Links["products"], {
    method: "POST",
    body: JSON.stringify(productFormData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.text();
  console.log(data);
}

export default AddProductToDatabase;
