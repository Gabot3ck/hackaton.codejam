export const validateInput = (e, setError, mensaje) => {
  const value = e.target.value;

  (value === "") ? setError(mensaje) : setError('')
}