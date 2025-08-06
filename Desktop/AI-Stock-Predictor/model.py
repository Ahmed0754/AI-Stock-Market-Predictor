import matplotlib
matplotlib.use('Agg')  # Use non-interactive backend that doesn't require a GUI
import matplotlib.pyplot as plt
import yfinance as yf
import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression
import matplotlib.pyplot as plt
import io
import base64

def predict_next_close(ticker):
    df = yf.download(ticker, period="6mo", interval="1d")
    
    if df.empty or 'Close' not in df.columns:
        raise ValueError("Invalid ticker or no data available.")

    df = df.dropna()
    df['Day'] = np.arange(len(df)).reshape(-1, 1)

    X = df['Day'].values.reshape(-1, 1)
    y = df['Close'].values.reshape(-1, 1)

    model = LinearRegression()
    model.fit(X, y)

    next_day = np.array([[len(df)]])
    predicted = model.predict(next_day)

    # Convert prediction to scalar
    predicted_scalar = float(predicted[0][0])
    return round(predicted_scalar, 2)


def get_plot_html(ticker):
    df = yf.download(ticker, period="6mo", interval="1d")
    
    if df.empty or 'Close' not in df.columns:
        raise ValueError("Invalid ticker or no data available.")

    plt.figure(figsize=(10, 5))
    plt.plot(df['Close'], label='Close Price')
    plt.title(f"{ticker.upper()} Closing Prices (Last 6 Months)")
    plt.xlabel('Date')
    plt.ylabel('Price (USD)')
    plt.legend()

    buf = io.BytesIO()
    plt.savefig(buf, format='png')
    buf.seek(0)
    image_base64 = base64.b64encode(buf.read()).decode('utf-8')
    plt.close()

    return f"data:image/png;base64,{image_base64}"
