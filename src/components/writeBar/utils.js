const MAX_LENGTH = 32;

export function isValid(text) {
  if (text.length <= MAX_LENGTH) return true;

  return false;
}
