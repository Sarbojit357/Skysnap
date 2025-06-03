# SkySnap ☁️

A modern, responsive weather application built with **React** (frontend) and **Flask** (backend).  
SkySnap lets you check current weather conditions for any city worldwide, with a beautiful UI and dark mode support.

[GitHub Repo](https://github.com/Sarbojit357/Skysnap.git)  

---

## Features

- 🌤️ **Real-time weather** by city name
- 🌓 **Light/Dark mode** toggle
- 📱 **Mobile responsive** design
- 🎨 Modern UI with navbar and footer
- 🔒 CORS-enabled Flask backend
- ☁️ Weather icons and details (temperature, humidity, wind)

---

git clone https://github.com/Sarbojit357/Skysnap.git
cd Skysnap

text

### 2. Setup the Flask Backend

python3 -m venv venv
source venv/bin/activate # On Windows: venv\Scripts\activate
pip install -r requirements.txt

text

- Create a `.env` file and add your OpenWeather API key:

OPENWEATHER_API_KEY=your_api_key_here

text

### 3. Setup the React Frontend

cd client
npm install
npm start

text

- The React app will run on [http://localhost:3000](http://localhost:3000)

### 4. Run Flask Backend

From the project root:

flask run

text

- The Flask backend will run on [http://localhost:5000](http://localhost:5000)

---

## Deployment

You can deploy SkySnap on platforms like [Render](https://render.com), [Heroku](https://heroku.com), or [Vercel](https://vercel.com) for the frontend.

See detailed deployment instructions in the [wiki](#) (or ask the author).

---

---

## API Reference

- [OpenWeatherMap API Docs](https://openweathermap.org/current)

---

## License

[MIT](LICENSE)

---

## Author

- [Sarbojit357](https://github.com/Sarbojit357)

---

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---
