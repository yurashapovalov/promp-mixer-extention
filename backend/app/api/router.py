from fastapi import APIRouter
from app.api.endpoints import auth, users, prompt_improvement, user_library, stripe

api_router = APIRouter()
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(users.router, prefix="/users", tags=["users"])
api_router.include_router(prompt_improvement.router, prefix="/prompts", tags=["prompts"])
api_router.include_router(user_library.router, prefix="/library", tags=["library"])
api_router.include_router(stripe.router, prefix="/stripe", tags=["stripe"])
