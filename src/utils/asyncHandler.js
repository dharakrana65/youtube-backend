/**
 * Wraps an asynchronous request handler function, ensuring that any promises
 * it returns are properly handled and any errors are forwarded to the Express
 * error handling middleware.
 *
 * @param {Function} requestHandler - The asynchronous request handler function.
 * @returns {Function} - A middleware function that can be used in Express routes.
 */
const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    // Wrap the execution of the request handler in a Promise to handle asynchronous operations.
    Promise.resolve(requestHandler(req, res, next)).catch((err) => {
      // If there is an error during the execution of the request handler, pass it to the next middleware.
      next(err);
    });
  };
};

// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success : false,
//             message : error.message
//         })
//     }
// }
export { asyncHandler };
