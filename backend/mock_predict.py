
from flask import Flask, request, jsonify
from flask_cors import CORS
import random
import time

app = Flask(__name__)
CORS(app)

@app.route('/api/predict', methods=['POST'])
def predict():
    # Simulate a delay to mimic a real model's inference time
    time.sleep(0.5)

    # Mock data
    labels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'Thumbs Up', 'Thumbs Down', 'Peace']
    
    # Return a random prediction
    prediction = {
        'label': random.choice(labels),
        'confidence': round(random.uniform(0.8, 0.99), 2)
    }
    
    return jsonify(prediction)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
