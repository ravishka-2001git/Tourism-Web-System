from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

# Define some simple responses for demonstration purposes
def get_response(user_input):
    responses = {
        "hi": "Hello! How can I help you with your travel plans?",
        "What packages do you have?": "Hi there! What can I do for you today?",
        "how are you": "I'm a bot, but I'm here to help you with your travel queries!",
        "default": "I'm sorry, I don't understand that. Can you please rephrase?"
    }
    return responses.get(user_input.lower(), responses["default"])

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/chat', methods=['POST'])
def chat():
    user_input = request.json.get("message")
    response = get_response(user_input)
    return jsonify({"response": response})

if __name__ == '__main__':
    app.run(debug=True)
