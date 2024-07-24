export const numericFormat = ( value ) => {
  const cleanValue = value.replace(/(^0)|[^\d]/g, '');
  return cleanValue;
}