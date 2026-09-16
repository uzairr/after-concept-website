from PIL import Image, ImageDraw

def process_logo(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    data = img.load()
    w, h = img.size

    # We need to remove the tagline which is below the wordmark.
    # The wordmark "LandDesign" is roughly in the middle. 
    # Let's find the green frame's color.
    # Green is typically R < G and B < G.
    # We will remove pixels that are not fully opaque or have low alpha (to remove glow).
    # And we will remove dark pixels in the lower section (tagline).

    for y in range(h):
        for x in range(w):
            r, g, b, a = data[x, y]
            
            if a == 0:
                continue

            # Check if pixel is part of the glow (semi-transparent)
            # Or if it's white/light gray in the shadow
            # Let's just make the image binary-like: keep pure green, keep pure black wordmark.
            # But they might have anti-aliasing.
            
            # Tagline is roughly in the bottom 30%? Let's just use a hardcoded box if we know it.
            # We can find the bounding box of the green frame, then erase black text inside or below it.
            pass

    # Save debug image
    img.save("debug_out.png")

process_logo(r'C:\Users\DELL\.gemini\antigravity-cli\brain\c6d3c0cc-f186-4c77-b36e-feb656d46275\.user_uploaded\uploaded_media_1789551317666.png', "processed.png")
