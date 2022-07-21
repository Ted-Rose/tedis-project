async function AddProductToDatabase(productFormData) {
    const response = await fetch(
        "http://localhost:8000/Local_documents/GitHub/tedis-project/be/controller/Products.php",
/*       "http://tedisproject.infinityfreeapp.com/be/controller/Client.php", */
      {
        method: "POST",
        body: JSON.stringify(productFormData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
      const data = await response.text();
      console.log(data);
  }
  
  export default AddProductToDatabase;
  