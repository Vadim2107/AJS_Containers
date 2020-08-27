import Validator from '../Validator';

test('Checking the correct name format', () => {
  const result = new Validator('Va-21_07-dim').validateUsername();

  expect(result).toBe('Va-21_07-dim');
});

test('Checking for incorrect name format', () => {
  const result = new Validator('21-Va_07-dim').validateUsername();

  expect(result).toBe('Invalid name format!!!');
});

test('Checking for incorrect name format', () => {
  const result = new Validator('Va-21_dim-07').validateUsername();

  expect(result).toBe('Invalid name format!!!');
});

test('Checking for incorrect name format', () => {
  const result = new Validator('Va_2107-dim').validateUsername();

  expect(result).toBe('Invalid name format!!!');
});

test('Checking for incorrect name format', () => {
  const result = new Validator('-Va21_07-dim').validateUsername();

  expect(result).toBe('Invalid name format!!!');
});

test('Checking for incorrect name format', () => {
  const result = new Validator('Va-21_07-dim_').validateUsername();

  expect(result).toBe('Invalid name format!!!');
});

test('Checking for incorrect name format', () => {
  const result = new Validator('Ва-21_07-дим').validateUsername();

  expect(result).toBe('Invalid name format!!!');
});
