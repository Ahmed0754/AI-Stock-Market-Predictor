from flask import Flask, render_template, request
from model import predict_next_close, get_plot_html

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def index():
    error = None
    prediction = None
    plot_url = None

    if request.method == "POST":
        ticker = request.form.get("ticker", "").upper()
        if not ticker:
            error = "Please enter a ticker symbol."
        else:
            try:
                prediction = predict_next_close(ticker)
                plot_url = get_plot_html(ticker)
            except Exception as e:
                error = f"Error: {str(e)}"

    return render_template("index.html", prediction=prediction, error=error, plot_url=plot_url)

if __name__ == "__main__":
    app.run(debug=True)
