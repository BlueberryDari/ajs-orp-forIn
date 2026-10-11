export function orderByProperties(obj, order) {
  const result = [];
  const rest = [];

  for (const key of order) { //перебираем значения массива
    if (key in obj) {
      result.push({ key, value: obj[key] });
    }
  }

  for (const key in obj) {
    if (!order.includes(key)) {
      rest.push({ key, value: obj[key] });
    }
  }

  rest.sort((a, b) => a.key.localeCompare(b.key));

  return result.concat(rest); //объединение result и rest
}