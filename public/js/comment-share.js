const post_id = document.querySelector("#postId").getAttribute("data-id");

async function commentShareBtn(event) {
  event.preventDefault();
  const comment = document.querySelector("#comment").value.trim();
  const response = await fetch("/api/comment/", {
    method: "POST",
    body: JSON.stringify({ comment, post_id }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    console.log("Nice work!");
    document.location.replace(`/comment/${post_id}`);
  } else {
    alert("Sharing comment failed");
  }
}

document
  .querySelector("#commentShareBtn")
  .addEventListener("click", commentShareBtn);
