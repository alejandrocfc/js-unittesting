const functions = require("./functions.js");

describe('multiply function', () => {
  it('should be return multiple when I sent two numbers', () => {
    //ARRANGE
    const num1 = 6;
    const num2 = 3
    //ACT
    const result = functions.multiply(num1, num2);
    //ASSERT
    expect(result).toBe(18)

  })
  it("should return the negative result of the multiplication", () => {

    const num1 = 3;
    const num2 = -6;

    const result = functions.multiply(num1, num2)

    expect(result).toBe(-18);

  });
});


describe('isNull function', () => {
  it('should be return null', () => {
    //ARRANGE

    //ACT
    const result = functions.isNull();

    //ASSERT
    expect(result).toBeNull();

  });
});

describe('checkTruthy function', () => {
  it('should be return true when I sent true', () => {
    //ARRANGE
    const value = true;
    //ACT
    const result = functions.checkTruthy(value);

    //ASSERT
    expect(result).toBe(true);

  });
})

describe('addLastName function', () => {
  it('should be return Pepito Perez when I sent Perez', () => {
    //ARRANGE
   
    const lastname = 'Perez';
    //ACT
    const response = functions.addLastName(lastname);
    //ASSERT

    expect(response).toEqual({firstname: 'Pepito', lastname : 'Perez'});
  });
})
