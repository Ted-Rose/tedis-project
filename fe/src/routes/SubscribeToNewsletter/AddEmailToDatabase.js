import Links from "../../Links";

async function AddEmailToDatabase(emailInput) {
  const response = await fetch(Links["clients"],
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
