class ApiResponse {
  constructor(statuscode, data, message = "Success") {
    this.statuscode = statuscode;
    this.data = data;
    this.message = message;
    this.success = statuscode < 400;
  }
}

// Create a standard API response structure class
class ApiResponse {
  // Constructor to initialize the response properties
  constructor(statuscode, data, message = "Success") {
    this.statuscode = statuscode;                       // HTTP status code (e.g., 200, 201, 400)
    this.data = data;                                   // Response data (can be object, array, etc.)
    this.message = message;                             // Response message (default: "Success")
    this.success = statuscode < 400;                    // Set success based on status code (true if < 400)
  }
}
