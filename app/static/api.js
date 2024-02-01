var toast = new Notyf({
  duration: 2000,
  position: {
    x: 'right',
    y: 'top',
  }
});
export async function request(path, { data, method = "GET" })  {

  const url =  path;

  const body = (method !== "GET" && method !== "DELETE") ? JSON.stringify(data) : null;

  try {
    const response = await fetch(url, { method, body });

    if (response.ok) {
      return method === "DELETE" ? true : response.json();
    }
    if(response.status == 403){
      const json = await response.json()
     return toast.error(json.message);
    }
    const json = await response.json();
    if(Array.isArray(json.message)){
      return toast.error(json.message[0]);
    }
    throw new Error(JSON.stringify(json));
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error) {

    let emsg=null;
    if(error?.message){
      console.log(error);
      console.log("--------------------------------")
      console.log(error.message)
      emsg = JSON.parse(error?.message)?.message;
    }
    const errorMessage = emsg || 'An unexpected error occurred.';
    toast.error(errorMessage);
  }
}

