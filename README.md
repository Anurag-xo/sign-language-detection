# Sign Language Detection System ✋🤟

![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![OpenCV](https://img.shields.io/badge/opencv-%23white.svg?style=for-the-badge&logo=opencv&logoColor=white)
![TensorFlow](https://img.shields.io/badge/TensorFlow-%23FF6F00.svg?style=for-the-badge&logo=TensorFlow&logoColor=white)
![MediaPipe](https://img.shields.io/badge/MediaPipe-4285F4?style=for-the-badge&logo=google&logoColor=white)

A real-time Sign Language Detection system that translates hand gestures into text using computer vision and machine learning. This project leverages MediaPipe for hand tracking and a custom neural network for gesture classification.

## Features ✨

- **Real-time hand gesture recognition** using webcam
- **Multiple gesture classification** (8 different signs)
- **Smooth tracking** of hand landmarks
- **Visual feedback** with bounding boxes and landmarks
- **Easy training interface** for adding new gestures
- **Cross-platform** (Windows/Linux/Mac)

<!-- ## Demo 🎥 -->
<!---->
<!-- ![Demo GIF](demo.gif) *(Replace with your actual demo GIF)* -->

## Installation ⚙️

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/sign-language-detection.git
   cd sign-language-detection
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

## Usage 🚀

Run the main application:

```bash
python app.py
```

### Controls:

- `0-9` keys: Switch between gesture modes for data collection
- `n` key: Normal mode (gesture recognition)
- `k` key: Keypoint logging mode (for training new gestures)
- `h` key: History logging mode
- `ESC`: Quit application

## Project Structure 📂

```
sign-language-detection/
├── app.py                 # Main application
├── requirements.txt       # Python dependencies
├── model/
│   ├── keypoint_classifier/       # Hand gesture classifier
│   └── point_history_classifier/  # Gesture motion classifier
├── utils/                # Utility functions
└── notebooks/            # Jupyter notebooks for model training
```

## Training Your Own Model 🧠

1. Collect training data using the application in logging mode
2. Train the model using the provided Jupyter notebooks:
   - `keypoint_classification.ipynb` for static gestures
   - `point_history_classification.ipynb` for motion gestures

## Technologies Used 💻

- **MediaPipe**: For hand landmark detection
- **OpenCV**: For image processing and camera interface
- **TensorFlow/Keras**: For gesture classification model
- **NumPy**: For numerical operations

## Contributing 🤝

Contributions are welcome! Please open an issue or submit a pull request.

## License 📜

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments 🙏

- Inspired by MediaPipe hand tracking examples
- Uses the [MediaPipe](https://mediapipe.dev/) framework by Google

```

```
