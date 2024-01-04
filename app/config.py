import os

from dotenv import load_dotenv
from fastapi.templating import Jinja2Templates

from app.sql import models
from app.sql.database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)
load_dotenv()

PORT = os.getenv("PORT")
DB_HOST = os.getenv("DB_HOST")
DB_PORT = os.getenv("DB_PORT")
DB_NAME = os.getenv("DB_NAME")
DB_USERNAME = os.getenv("DB_USERNAME")
DB_PASSWORD = os.getenv("DB_PASSWORD")

DEBUG = os.getenv("DEBUG")
templates = Jinja2Templates(directory="app/views")


# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()