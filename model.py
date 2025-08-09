import yfinance as yf
import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression

def predict_price(ticker):
    try:
        # Download historical data for 6 months
        data = yf.download(ticker, period="6mo", interval="1d", progress=False)
        
        if data.empty:
            return None, f"No data found for ticker {ticker}.", None, None
        
        data = data[['Close']].dropna()

        # Add simple moving averages
        data['SMA7'] = data['Close'].rolling(window=7).mean()
        data['SMA30'] = data['Close'].rolling(window=30).mean()
        data = data.dropna()

        # Prepare features and labels for model training
        data.reset_index(inplace=True)
        data['Day'] = np.arange(len(data))
        
        X = data[['Day']]
        y = data['Close']

        # Train linear regression model
        model = LinearRegression()
        model.fit(X, y)

        # Predict the next day's closing price
        next_day = np.array([[len(data)]])
        predicted_price = model.predict(next_day).item()  # convert 1-element array to scalar float

        # Prepare recent data for chart display (last 30 days)
        recent_data = data.tail(30).set_index('Date')

        # Get company info from yfinance
        info = None
        try:
            ticker_obj = yf.Ticker(ticker)
            info = ticker_obj.info
        except Exception:
            info = None

        return round(predicted_price, 2), None, recent_data, info

    except Exception as e:
        return None, str(e), None, None
