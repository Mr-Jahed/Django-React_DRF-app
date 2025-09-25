# React + Django Fullstack Application

This project is a **fullstack web application** built using a **React frontend** and a **Django backend**.  
The React build is served directly from Django, so both frontend and backend run on the same server (`localhost:8000`).

---

## 🚀 Features
- **React (Vite)** frontend integrated into Django.
- **Single server hosting** – React static files served by Django.
- **API-ready** – Django backend can expose REST APIs.
- **Production build setup** – React `dist` files handled as static assets.

---

## 🛠 Tech Stack
- **Frontend:** React (Vite), JavaScript, CSS  
- **Backend:** Django (Python 3.13)  
- **Server:** Django’s built-in server (development mode)  
- **Package Manager:** npm / pip  

---

## 📂 Project Structure
backend/
├── manage.py
├── backend/ # Django settings & config
│ ├── settings.py
│ ├── urls.py
├── api/ # (optional) Django apps for APIs
├── frontend/ # React build integrated here
│ ├── index.html # React entry point
│ ├── assets/ # JS, CSS, and static files

yaml
Copy code

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone <your-repo-url>
cd React-django/backend
2️⃣ Create a virtual environment (recommended)

python -m venv venv
source venv/bin/activate   # On macOS/Linux
venv\Scripts\activate      # On Windows

3️⃣ Install Python dependencies
pip install -r requirements.txt
4️⃣ Install React dependencies

cd ../frontend-src   # (your React source folder if you kept it)
npm install
5️⃣ Build React for production

npm run build
This generates a dist/ folder. Copy its contents to Django’s frontend/ directory.

6️⃣ Run Django server
bash
Copy code
cd ../backend
python manage.py migrate
python manage.py runserver
Now open http://127.0.0.1:8000 🎉

🔧 Development Workflow
Frontend changes: Run npm run dev inside the React project for live reloading. After development, build again (npm run build) and copy files into frontend/.

Backend changes: Edit Django apps, run migrations, and restart server.

📌 Notes
Ensure index.html is directly inside frontend/, not inside templates/.

All React static assets must be inside frontend/assets/.

In settings.py:

TEMPLATES[0]["DIRS"] = [BASE_DIR / "frontend"]
STATICFILES_DIRS = [BASE_DIR / "frontend" / "assets"]
📦 Requirements
Here’s a sample requirements.txt for this project:


Django>=5.1
djangorestframework
django-cors-headers
Install with:



pip install -r requirements.txt
✨ Future Improvements
Add Django REST Framework (DRF) for APIs.

Connect to a database (PostgreSQL/MySQL).

Deploy on cloud platforms (Heroku, Render, AWS, etc.).

👨‍💻 Author
Your Name
Software Engineer | Python & React Developer
Mr Jahed Inamdar
jahedinamdar786@gmail.com