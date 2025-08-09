from flask import Flask, render_template, request
from model import predict_price
import json
import pandas as pd

app = Flask(__name__)

@app.template_filter('format_number')
def format_number_filter(value):
    # format large numbers to readable form, e.g. 1,234,567 -> 1.23M
    try:
        value = int(value)
    except Exception:
        return value
    if value >= 1_000_000_000:
        return f"{value/1_000_000_000:.2f}B"
    if value >= 1_000_000:
        return f"{value/1_000_000:.2f}M"
    if value >= 1_000:
        return f"{value/1_000:.2f}K"
    return str(value)

def to_list_safe(df, col):
    # Extract column as Series; if DataFrame slice, take first column
    series = df[col]
    if isinstance(series, pd.DataFrame):
        series = series.iloc[:, 0]
    return series.round(2).tolist()

@app.route('/', methods=['GET', 'POST'])
def index():
    result = None
    error = None
    chart_data = None
    company_info = None

    if request.method == 'POST':
        ticker = request.form.get('ticker', '').strip()
        if not ticker.isalnum():
            error = "Invalid ticker symbol. Please enter letters and numbers only."
        else:
            prediction, error, recent_data, company_info = predict_price(ticker)
            if error:
                result = None
            else:
                result = f"Predicted Next Close for {ticker.upper()}: ${round(float(prediction), 2)}"

                if recent_data is not None:
                    chart_data = {
                        'dates': recent_data.index.strftime('%Y-%m-%d').tolist(),
                        'close': to_list_safe(recent_data, 'Close'),
                        'sma7': to_list_safe(recent_data, 'SMA7'),
                        'sma30': to_list_safe(recent_data, 'SMA30'),
                        'predictionIndex': len(recent_data),
                        'prediction': round(float(prediction), 2)
                    }
                else:
                    chart_data = None

    return render_template('index.html', result=result, error=error, chart_data=json.dumps(chart_data), company_info=company_info)


if __name__ == "__main__":
    app.run(debug=True)
