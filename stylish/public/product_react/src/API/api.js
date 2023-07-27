import fetchDataError from "./fetchDataError";

export async function api({ url, method, data, headers }) {
  try {
    const res = await fetch(url, {
      method: method || "GET",
      body: data ? JSON.stringify(data) : null,
      headers: headers || {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      return await res.json();
    } else {
      throw new Error("something went wrong");
    }
  } catch (error) {
    fetchDataError(error);
  }
}
