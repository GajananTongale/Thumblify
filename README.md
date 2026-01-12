# 🚀 Thumblify - AI-Powered YouTube Thumbnail Generator

Thumblify is a high-performance MERN stack web application designed to help creators generate high-click-through-rate (CTR) thumbnails in seconds. By leveraging the latest Gemini AI models, users can transform simple prompts into professional 1K resolution thumbnails.

## ✨ Features

*   **AI-Powered Generation:** Utilizes the `gemini-3-pro-image-preview` (Nano/Banana Pro level) model for creative and high-quality image generation.
*   **Fast Turnaround:** Generate stunning thumbnails in just 10-20 seconds.
*   **YouTube Preview Mode:** See exactly how your thumbnail looks on a live YouTube video player interface before downloading.
*   **1K Resolution & Aspect Ratios:** Generate high-definition images with support for various aspect ratios (16:9, 1:1, etc.).
*   **Style & Color Customization:** Choose from curated styles (Bold, Tech, Minimalist, etc.) and color schemes (Neon, Sunset, Ocean, etc.) to match your brand.
*   **Secure Storage:** All generated thumbnails are securely processed and stored using **Cloudinary**.
*   **Fully Secured:** Implements secure authentication and session management to keep user data safe.

## 🛠️ Tech Stack

**Frontend:**
*   React 19 (TypeScript)
*   Vite
*   Tailwind CSS (v4)
*   Motion (Framer Motion) & Lucide React
*   React Hot Toast

**Backend:**
*   Node.js & Express.js
*   MongoDB (Mongoose)
*   Google Generative AI (Gemini SDK)
*   Cloudinary (Image Hosting)
*   Express Session (Auth & Security)

## 🚀 Getting Started

### Prerequisites

*   Node.js (v18 or higher)
*   MongoDB Atlas account
*   Cloudinary account
*   Google AI Studio API Key (for Gemini)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/thumblify.git
    cd thumblify
    ```

2.  **Server Setup:**
    ```bash
    cd server
    npm install
    ```
    Create a `.env` file in the `server` directory:
    ```env
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    GEMINI_API_KEY=your_google_gemini_api_key
    CLOUDINARY_CLOUD_NAME=your_name
    CLOUDINARY_API_KEY=your_key
    CLOUDINARY_API_SECRET=your_secret
    SESSION_SECRET=your_random_secret
    ```

3.  **Client Setup:**
    ```bash
    cd ../client
    npm install
    ```
    Create a `.env` file in the `client` directory:
    ```env
    VITE_API_URL=http://localhost:5000
    ```

### Running the Application

1.  **Start the Backend:**
    ```bash
    cd server
    npm run server
    ```

2.  **Start the Frontend:**
    ```bash
    cd client
    npm run dev
    ```

## 📸 How it Works

1.  **Input Title:** Enter your video title.
2.  **Select Style:** Pick a visual theme (e.g., "Bold & Graphic").
3.  **Configure:** Choose your preferred aspect ratio and color scheme.
4.  **Generate:** Wait 10-20 seconds for the AI to craft your masterpiece.
5.  **Preview:** Use the "YouTube Preview" toggle to see the thumbnail in context.
6.  **Download:** Save your 1K resolution image and boost your views!

## 🛡️ Security
Thumblify ensures that all user prompts and generated assets are stored securely. We use `cloudinary.uploader.upload_stream` for direct, secure buffer uploads and `express-session` for protected user sessions.

