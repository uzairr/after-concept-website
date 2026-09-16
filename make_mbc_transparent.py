from PIL import Image

def remove_black_background(input_path, output_path, threshold=5):
    img = Image.open(input_path).convert("RGBA")
    data = img.getdata()
    
    new_data = []
    for item in data:
        if item[0] <= threshold and item[1] <= threshold and item[2] <= threshold:
            # Scale alpha based on how close to 0 it is to avoid harsh edges,
            # or just make it 0. For such low threshold, just make it 0.
            new_data.append((0, 0, 0, 0))
        else:
            new_data.append(item)
            
    img.putdata(new_data)
    img.save(output_path, "PNG")

remove_black_background("public/images/mbc-logo-orig.png", "public/images/mbc-logo.png")
