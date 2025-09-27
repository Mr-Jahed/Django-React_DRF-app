# 🐍 Use lightweight Python base image
FROM python:3.11-slim

# 🧭 Set working directory
WORKDIR /app

# 🧩 Install dependencies required for Django + psycopg2/Pillow
RUN apt-get update && apt-get install -y \
    build-essential \
    libffi-dev \
    && rm -rf /var/lib/apt/lists/*

# 📄 Copy and install Python dependencies
COPY requirements.txt .
RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt

# 📂 Copy backend project files
COPY . .

# 🌐 Expose Django port
EXPOSE 8000

# 🚀 Start Django server
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
