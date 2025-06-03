from flask import Flask, jsonify, request
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

apiKey = '53cc9f71652104acbba6ffb9472cdbbc'

@app.route('/api', methods=["POST"])
def api():
    data = request.get_json()
    city = data.get("city") if data else None

    if city:
        weather_url = f'https://api.openweathermap.org/data/2.5/weather?q={city}&appid={apiKey}&units=metric'
        response = requests.get(weather_url)
        if response.status_code == 200:
            return jsonify(response.json())
        else:
            return jsonify({"cod": 404, "message": "City not found"}), 404
    return jsonify({"error": "City not provided"}), 400

if __name__ == "__main__":
    app.run(debug=True)
