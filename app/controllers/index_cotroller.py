from fastapi import APIRouter, Depends
from starlette.requests import Request

from app.config import templates

router = APIRouter()

@router.get("/")
async def index(request: Request):
    return  templates.TemplateResponse("index.html", {"request": request})

@router.get("/login")
def login(request: Request):
        return  templates.TemplateResponse("login.html", {"request": request})

@router.get("/dashboard")
def dashboard(request: Request):
        return  templates.TemplateResponse("dashboard.html", {"request": request})