function copyKey() {
  const key = "071.664.505-09";
  navigator.clipboard.writeText(key)
      .then(() => {
          alert("Chave Pix copiada para a área de transferência!");
      })
      .catch(err => {
          console.error("Erro ao copiar chave: ", err);
      });
}

document.querySelector("#copyKey").addEventListener("click", copyKey);