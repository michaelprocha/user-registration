# user-registration

This project consists of an API developed in Node.js integrated with an SQL database. The application allows performing CRUD operations using the GET, POST, PATCH, and DELETE methods, manipulating and querying records in the database.

---

## ✨ Features

- GET – Queries: Returns all records.

- POST – Data insertion: Receives data via JSON. Inserts the new record into the database.

- PATCH – Partial update: Updates specific fields of a record. Accepts only the values ​​sent in the request body.

- DELETE – Data removal: Removes a record by ID.

---

## 🚀 Technologies

This project was developed with the following technologies:

- NodeJS
- mySQL

---

## 📦 How to use

1. Clone the repository:
```bash
git clone https://github.com/michaelprocha/user-registration
```

2. Run it through a local server [NodeJS](https://nodejs.org/en/download).

3. install dependencies: 
- npm install dotenv
- npm install mysql2 

4. Configure environment variables.
Create a .env file:
```.env
DB_HOST=localhost
DB_USER=root
DB_PASS=password
DB_NAME=yourdatabase
```

5. npm run start

---

## 👨‍💻 Author

Made by [Michael Rocha](https://github.com/michaelprocha)

---

## 📄 License

This project is licensed under the MIT License. See the LICENSE file for more details.