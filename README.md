

```markdown
# Student Management API

A simple **CRUD application** for managing student data, built with **TypeScript**, **Express.js**, and the **MVC architecture**. This project demonstrates how to implement asynchronous operations, routing, and dependency injection.

---

## Features

- Fetch all students.
- Add a new student.
- Update student information.
- Delete a student record.
- Asynchronous operations using `async/await` with proper error handling.

---

## Technology Stack

- **Backend**: Node.js, Express.js
- **Language**: TypeScript
- **Architecture**: MVC (Model-View-Controller)
- **Testing Tool**: Postman

---

## Project Structure

```
student-management/
├── src/
│   ├── controllers/     # Request handlers
│   ├── models/          # Request and response models
│   ├── routes/          # API routes
│   ├── app.ts           # Entry point of the app
├── package.json         # Project dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── README.md            # Project documentation
```

---

## Prerequisites

Before starting, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Postman](https://www.postman.com/) for API testing

---

## Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/ajaypalamkunnel/student-management.git
   cd student-management
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start the Development Server**
   ```bash
   npm run dev
   ```

   The server will run at `http://localhost:3000`.

---

## API Endpoints

### 1. Fetch All Students
- **Method**: `GET`
- **URL**: `/students/getstudents`

### 2. Add a Student
- **Method**: `POST`
- **URL**: `/students/addstudent`
- **Body** (JSON):
  ```json
  {
    "name": "John Doe",
    "age": 20,
    "class": "10th Grade"
  }
  ```

### 3. Update a Student
- **Method**: `PUT`
- **URL**: `/students/updatestudent/:id`
- **Body** (JSON):
  ```json
  {
    "name": "John Smith",
    "age": 21,
    "class": "11th Grade"
  }
  ```

### 4. Delete a Student
- **Method**: `DELETE`
- **URL**: `/students/deletestudent/:id`

---

## Scripts

- **Start Development Server**: 
  ```bash
  npm run dev
  ```

- **Compile TypeScript**: 
  ```bash
  npm run build
  ```

- **Start Production Server**: 
  ```bash
  npm start
  ```

---

## Postman Testing

1. Open Postman and create a new collection.
2. Add the endpoints mentioned above.
3. Test each endpoint by sending appropriate requests.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for enhancements or bug fixes.

---

## Author

- **Ajay Bias**  
  [GitHub](https://github.com/ajaypalamkunnel) | [LinkedIn](https://linkedin.com/in/your-profile)
```
