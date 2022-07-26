async function AddEmailToDatabase(emailInput) {
  const response = await fetch(
      /* "http://localhost:8000/Local_documents/GitHub/tedis-project/be/controller/Client.php", */
    "http://tedisproject.infinityfreeapp.com/be/controller/Client.php",
    {
      method: "POST",
      body: JSON.stringify(emailInput),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
    const data = await response.text();
    console.log(data);
}

export default AddEmailToDatabase;
