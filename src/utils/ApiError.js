class ApiError extends Error {
  constructor(
    statuscode,
    message = "Something went wrong",
    errors = [],
    stack = "",
  ) {
    super(message);
    this.statuscode = statuscode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };

// // Create a custom error class extending built-in Error
// class ApiError extends Error {
//   // Constructor to initialize error properties
//   constructor(
//     statuscode,                              // HTTP status code (e.g., 404, 500)
//     message = "Something went wrong",        // Default error message
//     errors = [],                             // Optional detailed errors (like validation errors)
//     stack = "",                              // Optional custom stack trace
//   ) {
//     super(message);                          // Call parent Error constructor with message
//     this.statuscode = statuscode;            // Set HTTP status code
//     this.data = null;                        // Default data field (unused but placeholder)
//     this.message = message;                  // Set error message
//     this.success = false;                    // Indicate API call failed
//     this.errors = errors;                    // Attach additional error details if any

//     if (stack) {
//       this.stack = stack;                    // Use custom stack trace if provided
//     } else {
//       Error.captureStackTrace(this, this.constructor); // Generate stack trace from this point
//     }
//   }
// }

// // Export the ApiError class for use in other files
// export { ApiError };
