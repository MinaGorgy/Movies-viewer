import { TrimTextPipe } from './trim-text.pipe';

describe('TrimTextPipe', () => {
  it('create an instance', () => {
    const pipe = new TrimTextPipe();
    expect(pipe).toBeTruthy();
  });

  it('undefined string should return empty string', () => {

    // Arrange
    const pipe = new TrimTextPipe();

    // Act
    const result = pipe.transform('');

    // Assert
    expect(result).toEqual('');
  })

  it('passing a string without passing length returns string with 25 charcaters', () => {
    // Arrange
    const pipe = new TrimTextPipe();
    const textToBeTrimmed = 'This is a very long text to be trimmed';
    const expectedResult = 'This is a very long te...'

    // Act
    const result = pipe.transform(textToBeTrimmed);

    // Assert
    expect(result).toEqual(expectedResult);
    expect(result.length).toEqual(25);
  })

  it('passing a string and a specific length', () => {
    // Arrange
    const pipe = new TrimTextPipe();
    const expectedTextlength = 13;
    const textLengthParamater = 10;
    const textToBeTrimmed = 'This is a very long text to be trimmed';
    const expectedResult = 'This is a ...'

    // Act
    const result = pipe.transform(textToBeTrimmed, textLengthParamater);

    // Assert
    expect(result).toEqual(expectedResult);
    expect(result.length).toEqual(expectedTextlength);
  })

  it('passing a string with length less than the default text length', () => {
    // Arrange
    const pipe = new TrimTextPipe();
    const textToBeTrimmed = 'This is a sentence';
    const expectedResult = 'This is a sentence'

    // Act
    const result = pipe.transform(textToBeTrimmed);

    // Assert
    expect(result).toEqual(expectedResult);
    expect(result.length).toEqual(expectedResult.length);
  })
});
