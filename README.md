
# Netflix Clone

This project is a Netflix clone built using React.js and Firebase. It allows users to log in, stream movies, and offers a dynamic, resizable user interface. Although it lacks a search feature, it includes essential functionalities such as user authentication and media playback.

## Features

- **User Authentication**: Secure login and registration using Firebase Authentication.
- **Responsive Design**: The application is fully responsive and adjusts to different screen sizes.
- **Media Streaming**: Stream movies with smooth playback.
- **Firebase Integration**: Utilizes Firebase for backend services including authentication and hosting.

## Technologies Used

- **React.js**: Frontend library for building the user interface.
- **Firebase**: Backend services including Firebase Authentication and Firebase Hosting.
- **CSS**: Styling the components and layout.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/TiTANWASTAKEN/netflix-clone.git
   ```
2. Navigate to the project directory:
   ```sh
   cd netflix-clone
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```
4. Create a Firebase project and add your Firebase configuration to `.env` file:
   ```env
   REACT_APP_FIREBASE_API_KEY=your-api-key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
   REACT_APP_FIREBASE_PROJECT_ID=your-project-id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
   REACT_APP_FIREBASE_APP_ID=your-app-id
   ```
5. Start the development server:
   ```sh
   npm start
   ```

## Usage

- Navigate to `http://localhost:3000` in your web browser.
- Register or log in with your credentials.
- Browse and stream available movies.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.



