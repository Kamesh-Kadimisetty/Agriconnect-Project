# Agri Connect 🌿🔗

[![YouTube Video Thumbnail](https://firebasestorage.googleapis.com/v0/b/test-576b6.appspot.com/o/tbn.png?alt=media&token=a008a450-af6c-418a-9948-38d9696330dd)](https://www.youtube.com/watch?v=hSLUzoctYGg)

## 🔥 Inspiration

Agri Connect was inspired by the desire to create a comprehensive platform that addresses the diverse agricultural needs of farmers. We recognized the challenges faced by farmers in accessing relevant information, market trends, and agricultural assistance, and sought to develop a solution that would streamline these processes and empower farmers to make informed decisions.

## ❓ What it does

Agri Connect is a multifaceted platform that offers a range of features to support farmers in various aspects of agriculture:

- **Customized Assistance:** Our platform provides personalized crop recommendations based on soil fertility and weather reports, helping farmers optimize their yields.
- **Market Trends and Prices:** We leverage open APIs to deliver current market trends and prices, enabling farmers to make informed decisions about their produce.
- **Multilingual Support:** Agri Connect offers multilingual support in Telugu, Hindi, and English, catering to the diverse linguistic preferences of users. We have plans to expand to more languages in the future.
- **AI Chatbot:** Utilizing OpenAI, our chatbot is fine-tuned to provide relevant and helpful responses in multiple languages, enhancing user experience and accessibility.
- **Social Platform:** Similar to Facebook, Agri Connect allows users to share their farming experiences, updates, and challenges, fostering a supportive farming community.
- **Marketplace:** As a future enhancement, we plan to introduce a marketplace where farmers can showcase their products and retailers can offer machinery for rental and pesticides, promoting transparency and inclusivity in agricultural transactions.

## 🛠 How we built it

Agri Connect is built on the MERN stack (MongoDB, Express.js, React.js, Node.js), providing a robust and scalable architecture for our platform. Additionally, we integrated machine learning APIs, such as crop recommendation, which are developed in Flask.

## 🦾 Challenges we ran into

- **Integrating Multiple APIs:** One of the challenges we faced was integrating various APIs seamlessly to provide comprehensive features without compromising user experience.
- **Multilingual Support:** Implementing multilingual support posed challenges in terms of UI/UX design and language processing, but we overcame these hurdles through thorough testing and iteration.
- **Scaling and Performance:** Ensuring scalability and optimal performance, especially with the inclusion of AI chatbots and marketplace features, required careful planning and optimization.

## 🐱‍🏍 Accomplishments we are proud of

- Successfully implementing personalized crop recommendation based on soil fertility and weather data.
- Providing multilingual support to cater to a diverse user base.
- Developing an AI chatbot that delivers reasonable outputs in multiple languages.
- Creating a user-friendly social platform for farmers to connect and share their experiences.

## 📑 What we learned

- **API Integration:** We gained valuable experience in integrating various APIs into our platform, learning best practices for smooth functionality.
- **Multilingual Support:** Implementing multilingual support taught us the importance of considering linguistic diversity in user interaction design.
- **Machine Learning in Agriculture:** Building machine learning models for crop recommendation enhanced our understanding of applying AI in agriculture for improved productivity.

## 📢 What's next for Agri Connect

- **Enhanced Marketplace:** We aim to further develop the marketplace feature, facilitating transparent transactions between farmers and retailers.
- **Expanded Language Support:** Continuously expanding our language support to reach more farmers across different regions.
- **Community Building:** Strengthening the agricultural community by introducing forums, expert Q&A sessions, and knowledge-sharing initiatives within the platform.

## Screenshots

![App Screenshot 01](https://firebasestorage.googleapis.com/v0/b/test-576b6.appspot.com/o/ss1.png?alt=media&token=345b37bf-34e1-49ae-a12b-941cfdf92e94)

![App Screenshot 02](https://firebasestorage.googleapis.com/v0/b/test-576b6.appspot.com/o/ss2.png?alt=media&token=8dbe3d9b-722f-4463-bc92-dcce4f86b856)

![App Screenshot 03](https://firebasestorage.googleapis.com/v0/b/test-576b6.appspot.com/o/ss3.png?alt=media&token=44d0dad5-298d-4605-b41e-c15e924ac6bb)


## Run Locally

Clone the project

```bash
  https://github.com/Kamesh-Kadimisetty/Agriconnect-Project.git
```

Go to the project directory

```bash
  cd AgriConnect
```

Install dependencies (client)

```bash
  cd client
  npm install
```

Install dependencies (server - MERN)

```bash
  cd server
  npm install
```

Install dependencies (ml-server - FLASK)

```bash
  cd ml-server
  pip install
```

### Environment Variables

To run this project, you will need to add the following environment variables to your .env files

#### client (Vite + React)

- `VITE_API`: URL for the main server.
- `VITE_ML_API`: URL for the Flask ML server.
- `VITE_OPENWEATHERMAP_API_KEY`: API key for OpenWeatherMap.
- `VITE_FB_APIKEY`: Firebase API key.
- `VITE_FB_AUTHDOMAIN`: Firebase authentication domain.
- `VITE_FB_PROJECTID`: Firebase project ID.
- `VITE_FB_STORAGEBUCKET`: Firebase storage bucket.
- `VITE_FB_MESSAGINGSENDERID`: Firebase messaging sender ID.
- `VITE_FB_APPID`: Firebase app ID.

#### server (MERN)

- `PORT`: Port number for the server.
- `MONGO_URL`: MongoDB connection string.
- `JWT_SECRET`: Secret key for JWT authentication.

#### ml-server (FLASK)

- `OPENAI_API_KEY`: API key for OpenAI.

Start the server (client + server)

```bash
  cd server
  npm run dev
```

Start the ml-server (FLASK)

```bash
  cd ml-server
  python main.py
```


## Authors

- [@ashishnallana](https://www.github.com/ashishnallana)
- [@Kamesh-Kadimisetty](https://github.com/Kamesh-Kadimisetty)

