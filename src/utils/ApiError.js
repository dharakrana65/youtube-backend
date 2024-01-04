/**
 * Custom error class for handling API-related errors in a structured way.
 * Extends the built-in Error class.
 *
 * @class ApiError
 * @extends Error
 * @param {number} statusCode - HTTP status code to be sent in the response.
 * @param {string} [message="Something went wrong"] - Error message to be associated with the error.
 * @param {Array} [errors=[]] - Array of detailed error objects or messages.
 * @param {string} [stack=""] - Stack trace string associated with the error.
 */
class ApiError extends Error {
  constructor(
    statusCode,
    message = "Something went wrong",
    errors = [],
    stack = ""
  ) {
    // Call the constructor of the parent class (Error).
    super(message);

    // Set properties specific to ApiError.
    this.statusCode = statusCode;
    this.message = message;
    this.errors = errors;
    this.data = null;
    this.success = false; // Indicates that the operation was not successful.

    // If a custom stack trace is provided, set it; otherwise, capture the stack trace.
    if (stack) {
      this.stack = stack;
    } else {
      // Capture the stack trace, excluding the constructor call from it.
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

// Example usage:
// const apiError = new ApiError(404, "Resource not found", [{ field: "id", message: "Invalid ID" }]);
// throw apiError;

export { ApiError };
