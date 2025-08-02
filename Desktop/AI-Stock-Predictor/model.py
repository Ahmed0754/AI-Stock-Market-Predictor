import yfinance as yf
import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split

def predict_stock(ticker):
    try:
        df = yf.download(ticker, period="1y")
        df = df[["Close"]]
        df["Target"] = df["Close"].shift(-1)
        df.dropna(inplace=True)

        X = np.array(df[["Close"]])
        y = np.array(df["Target"])

        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, shuffle=False)

        model = LinearRegression()
        model.fit(X_train, y_train)

        latest_close = X[-1]
        latest_close = latest_close.reshape(1, -1)  # Fix here: reshape to 2D (1, 1)

        prediction = model.predict(latest_close)[0]

        return f"Predicted Next Close for {ticker.upper()}: ${prediction:.2f}"
    except Exception as e:
        return f"Error: {e}"
