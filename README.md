##EmployWise User Management App
This is a React-based web application that allows user management operations including login, listing users, and editing/deleting users. It interacts with the Reqres API to perform these actions.
Link to the live project:https://flourishing-beignet-be6901.netlify.app
##
Project Overview
The application is divided into three major levels:
##

Authentication Screen: User can log in using predefined credentials.
User List: Displays a list of users with pagination.
Edit, Delete, and Update Users: Ability to edit user details, delete users, and navigate between different pages of users.
Features
Level 1: Authentication Screen
Login form where users can authenticate using predefined credentials.
After successful login, the user is redirected to the Users List page.
The login token is stored in localStorage to persist the session.
Level 2: List All Users
Displays a paginated list of users from the Reqres API.
User data includes first name, last name, and avatar.
Implements pagination to navigate through different pages of users.
Level 3: Edit, Delete, and Update Users
Users can edit a user's first name, last name, and email.
Users can delete a user from the list.
Appropriate success or error messages are shown after each action.

####Technologies Used
Frontend: React.js
Styling: Tailwind CSS
API Interaction: Axios
Routing: React Router
State Management: React's useState and useEffect
Installation and Setup
1. Clone the Repository
Clone the repository using the command:
git clone https://github.com/your-username/employee-wise.git
2. Navigate to the Project Directory
cd employee-wise
3. Install Dependencies
Run the following command to install the necessary dependencies:

npm install
4. Start the Development Server
To run the app locally, use the following command:

###bash
npm start
This will start the development server and open the application in your default web browser. The app should be accessible at http://localhost:3000.

###How to Use
Login: Enter the provided credentials (email: eve.holt@reqres.in, password: cityslicka) to log in.
View Users: After login, you'll be redirected to the users list, which displays a paginated list of users.
Edit Users: Click on the "Edit" button next to a user to edit their first name, last name, and email.
Delete Users: Click on the "Delete" button next to a user to remove them from the list.
Search: Use the search bar at the top to filter users based on their name.

###Folder Structure
bash

src/
├── components/
│   ├── AuthPage.jsx            # Login page component
│   ├── Users.jsx               # Users list component
│   └── EditUser.jsx            # Edit user page component
├── App.jsx                     # Main app component
├── index.js                    # React entry point
├── App.css                     # Global styles (tailwind and custom styles)
└── index.css                   # Tailwind CSS setup
Routes
/ - The login page where users authenticate.
/users - Displays the list of users after successful login.
/edit-user - Edit the details of a selected user.
API Endpoints


Authentication:
POST /api/login
Request Body:
json

{
  "email": "eve.holt@reqres.in",
  "password": "cityslicka"
}

Response:

{
  "token": "your-token-here"
}

###
Users List:
GET /api/users?page=1
Response:
json

{
  "page": 1,
  "total_pages": 2,
  "data": [
    {
      "id": 1,
      "first_name": "George",
      "last_name": "Bluth",
      "email": "george.bluth@reqres.in",
      "avatar": "https://reqres.in/img/faces/1-image.jpg"
    },
    ...
  ]
}

##Update User:
PUT /api/users/{id}
Request Body:
json
{
  "first_name": "John",
  "last_name": "Doe",
  "email": "john.doe@example.com"
}
Response:
json

{
  "id": 1,
  "first_name": "John",
  "last_name": "Doe",
  "email": "john.doe@example.com",
  "avatar": "https://reqres.in/img/faces/1-image.jpg"
}

##Delete User:
DELETE /api/users/{id}
Response:
json

{
  "message": "User deleted successfully"
}

##Error Handling
Authentication Failure: If the login credentials are incorrect, an error message will be displayed.
API Errors: If there's an issue with fetching or updating user data, an error message will be shown.
Form Validation: Login and edit forms have basic validation to ensure required fields are filled.

##Future Improvements
Add Client-Side Validation: Enhance form validation to provide more user-friendly feedback.
Add Search and Filtering: Implement a more advanced search and filtering system for users.
Improve UI/UX: Add more interactive elements like loading spinners and better error handling.
