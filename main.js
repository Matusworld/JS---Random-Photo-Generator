import "./style.css";

const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = new FormData(form);

  const response = await fetch("http://localhost:8080/image-gen", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ category: data.get("category") }),
  });

  const { image } = await response.json();

  const result = document.querySelector("#result");
  result.innerHTML = `<img src="${image}" width="512" />`;
});
