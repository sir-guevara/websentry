from passlib.context import CryptContext
from sqlalchemy.orm import Session

from app.sql import models, schemas


def get_user(db: Session, user_id: int):
    return db.query(models.User).filter(models.User.id == user_id).first()


def get_user_by_email(db: Session, email: str):
    return db.query(models.User).filter(models.User.email == email).first()


def get_users(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.User).offset(skip).limit(limit).all()


pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
def verify_password(plain_password, hashed_password):
        return pwd_context.verify(plain_password, hashed_password)
def get_password_hash(password):
        return pwd_context.hash(password)

def create_user(db: Session, user: schemas.UserCreate):
    hashed_password = get_password_hash(user.password)
    db_user = models.User(email=user.email, hashed_password=hashed_password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user


def sites(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Site).offset(skip).limit(limit).all()


def create_user_site(db: Session, site: schemas.SiteCreate, user_id: int):
    db_site = models.Site(**site.dict(), owner_id=user_id)
    db.add(db_site)
    db.commit()
    db.refresh(db_site)
    return db_site