import { Validator } from '../validator';

describe('Класс Validator', () => {
  let validator;

  beforeAll(() => {
    validator = new Validator();
  });

  describe('Метод validateUsername', () => {
    const testCases = {
      valid: [
        { input: 'username', reason: 'корректное имя' },
        { input: 'aBa', reason: '3 символа с разным регистром' },
        { input: 'user-name', reason: 'дефис в середине' },
        { input: 'user_name', reason: 'подчеркивание в середине' },
        { input: 'user123_name', reason: 'цифры в середине' },
      ],
      invalid: [
        { input: 'ur', reason: 'меньше 3 символов' },
        { input: '_username', reason: 'начинается с подчеркивания' },
        { input: 'username_', reason: 'заканчивается подчеркиванием' },
        { input: '-username', reason: 'начинается с дефиса' },
        { input: 'username-', reason: 'заканчивается дефисом' },
        { input: '13username', reason: 'начинается с цифр' },
        { input: 'username12', reason: 'заканчивается цифрами' },
        { input: 'a_very_long_nickname_123', reason: 'больше 16 символов' },
        { input: 'user1234', reason: '4 цифры подряд в конце' },
        { input: 'user_1234_name', reason: '4 цифры подряд в середине' },
      ]
    };

    describe('Должен валидировать корректные username', () => {
      testCases.valid.forEach(({ input, reason }) => {
        it(`Должен принять: ${reason} (${input})`, () => {
          expect(validator.validateUsername(input)).toBe(true);
        });
      });
    });

    describe('Должен отвергать некорректные username', () => {
      testCases.invalid.forEach(({ input, reason }) => {
        it(`Должен отклонить: ${reason} (${input})`, () => {
          expect(validator.validateUsername(input)).toBe(false);
        });
      });
    });
  });
});
