const btn = document.getElementById("button");

const btnName = () => {
  if (localStorage.getItem("dark")) {
    document.documentElement.classList.add("dark-mode");
  } else {
    document.documentElement.classList.remove("dark-mode");
  }
  document.documentElement.classList.toggle("dark-mode");
  if (document.documentElement.classList.contains("dark-mode")) {
    btnNam("Dark");
    localStorage.setItem("dark", "dark-mode");
  } else {
    btnNam("Light");
    localStorage.setItem("dark", "");
  }
};

const btnNam = (s) => {
  btn.textContent = `${s} Mode`;
};

btn.addEventListener("click", () => {
  btnName();
});
