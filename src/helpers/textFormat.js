export const textFormat = ( value ) => {
  const cleanValue = value.replace(/^\s+|\s+(?=\s)|[^A-Za-z0-9áéíóúÁÉÍÓÚüÜ\s-]/gi, '');
  return cleanValue;
}