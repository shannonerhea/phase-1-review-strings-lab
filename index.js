// Write your code in this file!


// define currentUser to a str
const currentUser = "Nigh Nigh"

// welcomeMessage should equal a "Welcome to Flatbook," /with str interpulation/then add ! 
const welcomeMessage = `Welcome to Flatbook, ${currentUser} !`;

// excitedWelcomeMessage should return "WELCOME TO FLATBOOK, ": use .toUpperCase() pass in currUser
const excitedWelcomeMessage = welcomeMessage.toUpperCase(currentUser);

// shortGreeting should return "Welcome, " currUser / letter at [0] /end with !
const shortGreeting = `Welcome, ${currentUser[0]}!`;
