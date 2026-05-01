const API = "http://localhost:5000/api/notes";

function fetchNotes() {
  fetch(API)
    .then(res => res.json())
    .then(data => {
      let html = "";

      data.forEach(n => {
        html += `
          <div class="note">
            <h3>${n.title}</h3>
            <p>${n.content}</p>
            <button onclick="deleteNote(${n.id})">Delete</button>
          </div>
        `;
      });

      document.getElementById("notes").innerHTML = html;
    });
}

function addNote() {
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, content })
  })
  .then(() => {
    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
    fetchNotes();
  });
}

function deleteNote(id) {
  fetch(API + "/" + id, { method: "DELETE" })
    .then(() => fetchNotes());
}

fetchNotes();