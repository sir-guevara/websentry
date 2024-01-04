from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

from app.controllers import index_cotroller, user_controller

app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")

app.include_router(index_cotroller.router, prefix="", tags=["home"])
app.include_router(user_controller.router, prefix="/users", tags=["users"])
