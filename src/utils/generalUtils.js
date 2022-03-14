export const detectLang = () => {
  let lang = "";
  const language = document.documentElement.lang;
  return language;
};

export const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
