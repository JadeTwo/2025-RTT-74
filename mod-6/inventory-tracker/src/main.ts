// Create a file called dataProcessor.ts.
// Implement a function that takes a union type of string[] or number[] and returns a formatted string.
// If the input is string[], return a comma-separated list of uppercase strings.
// If the input is number[], return a comma-separated list of numbers rounded to two decimal places.
// Use type guards to distinguish between string[] and number[].
// Add a type alias for the union type to keep the code concise.



// console.log(formatted([1, 4, 5]))
// console.log(formatted(["apple", "orange", "banana"]))

// class ValidationError extends Error {
//     constructor(message: string) {
//         super(message);
//         this.name = "ValidationError";
//     }
// }

// class BobError extends Error {
//     constructor(message: string) {
//         super(message);
//         this.name = "BobError";
//     }
// }

// function validateUsername(username: string) {
//     if (username === 'bob') {
//         throw new BobError('Nice try Bob!')
//     }
//     if (username.length < 5) {
//         throw new ValidationError("Username must be at least 5 characters long.");
//     }
// }

// try {
//     // validateUsername("bob");
// } catch (error: any) {
//     if (error instanceof ValidationError) {
//         console.error("Validation Error:", error.message);
//     } else if (error instanceof BobError) {
//         console.error("Bob Error:", error.message);
//     } else {
//         console.error("Unknown Error:", error.message);
//     }
// }


// type GoodResponse = { success: true; data: string }
// type BadResponse = { success: false; error: string }

// // discriminating union
// type ApiResponse = GoodResponse | BadResponse;

// function fetchData(): ApiResponse {
//     // Simulated API response
//     return { success: false, error: "Server not reachable" };
// }

// // Type Predicate 
// function isError(response: ApiResponse): response is BadResponse {
//     return !response.success; // false 
// }

// const response = fetchData();

// if (isError(response)) {
//     console.error("API Error:", response.error);
// } else {
//     console.log("API Data:", response.data);
// }



const fetchUser = (): Promise<string> => {
    return new Promise((resolve) => {
        setTimeout(() => resolve("User data"), 1000);
    });
};

const fetchOrders = (userData: string): Promise<string[]> => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(["Order1", "Order2", "Order3"]), 1000);
    });
};

fetchUser()
    .then((user) => {
        console.log("Fetched user:", user);
        return fetchOrders(user);
    })
    .then((orders) => {
        console.log("Fetched orders:", orders);
    });