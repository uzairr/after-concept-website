from PIL import Image

def remove_background(in_path, out_path):
    img = Image.open(in_path).convert("RGBA")
    datas = list(img.getdata()) # avoid warning

    newData = []
    for item in datas:
        r, g, b, a = item
        # If it's a dark gray/black pixel (all channels below 50)
        # We can also check if it's very close to black
        if max(r, g, b) < 60 and (abs(r-g) < 15 and abs(g-b) < 15):
            # Calculate an alpha based on how far it is from black to smooth the edge
            # max=0 -> alpha=0
            # max=60 -> alpha=0 (Wait, we want to remove the black background completely)
            newData.append((255, 255, 255, 0))
        else:
            newData.append(item)

    img.putdata(newData)
    img.save(out_path, "PNG")

remove_background("C:/Users/DELL/.gemini/antigravity-cli/brain/d9c024a3-1e7d-476b-b890-b99eed34d08a/.user_uploaded/uploaded_media_1788525886576.png", "public/images/samui-logo.png")
