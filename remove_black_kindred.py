from PIL import Image

def remove_background(in_path, out_path):
    img = Image.open(in_path).convert("RGBA")
    datas = list(img.getdata())

    newData = []
    for item in datas:
        r, g, b, a = item
        # If it's a dark gray/black pixel
        if max(r, g, b) < 60 and (abs(r-g) < 15 and abs(g-b) < 15):
            newData.append((255, 255, 255, 0))
        else:
            newData.append(item)

    img.putdata(newData)
    img.save(out_path, "PNG")

remove_background("C:/Users/DELL/.gemini/antigravity-cli/brain/d9c024a3-1e7d-476b-b890-b99eed34d08a/.user_uploaded/uploaded_media_1788530030795.png", "public/images/kindred-logo.png")
