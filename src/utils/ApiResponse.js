/**
 * Represents a standardized API response object for successful and error responses.
 *
 * @class ApiResponse
 * @param {number} statusCode - HTTP status code indicating the outcome of the API operation.
 * @param {any} data - The data payload of the API response (can be any data type).
 * @param {string} [message="SUCCESS"] - A descriptive message associated with the API response.
 */
class ApiResponse {
  constructor(statusCode, data, message = "SUCCESS") {
    // Set properties based on constructor parameters.
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;

    // Determine success based on the HTTP status code (status codes < 400 are considered successful).
    this.success = statusCode < 400;
  }
}

// Example usage:
// const successResponse = new ApiResponse(200, { result: "Data successfully retrieved" });
// const errorResponse = new ApiResponse(404, null, "Resource not found");
// return res.status(successResponse.statusCode).json(successResponse);

export { ApiResponse };
