from fastapi import FastAPI

from app.config import PORT

# from app.main import app

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app="app.main:app", host="127.0.0.1", port=int(PORT), reload=True)