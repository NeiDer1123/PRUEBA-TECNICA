
const changeString = (string) => {
  //Convierto en minusculas y las divido en un arreglo.
  const words = string.toLowerCase().split(" ");

  // Recorro el arreglo y le cambio su primera letra a Mayuzcula.
  const changeWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );

  // Uno los elementos nuevamente.
  const combineWords = changeWords.join(" ");

  return combineWords;
};

export { changeString };
