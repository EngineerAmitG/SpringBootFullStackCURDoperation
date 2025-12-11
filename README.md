🚀 Full Stack CRUD Application (Spring Boot + React)

This is a full-stack CRUD application built using:

React (Frontend)
Spring Boot (Backend)
PostgreSQL (Database — depending on your setup)
Axios for API calls
Bootstrap for UI styling

The app supports:
✔ Create User
✔ Read Users
✔ Update User
✔ Delete User
✔ Full API Integration
✔ CORS Enabled
✔ Modern React Hooks (useState, useEffect)

📁 Project Structure
fullstack-project/
│
├── backend/   (Spring Boot Project)
│   ├── src/main/java
│   ├── src/main/resources
│   ├── pom.xml
│
└── frontend/  (React Project)
    ├── src/
    ├── public/
    ├── package.json

🛠 Backend Setup (Spring Boot)
1. Go to backend folder
    cd backend
2. Configure Database
3. 
Open application.properties or application.yml:

Example (PostgreSQL)
spring.datasource.url=jdbc:mysql://localhost:3306/testdb
spring.datasource.username=root
spring.datasource.password=yourpassword
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

3. Run the backend
Option 1 — Using IntelliJ / STS
  Click Run on the main class:
    FullstackApplication.java
Option 2 — Using Terminal
  mvn spring-boot:run
  Backend will run on:
    http://localhost:8080

🎨 Frontend Setup (React)
1. Go to frontend folder
    cd frontend
2. Install packages
    npm install
3. Run the frontend
    npm run dev
Frontend will run on:
http://localhost:5173

🔗 Frontend ⇆ Backend Connection

Your frontend uses Axios to call backend APIs such as:

axios.get("http://localhost:8080/users");
axios.post("http://localhost:8080/user");
axios.delete(`http://localhost:8080/user/${id}`);
axios.put(`http://localhost:8080/user/${id}`);

Make sure your Spring Boot controller includes:

@CrossOrigin("http://localhost:5173")

📌 Available API Endpoints (Spring Boot)
Method	Endpoint	Description
POST	/user	Create new user
GET	/users	Get all users
GET	/user/{id}	Get user by ID
PUT	/user/{id}	Update user details
DELETE	/user/{id}	Delete user by ID
🧪 Testing APIs

You can test using:
Postman
Thunder Client
Browser (for GET)
Example:
GET http://localhost:8080/users

✔ Technologies Used
Frontend
- React
- Axios
- Bootstrap
- React Router DOM

Backend
- Spring Boot
- Spring Web
- Spring JPA
- Hibernate
- PostgreSQL Driver

🙋‍♂️ How to Run Entire Project Together
Step 1 — Start Backend
mvn spring-boot:run

Step 2 — Start Frontend
npm run dev

Step 3 — Open browser
http://localhost:5173

💾 Build Production Version
Backend JAR:
mvn clean package

Frontend Build:
npm run build

This creates a dist/ folder.

🧩 Future Enhancements
Add Login & Authentication (JWT)
Pagination & Sorting
Global State using Redux / Zustand
Docker Compose for both frontend & backend
Deployment on Render / Vercel / Railway / AWS

❤️ Author
Amitava Kar
Full Stack Java Developer
