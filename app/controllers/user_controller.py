from fastapi import APIRouter, Depends, HTTPException
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
from sqlalchemy.orm import Session
from starlette.requests import Request

from app.config import get_db, templates
from app.sql import crud, schemas

router = APIRouter()

@router.post("/auth", response_model=schemas.User)
def create_user(request:Request, user: schemas.UserCreate, db: Session = Depends(get_db)):
    db_user = crud.get_user_by_email(db, email=user.email)
    if db_user:
        isPassword = crud.verify_password(user.password,db_user.hashed_password)
        if not isPassword:
           raise HTTPException(status_code=400, detail="Incorrect password for the email")
        return JSONResponse(status_code=200, content=jsonable_encoder(db_user))

    new_user = crud.create_user(db=db, user=user)
    return JSONResponse(status_code=201, content=jsonable_encoder(new_user))

@router.post("/check-email")
def check_email(email:str,db: Session = Depends(get_db)):
    db_user = crud.get_user_by_email(db, email=email)
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")

@router.get("/users/", response_model=list[schemas.User])
def read_users(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    users = crud.get_users(db, skip=skip, limit=limit)
    return users

@router.get("/users/{user_id}", response_model=schemas.User)
def read_user(user_id: int, db: Session = Depends(get_db)):
    db_user = crud.get_user(db, user_id=user_id)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return db_user
