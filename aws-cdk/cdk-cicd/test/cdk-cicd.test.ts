import {handler} from "../services/hello";

describe('Hello describe test suite', () => {
  test('handler should return 200', async () => {
    const response = await handler({}, {});
    expect(response.statusCode).toBe(400);
  })
})
