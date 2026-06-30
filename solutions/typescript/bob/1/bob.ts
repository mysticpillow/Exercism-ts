export function hey(message: string): string {
  const trimmedMessage = message.trim();

  if (isSilence(trimmedMessage)) {
    return "Fine. Be that way!";
  }

  const hasQuestionAtTheEnd = isQuestion(trimmedMessage);
  const allUpperCase = allLettersAreUpperCase(trimmedMessage);

  if (hasQuestionAtTheEnd && allUpperCase) {
    return "Calm down, I know what I'm doing!";
  }

  if (hasQuestionAtTheEnd) {
    return "Sure.";
  }

  if (allUpperCase) {
    return "Whoa, chill out!";
  }

  return "Whatever.";
}

function isQuestion(message: string): boolean {
  return message.endsWith('?');
}

const ALL_LETTERS_REGEXP = /\p{L}/gu;

function allLettersAreUpperCase(message: string): boolean {
  const matchedLetters = message.match(ALL_LETTERS_REGEXP) ?? [];
  if (matchedLetters.length === 0) {
    return false;
  }

  return matchedLetters.every(letter => letter.toUpperCase() === letter && letter !== letter.toLowerCase());
}

function isSilence(message: string): boolean {
  return message.length === 0;
}
