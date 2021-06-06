/**
 * Функция вычисляет порядок числа: единицы, десятки, сотни, тысячи etc
 *
 * @param num
 */
const calcDimension = (num: number): boolean[] => {
  let dimension = [];
  let temp = num;

  if (temp === 0) {
    dimension.push(true);
  }

  if (temp < 0) {
    temp *= -1;
  }

  while (temp) {
    dimension.push(true);
    temp = Math.floor(temp / 10);
  }

  return dimension;
};

/**
 * Делит рейндж на промежуточные значения, возвращаем массив вида:
 * [start, ...промежуточные значения, stop]
 *
 * console.log(splitRange(5000, 700000, 6)); =>
 * [5000, 100000, 200000, 300000, 400000, 500000, 700000]
 *
 * console.log(splitRange(0, 100, 5)); =>
 * [0, 30, 60, 90, 100]
 *
 * @param {number} start -- начало
 * @param {number} end -- окончание
 * @param {number} steps -- количество шагов (диапазонов)
 * @param {number} round -- по умолчанию округляем до максимального порядка числа,
 * чем больше round, тем меньше порядок округления:
 * 1 === 2345 => 2000;
 * 2 === 2345 => 2300;
 * ...
 *
 * @returns
 */
const splitRange = (start: number, end: number, steps: number, round = 1) => {
  let result = [];
  let temp = start;
  let delta = (end - start) / (steps - 1);
  let tRound = round <= 0 ? 1 : round;

  for (let i = 0; i < steps; i++) {
    let dimension = calcDimension(temp).length;
    let divider = 1;
    for (let i = 1; i <= dimension - tRound; i++) {
      divider *= 10;
    }

    temp = Math.round(temp / divider) * divider;
    if (temp === start) {
      tRound += 1;
    }
    if (temp >= end) {
      result.push(end);
      return result;
    }

    result.push(temp);
    temp += delta;
  }

  result.push(end);

  return result;
};

export default splitRange;
