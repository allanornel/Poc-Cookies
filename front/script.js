function get() {
  console.log("entrou");
  const promise = axios
    .get("http://localhost:5000/", {
      headers: { HeaderEnviado: "PeloCliente" },
      withCredentials: true,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => console.log(error));
  console.log(document.cookie);
}
get();
