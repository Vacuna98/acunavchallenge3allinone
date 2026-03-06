export const fetchData = async (name: string) => {
  const res = await fetch(`/api/hello?name=${encodeURIComponent(name)}`);
  return await res.text();
};


//Adding
export const fetchAdd = async (num1: string, num2: string) => {
  const res = await fetch(`/api/adding?num1=${num1}&num2=${num2}`);
  return await res.text();
};


//Wake Up
export const fetchWakeUp = async (name: string, time: string) => {
  const res = await fetch(`/api/wakeup?name=${encodeURIComponent(name)}&time=${encodeURIComponent(time)}`);
  return await res.text();
};

//Reverse Number
export const fetchReverseNumber = async (number: string) => {
  const res = await fetch(`/api/reverse?number=${encodeURIComponent(number)}`);
  return await res.text();
};

//Odd or Even
export const fetchOddEven = async (number: string) => {
  const res = await fetch(`/api/oddeven?number=${encodeURIComponent(number)}`);
  return await res.text();
};


//Magic 8 Ball
export const fetchMagic8Ball = async (question: string) => {
  const res = await fetch(
    `/api/magic8ball?question=${encodeURIComponent(question)}`
  );

  return await res.text();
};


//Reverse Alphabet
export const fetchReverseAlphabet = async (word: string) => {
  const res = await fetch(
    `/api/reversealpha?word=${encodeURIComponent(word)}`
  );

  return await res.text();
};


//GuessIt
export const fetchGuessIt = async (difficulty: string, guess: string) => {
  const res = await fetch(
    `/api/guessit?difficulty=${encodeURIComponent(difficulty)}&guess=${encodeURIComponent(guess)}`
  );

  return await res.text();
};

//MadLib
export const fetchMadLib = async (
  noun: string,
  verb: string,
  name: string,
  place: string
) => {
  const res = await fetch(
    `/api/madlib?noun=${encodeURIComponent(noun)}&verb=${encodeURIComponent(verb)}&name=${encodeURIComponent(name)}&place=${encodeURIComponent(place)}`
  );

  return await res.text();
};


//Restaurant Picker
export const fetchRestaurant = async (category: string) => {
  const res = await fetch(
    `/api/restaurant?category=${encodeURIComponent(category)}`
  );

  return await res.text();
};