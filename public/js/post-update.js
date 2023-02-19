const id = document.querySelector("#postId").getAttribute("data-id");

async function postUpdate(event) {
  event.preventDefault();
  const title = document.querySelector("#title").value.trim();
  const body = document.querySelector("#body").value;
  const response = await fetch(`/api/post/${id}`, {
    method: "PUT",
    body: JSON.stringify({ title, body }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Update failed.");
  }
}

async function postDelete(event) {
  event.preventDefault();
  const response = await fetch(`/api/post/${id}`, {
    method: "DELETE",
  });
  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Delete failed.");
  }
}

document.querySelector("#postUpdate").addEventListener("click", postUpdate);
document.querySelector("#postDelete").addEventListener("click", postDelete);
