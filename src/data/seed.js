import { data } from "./recipes";

export async function seedDB() {
  try {
    await fetch("https://restapi.fr/api/tagt_recipes", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (e) {
    console.log(e);
  }
}
