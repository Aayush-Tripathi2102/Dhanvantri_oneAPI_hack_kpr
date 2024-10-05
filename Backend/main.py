from flask import Flask, request, jsonify
from flask_cors import CORS
from square import square

app = Flask(__name__)
CORS(app)  # To allow cross-origin requests from React

@app.route('/api/square', methods=['POST'])
def calculate_square():
    data = request.get_json()  # Get the JSON data from the request
    number = data.get('number')  # Extract the number
    result = square(number)  # Call the square function
    return jsonify({'result': result})  # Return the result as JSON

if __name__ == '__main__':
    app.run(debug=True)
