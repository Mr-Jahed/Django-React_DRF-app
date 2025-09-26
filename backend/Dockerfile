# 🐍 Use lightweight Python image
FROM python:3.11-slim

# 📁 Set working directory
WORKDIR /app

# 📦 Install build tools for Pillow (optional)
RUN apt-get update && apt-get install -y \
    build-essential \
    libffi-dev \
    && rm -rf /var/lib/apt/lists/*

# 📄 Copy and install Python dependencies
COPY ./backend/requirements.txt .
RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt

# 📂 Copy backend code
COPY . .

# 🌍 Expose port
EXPOSE 8000

# 🚀 Run server
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
