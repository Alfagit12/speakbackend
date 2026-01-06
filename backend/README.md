# 🎤 SpeakMate Backend Server

AI asosida ingliz tilida speaking practice qilish uchun backend API.

## 📋 Talablar

- Node.js 18+ versiyasi
- npm yoki yarn package manager
- Anthropic API key (Claude AI uchun)

## 🚀 O'rnatish

### 1. Loyihani yuklab oling

```bash
# Loyihani clone qiling yoki fayllarni yuklab oling
cd speakmate-backend
```

### 2. Dependencies o'rnating

```bash
npm install
```

### 3. Environment variables sozlang

`.env` faylini yarating va quyidagilarni kiriting:

```env
PORT=3000
NODE_ENV=development
ANTHROPIC_API_KEY=sk-ant-api03-your-api-key-here
```

**Anthropic API Key olish:**
1. https://console.anthropic.com/ ga kiring
2. Sign up yoki Login qiling
3. Settings → API Keys → Create Key
4. API key ni `.env` fayliga qo'ying

### 4. Serverni ishga tushiring

**Development rejimida:**
```bash
npm run dev
```

**Production rejimida:**
```bash
npm start
```

Server ishga tushgandan keyin: `http://localhost:3000`

## 📡 API Endpoints

### Authentication

#### 1. Sign Up
```http
POST /api/auth/signup
Content-Type: application/json

{
  "name": "Aziz",
  "email": "aziz@example.com",
  "phone": "+998901234567",
  "password": "mypassword123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Muvaffaqiyatli ro'yxatdan o'tdingiz!",
  "user": {
    "id": 1,
    "name": "Aziz",
    "email": "aziz@example.com",
    "stats": {
      "totalPoints": 0,
      "practicesCompleted": 0,
      "level": 1
    }
  }
}
```

#### 2. Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "aziz@example.com",
  "password": "mypassword123"
}
```

### Practice

#### 3. Get Random Question
```http
GET /api/practice/question/hobbies
```

**Topics:** `hobbies`, `routine`, `travel`, `food`, `family`, `work`

**Response:**
```json
{
  "success": true,
  "question": "What are your hobbies and why do you enjoy them?",
  "topic": "hobbies"
}
```

#### 4. Analyze Speech
```http
POST /api/practice/analyze
Content-Type: application/json

{
  "userId": 1,
  "question": "What are your hobbies?",
  "transcript": "I like reading books and playing football. I enjoy them because...",
  "topic": "hobbies"
}
```

**Response:**
```json
{
  "success": true,
  "feedback": {
    "pronunciation_score": 85,
    "grammar_score": 90,
    "fluency_score": 87,
    "vocabulary_score": 88,
    "overall_score": 87,
    "positive_points": ["Yaxshi talaffuz", "To'g'ri grammatika"],
    "mistakes": ["Ba'zi so'zlarda pauza ko'p"],
    "suggestions": ["Yanada ravon gapiring"],
    "uzbek_explanation": "Ajoyib! Davom eting!"
  }
}
```

#### 5. Get Practice History
```http
GET /api/practice/history/1
```

#### 6. Leaderboard
```http
GET /api/leaderboard
```

#### 7. User Stats
```http
GET /api/user/1/stats
```

#### 8. Health Check
```http
GET /api/health
```

## 🏗️ Loyiha strukturasi

```
speakmate-backend/
├── server.js           # Main server fayl
├── package.json        # Dependencies
├── .env               # Environment variables (gitignore)
├── .gitignore         # Git ignore fayl
├── README.md          # Bu fayl
└── public/            # Frontend fayllar (HTML, CSS, JS)
```

## 🔒 Xavfsizlik

**Hozirgi versiya development uchun!** Production uchun quyidagilarni qo'shing:

1. **Password Hashing** - bcrypt ishlatish
2. **JWT Authentication** - token-based auth
3. **Rate Limiting** - spam prevention
4. **Database** - MongoDB yoki PostgreSQL
5. **HTTPS** - SSL sertifikat
6. **Validation** - Input validation middleware
7. **CORS** - Faqat kerakli domenlarni ruxsat berish

## 🗄️ Database (keyingi qadam)

Hozir ma'lumotlar **memory**da saqlanadi (server o'chsa yo'qoladi).

Production uchun **MongoDB** yoki **PostgreSQL** qo'shing:

### MongoDB misol:
```bash
npm install mongoose

# .env ga qo'shing:
DATABASE_URL=mongodb://localhost:27017/speakmate
```

### PostgreSQL misol:
```bash
npm install pg sequelize

# .env ga qo'shing:
DATABASE_URL=postgresql://user:password@localhost:5432/speakmate
```

## 📱 Frontend bilan bog'lash

Frontend kodingizda API endpoint o'zgartiring:

```javascript
// Frontend JS faylingizda
const API_URL = 'http://localhost:3000';

// Login example
async function handleLogin(email, password) {
    const response = await fetch(`${API_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
    });
    
    const data = await response.json();
    return data;
}
```

## 🚀 Deploy qilish

### Vercel (tavsiya etiladi):
```bash
npm install -g vercel
vercel
```

### Heroku:
```bash
heroku create speakmate-api
git push heroku main
```

### Railway:
```bash
# railway.app da yangi project yarating
# GitHub bilan bog'lang
```

### DigitalOcean / AWS:
```bash
# VPS server oling
# Node.js o'rnating
# PM2 bilan ishga tushiring
pm2 start server.js --name speakmate-api
```

## 📞 Support

Savollar bo'lsa:
- Email: sarvinoz09@gmail.com
- Phone: +998 99 272 09 84

## 📄 License

MIT License - erkin foydalanish mumkin!

---

**Made with ❤️ by Sarvinoz Fathiddinova**