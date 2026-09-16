import cv2
import numpy as np

# Load the image
img_path = r'public/images/landdesign-logo.png'
# img_path = r'C:\Users\DELL\.gemini\antigravity-cli\brain\c6d3c0cc-f186-4c77-b36e-feb656d46275\.user_uploaded\uploaded_media_1789551317666.png'
img = cv2.imread(img_path, cv2.IMREAD_UNCHANGED)

# Create a mask for black text in the bottom half
h, w = img.shape[:2]
bottom_half_mask = np.zeros((h, w), dtype=np.uint8)
bottom_half_mask[int(h*0.5):, :] = 255

# Define colors
# The text is likely dark/black. The wordmark "LandDesign" is also dark, but we only want to remove text in the lower half where the green frame doesn't have black.
# Wait, what if the green frame has dark edges? Let's just erase anything that isn't green in the bottom half? No, the wordmark "LandDesign" is in the middle.
# Let's save a visual debug image to see where things are.
