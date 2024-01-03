from urllib.parse import quote_plus

from motor.motor_asyncio import AsyncIOMotorClient

from app.config import DB_HOST, DB_NAME, DB_PASSWORD, DB_USERNAME

DATABASE_URI = f"mongodb://{quote_plus(DB_USERNAME)}:{quote_plus(DB_PASSWORD)}@{DB_HOST}/{DB_NAME}"

client = AsyncIOMotorClient(DATABASE_URI)
database = client.get_database()

# Send a ping to confirm a successful connection
try:
    client.admin.command('ping')
    print("\nMongoDB connected!\n")
except Exception as e:
    print(e)