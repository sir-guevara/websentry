from fastapi import FastAPI

from app.controllers import index_cotroller, user_controller

app = FastAPI()


app.include_router(index_cotroller.router, prefix="", tags=["home"])
app.include_router(user_controller.router, prefix="/users", tags=["users"])
