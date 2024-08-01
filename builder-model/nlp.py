from flask import Flask, render_template, request
import joblib
from flask import jsonify, render_template_string, abort, send_file
import os
from sklearn.preprocessing import LabelEncoder
import pandas as pd
app = Flask(__name__)

# Load the pre-trained model
model = joblib.load('model3.pkl')
df = pd.read_json("News_Category_Dataset_v3.json", lines=True)
vr = ["POLITICS","PARENTING","QUEER VOICES","BLACK VOICES","PARENTS","THE WORLDPOST","WOMEN","CRIME","IMPACT","DIVORCE","GREEN","WORLDPOST","RELIGION","TASTE","MONEY","FIFTY","LATINO VOICES"]
df = df[~df['category'].isin(vr)]
y =df['category']

encoder = LabelEncoder()
y = encoder.fit_transform(y)
v = dict(zip(list(y), df['category'].to_list()))

@app.route('/')
def index():
    return render_template('index2.html')

@app.route('/predict', methods=['POST'])
def predict():
    # Get the input text from the request
    input_text = request.json.get('text')

    # Assume input_text is the filename (without extension)
    p=model.predict( [input_text])
    it=v[p[0]]
    filename = "html_files/"+it+".html"

    # Check if the file exists
    file_path = os.path.join('static', 'html_files', filename)
    if os.path.exists(file_path):
        with open(file_path, 'r', encoding='utf-8') as f:
            html_content = f.read()
    else:
        return jsonify({'html': f"<p>HTML content not found for '{filename}'</p>"})

    return jsonify({'html': html_content})

if __name__ == '__main__':
    app.run(debug=True)
