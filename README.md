# 📈 AI Stock Market Predictor

A full-stack AI-powered stock market forecasting application that uses LSTM (Long Short-Term Memory) neural networks to predict future stock prices. Built with **Flask**, **Keras**, and **Yahoo Finance API**, the app allows users to enter any stock ticker symbol and visualize past trends alongside future predictions. Includes a sleek, responsive UI with **Dark Mode** toggle.

---

## 🚀 Features

- 🔍 Enter any **stock ticker symbol** (e.g., AAPL, TSLA, MSFT)
- 📊 Fetches **5 years** of historical stock data via Yahoo Finance
- 🤖 Uses **LSTM neural networks** to forecast future prices
- 📈 Plots **interactive charts** of actual vs predicted stock trends
- 🌙 **Dark Mode / Light Mode** toggle
- 🧠 Deep learning powered with **Keras + TensorFlow**
- 🌐 Lightweight **Flask web app**

---

## 🧠 How It Works

1. User enters a valid stock ticker (e.g., `AAPL` for Apple)
2. The app downloads 5 years of stock data using `yfinance`
3. It scales and reshapes the data for LSTM training
4. An **LSTM model** is trained in real-time
5. The model predicts the next 30 days of stock prices
6. The app visualizes actual & predicted values in an interactive chart

---

## 📸 Demo

![Demo Screenshot](demo.gif)  
*(Replace with your own image or GIF)*

---

## 🛠️ Tech Stack

| Layer         | Technologies                  |
|---------------|-------------------------------|
| Frontend      | HTML, CSS, JavaScript         |
| Backend       | Python, Flask                 |
| Machine Learning | Keras, TensorFlow, Scikit-learn |
| Data          | yfinance (Yahoo Finance API)  |
| Visualization | Matplotlib, Plotly            |

---

## 📂 Project Structure

.
├── app.py # Flask app backend
├── templates/
│ └── index.html # Frontend interface
├── static/
│ ├── style.css # Styling (optional)
├── requirements.txt # Python dependencies
├── README.md # This file

yaml
Copy
Edit

---

## ✅ Getting Started

### 1. Clone the repo


git clone https://github.com/your-username/AI-Stock-Market-Predictor.git
cd AI-Stock-Market-Predictor
2. Create a virtual environment
bash
Copy
Edit
python3 -m venv venv
source venv/bin/activate   # On Windows: venv\Scripts\activate
3. Install dependencies
bash
Copy
Edit
pip install -r requirements.txt
4. Run the app
bash
Copy
Edit
python app.py
Then open your browser and go to:
http://127.0.0.1:5000

📦 Dependencies
nginx
Copy
Edit
Flask
tensorflow
pandas
numpy
scikit-learn
matplotlib
yfinance
plotly
Install all with:

bash
Copy
Edit
pip install -r requirements.txt
🧪 Example Tickers to Try
AAPL – Apple Inc.

TSLA – Tesla Inc.

GOOG – Alphabet Inc.

AMZN – Amazon

MSFT – Microsoft

🌐 Live Demo
Coming soon… (optional deployment on Heroku, Vercel, etc.)

🤝 Contributions
PRs are welcome! Feel free to fork this repo, add new features (like multi-stock comparison or moving average), and make pull requests.

📄 License
MIT License – free to use, share, and modify.

👨‍💻 Author
Ahmed Ali
Computer Science @ SUNY New Paltz
GitHub: Ahmed0754


