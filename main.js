import "./style.css";

const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  showSpinner();

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

  hideSpinner();
});

function showSpinner() {
  const button = document.querySelector("button");
  button.disabled = true;
  button.innerHTML = "Loading... <span class='spinner'>🌀</span>";
}

function hideSpinner() {
  const button = document.querySelector("button");
  button.disabled = false;
  button.innerHTML = "Generate";
}
