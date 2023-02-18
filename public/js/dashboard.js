const postCreateBtn = async () => {
  document.location.replace("/newpost");
};

const postUpdate = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");
    document.location.replace(`/updatepost/${id}`);
  }
};

document
  .querySelector("#postCreateBtn")
  .addEventListener("click", postCreateBtn);
document.querySelector("#mainBody").addEventListener("click", postUpdate);
