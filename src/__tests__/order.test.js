import { orderByProperties } from "../js/order";

describe('orderByProperties', () => {

  test('sort by order then alpabetically', () => {
    const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };
    const order = ["name", "level"];
    const expected = [
      { key: "name", value: "мечник" },
      { key: "level", value: 2 },
      { key: "attack", value: 80 },
      { key: "defence", value: 40 },
      { key: "health", value: 10 }
    ];
    expect(orderByProperties(obj, order)).toEqual(expected);
  });

  test('should ignore keys in order that are not in obj', () => {
    const obj = { b: 2, c: 1 };
    const order = ['a', 'c'];
    const expected = [
      { key: "c", value: 1 },
      { key: "b", value: 2 },
    ];
    expect(orderByProperties(obj, order)).toEqual(expected);
  });

  test('should handle empty object', () => {
    expect(orderByProperties({}, ['name'])).toEqual([]);
  });
});