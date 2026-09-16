from PIL import Image

def remove_background(in_path, out_path, threshold=20):
    img = Image.open(in_path).convert("RGBA")
    datas = img.getdata()

    newData = []
    for item in datas:
        # Check if the pixel is dark (black background)
        r, g, b, a = item
        if r < threshold and g < threshold and b < threshold:
            # Make it fully transparent
            newData.append((255, 255, 255, 0))
        else:
            newData.append(item)

    img.putdata(newData)
    img.save(out_path, "PNG")

remove_background("public/images/samui-logo.png", "public/images/samui-logo.png")
