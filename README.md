
# Code Editor Application


[Link for Live Demo](https://code-editor-task.netlify.app/)

A simple web-based code editor with syntax highlighting for Python, JavaScript, and Java using React and Prism.js.

## Installation

Follow these steps to set up the project on your local machine:

1. **Clone the repository:**
bash
git clone https://github.com/UtkJaiswal/Code-Editor-Prismjs
cd code-editor
2. **Install the dependencies:**
bash
npm install
3. **Run the application:**
bash
npm start
This will start the development server and open the application in your default browser.

## File Descriptions

### Root Directory

**App.js:** The main component of the application, which manages the state and renders the LanguageSelector and CodeEditor components.
**App.css:** Basic styles for the application container.
**index.js:** The entry point of the application.

### Components Directory

**components/CodeEditor.js:** A component responsible for rendering the editable code area and applying syntax highlighting using Prism.js.
**components/LanguageSelector.js:** A component for selecting the programming language for syntax highlighting.

### Public Directory

**index.html:** The HTML file that includes a div element with the id of root. This is where the React application is injected.


