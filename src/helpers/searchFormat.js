export const searchFormat = ( value ) => {
  const cleanValue = value.replace(/[^-\d]|-(?=\s)|^-(?=\d)/g, '');
  return cleanValue;
}
