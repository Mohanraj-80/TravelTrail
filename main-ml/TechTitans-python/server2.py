from fastapi import FastAPI
from fastapi.responses import JSONResponse
import cv2
import base64

app = FastAPI()

@app.post("/getImg")
async def getimg():
    # Read the image
    img = cv2.imread("img1.png")
    
    # Encode the image as PNG
    _, img_encoded = cv2.imencode('.png', img)
    
    # Convert to base64
    img_base64 = base64.b64encode(img_encoded).decode('utf-8')
    
    # Create a JSON-compatible dictionary
    r = {"img": img_base64}
    
    # Return as a JSON response
    return JSONResponse(content=r)
