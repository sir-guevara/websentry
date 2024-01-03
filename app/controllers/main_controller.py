from fastapi import APIRouter, Depends

from app.database.connection import database
from app.models.example_model import Item

router = APIRouter()

@router.post("/items/")
async def create_item(item: Item, db=Depends(database)):
    # Your MongoDB logic here
    result = await db.items.insert_one(item.dict())
    return {"item_id": str(result.inserted_id)}
