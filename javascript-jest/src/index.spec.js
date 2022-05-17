import { hello, pingPong, isValidNumber, INVALID_NUMBER_MESSAGE,makeMeAPromise,brokeThePromise,shouldIMakeDeployToday,shouldIMakeBugToday } from "./index";

// Dica: https://jestjs.io/docs/en/expect

//tobe a principio é retorno 

describe("hello", () => {
  it("should return 'hello'", () => {
    expect(hello()).toBe("hello");
  });
});

describe("pingPong", ()=> {
 describe ("quando valor for multiplo de 3", ()=> {
  it("devera retornar 'pong'",() => {
    expect(pingPong(3)).toBe("pong")
  })
 })  
})

describe("pingPong", () => {
  describe("when number multiple of 2", ()=> {
    it("would be 'ping'", () => {
      expect(pingPong(4)).toBe("ping")
    })
  })
})

describe("pingPong", () => {
  describe("when number multiple of 2 e 3", ()=> {
    it("would be 'pingPong'", ()=> {
      expect(pingPong(6)).toBe("ping-pong")
    })
  })
})

describe("pingPong",() => {
  describe("when its not multiple of 2 or 3", ()=> {
    it("would be '-' ", ()=> {
      expect(pingPong(7)).toBe("-")
    })
  })
})

describe("isValidNumber", () => {
  describe("if type of value = number",()=> {
    it("would be 'true'", ()=> {
      expect(Number).toBeTruthy()
    })
  })
})

// option 1 
describe("isValidNumber", () => {
  describe("type of value != number", ()=> {
    it ("would be throwError", ()=> {
      expect(String).toBeTruthy()
    })
  })
})

// option to throwError isValidNumber
// não usamos describe se iniciamos com  test 
test('throws on is ValidNumber', () => {
  expect((number) => {
    isValidNumber(number);
  }).toThrow();
});


test ("makeMeAPromise", ()=> {
    expect (Promise.resolve("oi")).resolves.toBe("i")
   }) 
  

// test('brokeThePromise', () => {
//   expect("").rejects.toMatch('error');
// });

describe ("shouldIMakeDeployToday", () => {
  const responses = [false, null, 0, undefined];
  it ("a resposta deve ser um elemento deste array", () => {
     expect(responses.length).toBeTruthy();
  })
})


describe ('shouldIMakeBugToday', () => {
  const responses = [true, 1, "Yes"];
  it ("testando math function", () => {
  expect[Math.floor(Math.random(responses) * 6 +1 )]
 })
})

