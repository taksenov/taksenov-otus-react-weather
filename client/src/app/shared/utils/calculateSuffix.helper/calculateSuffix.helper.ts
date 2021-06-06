/**
 * добавление окончаний при разном кол-ве
 *
 * Пример использования: `новы${calculateSuffix(['й', 'х', 'х'], unreads)}`
 *
 * @export
 * @param {string[]} endings  -- окончания
 * @param {number} count -- значение для вычисления окончания
 * @returns {string}
 */
export function calculateSuffix(endings: string[], count: number): string {
  const cases: number[] = [2, 0, 1, 1, 1, 2];

  return endings[
    count % 100 >= 5 && count % 100 <= 19
      ? 2
      : cases[count % 10 < 5 ? count % 10 : 5]
  ];
}
