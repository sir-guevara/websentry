var toast = new Notyf({
  duration: 2000,
  position: {
    x: 'right',
    y: 'top',
  }
});
export function request(path, { data = null,  method = "GET" }) {
  return fetch(path, {
    method,
    headers: {
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
        return response.json();
      }

      // Otherwise, if there are errors
      return response
        .json()
        .then((json) => {
          // Handle JSON error, response by the server

          if (response.status === 400) {
            // const errors = Object.keys(json).map((k) => `${json[k].join(" ")}`);
           
            throw new Error(json.message);
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
      toast.error(e.message);
    });
}
