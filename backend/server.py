from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
import os
import uvicorn
from datetime import datetime
import uuid

# Instance identification
INSTANCE_ID = os.environ.get('INSTANCE_ID', 'Backend Dev Instance')

app = FastAPI(title="FinServeSolutions API", version="1.0.0")

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace with specific origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic models
class Project(BaseModel):
    id: str = None
    title: str
    description: str
    tech: List[str]
    image: str
    created_at: Optional[datetime] = None

class BlogPost(BaseModel):
    id: str = None
    title: str
    excerpt: str
    content: Optional[str] = None
    date: Optional[str] = None
    read_time: Optional[str] = None
    created_at: Optional[datetime] = None

class ContactMessage(BaseModel):
    name: str
    email: str
    subject: str
    message: str
    created_at: Optional[datetime] = None

# In-memory storage (replace with MongoDB in production)
projects_db = [
    {
        "id": "1",
        "title": "Cybersecurity Platform",
        "description": "Advanced threat detection system with AI-powered analysis",
        "tech": ["React", "Python", "TensorFlow", "AWS"],
        "image": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5fGVufDB8fHxibGFja3wxNzUyNDA4ODE4fDA&ixlib=rb-4.1.0&q=85",
        "created_at": datetime.now()
    },
    {
        "id": "2",
        "title": "Cloud Infrastructure",
        "description": "Scalable microservices architecture with auto-scaling capabilities",
        "tech": ["Docker", "Kubernetes", "Node.js", "MongoDB"],
        "image": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwzfHx0ZWNobm9sb2d5fGVufDB8fHxibGFja3wxNzUyNDA4ODEwfDA&ixlib=rb-4.1.0&q=85",
        "created_at": datetime.now()
    },
    {
        "id": "3",
        "title": "AI-Powered Analytics",
        "description": "Real-time data processing and predictive analytics dashboard",
        "tech": ["Python", "FastAPI", "TensorFlow", "React"],
        "image": "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwyfHxjeWJlcnNlY3VyaXR5fGVufDB8fHxibGFja3wxNzUyNDA4ODE4fDA&ixlib=rb-4.1.0&q=85",
        "created_at": datetime.now()
    }
]

blog_posts_db = [
    {
        "id": "1",
        "title": "The Future of Cybersecurity in 2025",
        "excerpt": "Exploring emerging threats and cutting-edge protection strategies",
        "content": "Cybersecurity continues to evolve rapidly as new threats emerge...",
        "date": "2025-03-15",
        "read_time": "5 min read",
        "created_at": datetime.now()
    },
    {
        "id": "2",
        "title": "Microservices Architecture Best Practices",
        "excerpt": "Building scalable and maintainable distributed systems",
        "content": "Microservices architecture has become the standard for modern applications...",
        "date": "2025-03-12",
        "read_time": "8 min read",
        "created_at": datetime.now()
    },
    {
        "id": "3",
        "title": "AI Integration in Modern Web Applications",
        "excerpt": "Practical approaches to embedding machine learning in your apps",
        "content": "Artificial Intelligence is transforming how we build web applications...",
        "date": "2025-03-10",
        "read_time": "6 min read",
        "created_at": datetime.now()
    }
]

contact_messages_db = []

# Health check endpoint
@app.get("/api/health")
async def health_check():
    return {
        "status": "healthy", 
        "service": "FinServeSolutions API",
        "instance_id": INSTANCE_ID,
        "timestamp": datetime.now().isoformat()
    }

# Projects endpoints
@app.get("/api/projects", response_model=List[dict])
async def get_projects():
    """Get all projects"""
    return projects_db

@app.get("/api/projects/{project_id}")
async def get_project(project_id: str):
    """Get a specific project by ID"""
    project = next((p for p in projects_db if p["id"] == project_id), None)
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    return project

@app.post("/api/projects", response_model=dict)
async def create_project(project: Project):
    """Create a new project"""
    project_dict = project.dict()
    project_dict["id"] = str(uuid.uuid4())
    project_dict["created_at"] = datetime.now()
    projects_db.append(project_dict)
    return project_dict

# Blog endpoints
@app.get("/api/blog", response_model=List[dict])
async def get_blog_posts():
    """Get all blog posts"""
    return blog_posts_db

@app.get("/api/blog/{post_id}")
async def get_blog_post(post_id: str):
    """Get a specific blog post by ID"""
    post = next((p for p in blog_posts_db if p["id"] == post_id), None)
    if not post:
        raise HTTPException(status_code=404, detail="Blog post not found")
    return post

@app.post("/api/blog", response_model=dict)
async def create_blog_post(post: BlogPost):
    """Create a new blog post"""
    post_dict = post.dict()
    post_dict["id"] = str(uuid.uuid4())
    post_dict["created_at"] = datetime.now()
    if not post_dict["date"]:
        post_dict["date"] = datetime.now().strftime("%Y-%m-%d")
    blog_posts_db.append(post_dict)
    return post_dict

# Contact endpoints
@app.post("/api/contact")
async def submit_contact(contact: ContactMessage):
    """Submit a contact message"""
    contact_dict = contact.dict()
    contact_dict["created_at"] = datetime.now()
    contact_messages_db.append(contact_dict)
    
    # In a real application, you would send an email here
    return {
        "message": "Contact message submitted successfully",
        "status": "received",
        "contact_id": len(contact_messages_db)
    }

@app.get("/api/contact", response_model=List[dict])
async def get_contact_messages():
    """Get all contact messages (admin endpoint)"""
    return contact_messages_db

# Services endpoint
@app.get("/api/services")
async def get_services():
    """Get all services offered"""
    services = [
        {
            "id": "1",
            "title": "Cybersécurité",
            "icon": "🛡️",
            "description": "Protection avancée contre les menaces numériques avec analyse IA",
            "features": ["Détection d'intrusion", "Audit de sécurité", "Formation équipes"],
            "technologies": ["AI/ML", "SIEM", "Penetration Testing", "Zero Trust"],
            "price_range": "€5000 - €50000"
        },
        {
            "id": "2",
            "title": "Cloud Computing",
            "icon": "☁️",
            "description": "Solutions cloud scalables et sécurisées pour votre entreprise",
            "features": ["Migration cloud", "Architecture microservices", "DevOps"],
            "technologies": ["AWS", "Azure", "Google Cloud", "Kubernetes", "Docker"],
            "price_range": "€3000 - €30000"
        },
        {
            "id": "3",
            "title": "Intelligence Artificielle",
            "icon": "🤖",
            "description": "Intégration d'IA pour automatiser et optimiser vos processus",
            "features": ["Machine Learning", "Analyse prédictive", "Chatbots intelligents"],
            "technologies": ["TensorFlow", "PyTorch", "OpenAI", "Computer Vision"],
            "price_range": "€8000 - €80000"
        },
        {
            "id": "4",
            "title": "Développement Web",
            "icon": "⚡",
            "description": "Applications web modernes, rapides et responsive",
            "features": ["React/Vue.js", "APIs REST", "Applications mobiles"],
            "technologies": ["React", "Vue.js", "Node.js", "Python", "MongoDB"],
            "price_range": "€2000 - €25000"
        }
    ]
    return services

# Statistics endpoint
@app.get("/api/stats")
async def get_stats():
    """Get company statistics"""
    return {
        "projects_completed": len(projects_db),
        "blog_posts": len(blog_posts_db),
        "services_offered": 4,
        "years_experience": 10,
        "clients_served": 150,
        "uptime_percentage": 99.9,
        "response_time_ms": 45,
        "instance_id": INSTANCE_ID
    }

# Error handlers
@app.exception_handler(404)
async def not_found_handler(request: Request, exc: HTTPException):
    return {"error": "Resource not found", "detail": str(exc.detail)}

@app.exception_handler(500)
async def internal_error_handler(request: Request, exc: Exception):
    return {"error": "Internal server error", "detail": "Something went wrong"}

# Root endpoint
@app.get("/api")
async def root():
    return {
        "message": "Welcome to FinServeSolutions API",
        "version": "1.0.0",
        "endpoints": [
            "/api/health",
            "/api/projects",
            "/api/blog",
            "/api/contact",
            "/api/services",
            "/api/stats"
        ]
    }

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8001)