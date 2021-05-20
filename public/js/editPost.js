const editBtn = async (event) => {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value.trim();
    const content = document.querySelector('input[name="content"]').value.trim();
    const id = document.querySelector("input[name='post-id']").value;

const response = await fetch(`/api/posts/${id}`, {
  method: 'PUT',
  body: JSON.stringify({ post_id: id, title, content}),
  headers: { 'Content-Type': 'application/json' }
});

  if (response.ok) {
  document.location.replace('/dashboard');
  } else {
  alert(response.statusText);
  }

}
document.querySelector('.update-post-btn').addEventListener('click', editBtn);