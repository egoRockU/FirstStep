export const toDataURL = (url) => {
  fetch(url, { headers: { "Access-Control-Allow-Origin": "*" } })
    .then((response) => response.blob())
    .then(
      (blob) =>
        new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(blob);
        })
    )
    .catch((err) => {
      console.log(err);
    });
};
