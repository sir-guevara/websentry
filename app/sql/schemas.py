from pydantic import BaseModel


class SiteBase(BaseModel):
    link: str
    name: str | None = None


class SiteCreate(SiteBase):
    pass


class Site(SiteBase):
    id: int
    owner_id: int

    class Config:
        from_attributes = True


class UserBase(BaseModel):
    email: str


class UserCreate(UserBase):
    password: str


class User(UserBase):
    id: int
    is_active: bool
    sites: list[Site] = []

    class Config:
        from_attributes = True