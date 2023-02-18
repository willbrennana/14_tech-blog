const id = document.querySelector("#postId").getAttribute("data-id");
async function commentCreate(event) {
  event.preventDefault();
  document.location.replace(`/addcomment/${id}`);
}

document
  .querySelector("#commentCreateBtn")
  .addEventListener("click", commentCreate);
