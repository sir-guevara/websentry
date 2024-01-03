from bson import ObjectId
from fastapi import APIRouter, Depends, HTTPException
from passlib.context import CryptContext

from app.database.connection import database as db
from app.models.user_model import User, UserCreate

router = APIRouter()

# Password hashing context
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

@router.post("/register")
async def register_user(user: UserCreate):
    # Check if the username or email already exists
    existing_user = await db.users.find_one({"email": user.email})
    if existing_user:
        raise HTTPException(status_code=400, detail="Username or email already registered")

    # Hash the password before saving to the database
    hashed_password = pwd_context.hash(user.password)
    user_dict = dict(user)
    user_dict.update({"hashed_password": hashed_password})

    # Insert the user into the database
    result = await db.users.insert_one(user_dict)
    # user.id = str(result.inserted_id)

    return  result

# @router.post("/login", response_model=User)
# async def login_user(username: str, password: str, db=Depends(database)):
#     # Retrieve the user from the database
#     user = await db.users.find_one({"username": username})
#     if not user or not pwd_context.verify(password, user["hashed_password"]):
#         raise HTTPException(status_code=401, detail="Invalid credentials")

#     # Convert BSON ObjectId to str for JSON response
#     user["id"] = str(user["_id"])
#     return user
