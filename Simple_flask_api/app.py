
from flask import Flask, jsonify, request
import json

app = Flask(__name__)

# Load data from JSON file
with open("data.json") as f:
    data = json.load(f)

@app.route("/")
def home():
    return jsonify({"message": "Welcome to the Flask API!"})

@app.route("/users", methods=["GET"])
def get_users():
    return jsonify(data["users"])

@app.route("/users/<int:user_id>", methods=["GET"])
def get_user(user_id):
    user = next((u for u in data["users"] if u["id"] == user_id), None)
    if user:
        return jsonify(user)
    return jsonify({"error": "User not found"}), 404

@app.route("/users", methods=["POST"])
def add_user():
    new_user = request.get_json()
    new_user["id"] = max([u["id"] for u in data["users"]]) + 1
    data["users"].append(new_user)
    with open("data.json", "w") as f:
        json.dump(data, f, indent=2)
    return jsonify(new_user), 201

@app.route("/users/<int:user_id>", methods=["DELETE"])
def delete_user(user_id):
    for i, u in enumerate(data["users"]):
        if u["id"] == user_id:
            deleted_user = data["users"].pop(i)
            with open("data.json", "w") as f:
                json.dump(data, f, indent=2)
            return jsonify({"message": "User deleted", "user": deleted_user})
    return jsonify({"error": "User not found"}), 404

if __name__ == "__main__":
    app.run(debug=True)
