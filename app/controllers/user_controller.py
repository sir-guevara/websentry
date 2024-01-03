# from bson import ObjectId
from fastapi import APIRouter, Depends, HTTPException

# from passlib.context import CryptContext

# from app.database.connection import database
# from app.models.user_model import UserCreate, UserInDB

router = APIRouter()

# # Password hashing context
# pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# @router.post("/register", response_model=User)
# async def register_user(user: UserCreate, db=Depends(database)):
#     # Check if the username or email already exists
#     existing_user = await db.users.find_one({"$or": [{"username": user.username}, {"email": user.email}]})
#     if existing_user:
#         raise HTTPException(status_code=400, detail="Username or email already registered")

#     # Hash the password before saving to the database
#     hashed_password = pwd_context.hash(user.password)
#     user_dict = user.dict()
#     user_dict.update({"hashed_password": hashed_password})

#     # Insert the user into the database
#     result = await db.users.insert_one(user_dict)
#     user.id = str(result.inserted_id)

#     return user

# @router.post("/login", response_model=User)
# async def login_user(username: str, password: str, db=Depends(database)):
#     # Retrieve the user from the database
#     user = await db.users.find_one({"username": username})
#     if not user or not pwd_context.verify(password, user["hashed_password"]):
#         raise HTTPException(status_code=401, detail="Invalid credentials")

#     # Convert BSON ObjectId to str for JSON response
#     user["id"] = str(user["_id"])
#     return user
