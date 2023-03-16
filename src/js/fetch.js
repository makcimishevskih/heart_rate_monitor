async function postData(url, formData) {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json",
      },
    });

    if (response.ok) {
      return await response.json();
    }
  } catch (err) {
    throw new Error("Error: ", err);
  }
}

export default postData;
