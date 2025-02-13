from flask import Flask, request, json, jsonify
from ask import Ask
import pickle
import time
from retrieve import script
from flask_cors import CORS
# create the Flask app
app = Flask(__name__)
CORS(app, origin='https://localhost:5173', supports_credentials=True)

askinstance = Ask()


def load_model(model_path):
    with open(model_path, 'rb') as f:
        model = pickle.load(f)
    return model


# Load the pickled model
model_path = "model.pkl"
model = load_model(model_path)

# allow both GET and POST requests


@app.route('/predict', methods=['POST'])
def form_example():
    # handle the POST request
    if request.method == 'POST':
        request_data = request.get_json()
        print("start")
        nitrogen_value = int(request_data["N"])
        phosphorus_value = int(request_data["P"])
        pottasium_value = int(request_data["K"])
        temperature_value = float(request_data["temperature"])
        humidity_value = float(request_data["humidity"])
        ph_value = float(request_data["ph"])
        rainfall_value = float(request_data["rainfall"])
        input_data = [[nitrogen_value, phosphorus_value, pottasium_value,
                       temperature_value, humidity_value, ph_value, rainfall_value]]
        nitrogen_value = int(request_data["N"])
        phosphorus_value = int(request_data["P"])
        pottasium_value = int(request_data["K"])
        temperature_value = float(request_data["temperature"])
        humidity_value = float(request_data["humidity"])
        ph_value = float(request_data["ph"])
        rainfall_value = float(request_data["rainfall"])
        input_data = [[nitrogen_value, phosphorus_value, pottasium_value,
                       temperature_value, humidity_value, ph_value, rainfall_value]]
        crop_prediction = model.predict(input_data)
        data = {"suggestion": crop_prediction[0]}
        print("done")
        return json.dumps(data)


@app.route('/chat', methods=['POST'])
def form_example1():
    # handle the POST request
    if request.method == 'POST':
        request_data = request.get_json()
        message = request_data["message"]
        response = askinstance.process(message)
        data = {"message": response}
        return json.dumps(data)


@app.route('/request', methods=['GET'])
def requestPage():
    commodityQuery = request.args.get('commodity')
    stateQuery = request.args.get('state')
    marketQuery = request.args.get('market')

    if not commodityQuery or not stateQuery or not marketQuery:
        return jsonify({"error": "Missing query parameters"})

    try:
        json_data = json.dumps(
            script(stateQuery, commodityQuery, marketQuery), indent=4)
        return json_data
    except Exception as e:
        return jsonify({"error": str(e)})


if __name__ == '__main__':
    # run app in debug mode on port 5000
    app.run(host="0.0.0.0", debug=True, port=5000)
