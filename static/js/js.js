function showAlert(message, type) {
  const alertDiv = document.createElement("div");
  alertDiv.className = `fixed top-10 right-0 mb-4 mr-4 px-4 py-2 rounded text-white ${
    type === "success" ? "bg-green-500" : "bg-red-500"
  }`;

  alertDiv.textContent = message;

  document.body.appendChild(alertDiv);

  // Auto-dismiss after 5 seconds (adjust as needed)
  setTimeout(() => {
    alertDiv.remove();
  }, 5000);
}

function sendRequest(path, { data = null, token = null, method = "GET" }) {
  return fetch(path, {
    method,
    headers: {
      Authorization: token ? `Token ${token}` : "",
      "Content-Type": "application/json",
    },
    body: method !== "GET" && method !== "DELETE" ? JSON.stringify(data) : null,
  })
    .then((response) => {
      // If it is success
      if (response.ok) {
        if (method === "DELETE") {
          // If delete, nothing return
          return true;
        }
        showAlert("Success", "success");

        return response.json();
      }

      // Otherwise, if there are errors
      return response
        .json()
        .then((json) => {
          // Handle JSON error, response by the server

          if (response.status === 400) {
            throw new Error(json.detail);
          }
          throw new Error(JSON.stringify(json));
        })
        .catch((e) => {
          if (e.name === "SyntaxError") {
            throw new Error(response.statusText);
          }
          throw new Error(e);
        });
    })
    .catch((e) => {
      // Handle all errors
      showAlert(e.message, "error");
    });
}
