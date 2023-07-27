function getParameter(key) {
  const queryParameters = new URLSearchParams(window.location.search);
  const type = queryParameters.get(key);
  return type;
}

export default getParameter;
