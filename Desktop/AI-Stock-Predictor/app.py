from flask import Flask, render_template, request
from model import predict_stock

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def home():
    prediction = ""
    if request.method == "POST":
        ticker = request.form["ticker"]
        prediction = predict_stock(ticker)
    return render_template("index.html", prediction=prediction)

if __name__ == "__main__":
    app.run(debug=True)
