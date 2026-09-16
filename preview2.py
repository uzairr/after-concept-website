from PIL import Image
img = Image.open('C:/Users/DELL/.gemini/antigravity-cli/brain/09bdabc9-55f8-483a-b06e-ff348e31533c/.user_uploaded/uploaded_media_1788865923192.png')
img = img.resize((120, 12))
pixels = img.load()
chars = ' .:-=+*#%@'
s = ''
for y in range(12):
  for x in range(120):
    r,g,b = pixels[x,y]
    brightness = int((r+g+b)/3 / 256 * 10)
    s += chars[brightness]
  s += '\n'
print(s)
