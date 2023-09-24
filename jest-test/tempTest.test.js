const { pushTemp } = require('../controllers/tempController');
const Temp = require('../models/tempSchema'); 
const httpMocks = require('node-mocks-http');



describe('pushTemp', () => {
    it('should create a new Temp record and return a success response', async () => {
      // Mock request and response objects
      const req = httpMocks.createRequest({
        method: 'POST',
        body: {
          name: 'John Doe',
          email: 'johndoe@example.com',
          age: 30,
        },
      });
      const res = httpMocks.createResponse();
  
      // Mock the Temp.create function
      Temp.create = jest.fn().mockResolvedValue({
        name: 'John Doe',
        email: 'johndoe@example.com',
        age: 30,
      });
  
      // Call the pushTemp function
      await pushTemp(req, res);
  
      // Check the response status and data
      expect(res.statusCode).toBe(200);
      expect(res._isEndCalled()).toBeTruthy(); // Ensure the response has been ended
      expect(JSON.parse(res._getData())).toEqual({
        status: 'success',
        data: {
          name: 'John Doe',
          email: 'johndoe@example.com',
          age: 30,
        },
      });
    });
  
    it('should handle errors and return a fail response', async () => {
      // Mock request and response objects
      const req = httpMocks.createRequest({
        method: 'POST',
        body: {
          name: 'John Doe',
          email: 'johndoe@example.com',
          age: 30,
        },
      });
      const res = httpMocks.createResponse();
  
      // Mock the Temp.create function to throw an error
      Temp.create = jest.fn().mockRejectedValue('Some error message');
  
      // Call the pushTemp function
      await pushTemp(req, res);
  
      // Check the response status and error message
      expect(res.statusCode).toBe(400);
      expect(res._isEndCalled()).toBeTruthy(); // Ensure the response has been ended
      expect(JSON.parse(res._getData())).toEqual({
        status: 'fail',
        message: 'Some error message',
      });
    });
  });