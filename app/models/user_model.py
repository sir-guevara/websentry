from pydantic import BaseModel


class UserCreate(BaseModel):
    name: str
    email: str
    password: str

class User(UserCreate):
    id: str

class UserInDB(User):
    hashed_password: str
