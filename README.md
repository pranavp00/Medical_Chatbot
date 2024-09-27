
# MEDICAL CHATBOT

The Medical Chatbot is an AI-driven chatbot designed to assist users in identifying potential medical conditions based on their symptoms. This chatbot leverages natural language processing (NLP) to understand user inputs and provides suggestions or information about possible conditions. It aims to offer accessible health insights for early awareness and support for users before they seek professional medical consultation.

## Features

- Conversational AI interface for symptom-based medical condition suggestions.

- Utilizes NLP to understand user queries and provide relevant responses.
- Aids in early awareness of potential health issues.



## Installation

#### Clone the repository:
```bash
  git clone https://github.com/pranavp00/Medical_Chatbot.git
  cd Medical_Chatbot

```
#### Backend Setup:
Navigate to the backend directory
```bash
  cd backend

```
Activate your Python virtual environment (if not already activated):
```bash
  'For Windows'
   venv\Scripts\activate

  'For macOS/Linux'
   source venv/bin/activate


```
Install `gradio_client` and other dependencies:
```bash
  pip install -r requirements.txt
  pip install gradio_client

```
#### Frontend Setup:
Navigate to the frontend directory:
```bash
  cd ../frontend

```
Install frontend dependencies:
```bash
  npm install

```

#### Run the Chatbot:
##### Run the Backend:
Navigate to the backend directory and start the development server:
```bash
  cd backend
  npm run dev
```
##### Run the frontend:
In a separate terminal, navigate to the frontend directory and start the frontend development server:
```bash
  cd frontend
  npm run dev

```
##### Acess the Chatbot:
- Once both the backend and frontend servers are running, open your browser and navigate to the provided local development URL (usually http://localhost:3000 or similar) to start interacting with the Medical Chatbot.

## Usage/Examples


- Start the chatbot by running the main script (replace app.py with the actual file if different).
- Input your symptoms or health concerns.
- The chatbot will provide possible medical conditions related to your symptoms.
- For accurate diagnosis, consult a healthcare professional after using the chatbot for preliminary guidance.
## Technology used

**Mern Stack:** MongoDB, Express.js, React.js, and Node.js for the full-stack application development.

**Natural Language Processing(NLP):** For symptom analysis and condition suggestions.

**Python:** For open source LLM

**Microsoft GRIN-MOE:**  Employed for generative AI capabilities in the chatbot.

**Web Scraping:** Used to gather relevant medical data 

## Demo

- SIGN-UP/LOGIN :
- CHATBOT :
- SEARCH FOR DOCTORS AND BOOKING APPOINTMENT :




## Contributing

Contributions are always welcome!
Feel free to contribute to the project:

- Fork the repository.
- Create a new branch `git checkout -b feature-branch`
- Make your changes.
- Submit a pull request.

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.


## Contact
If you have any questions or suggestions about this project, feel free to contact:

- Email: adityran1405@gmail.com
- GitHub: https://github.com/pranavp00