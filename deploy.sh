#!/bin/bash

# Samurai Tech Park - Production Deployment Script
# This script prepares and deploys the website for production

echo "🚀 Samurai Tech Park - Production Deployment"
echo "=============================================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ Node.js and npm are installed"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Run type checking
echo "🔍 Running type checks..."
npm run type-check

# Run linting
echo "🧹 Running linting..."
npm run lint

# Build for production
echo "🏗️ Building for production..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Production build successful!"
    echo ""
    echo "🎉 Your website is ready for deployment!"
    echo ""
    echo "📁 Build files are in the '.next' directory"
    echo "🚀 You can now deploy using:"
    echo "   - Vercel: vercel --prod"
    echo "   - Netlify: Upload the '.next' folder"
    echo "   - Custom server: npm start"
    echo ""
    echo "📞 Contact Information:"
    echo "   - Phone: +91 91779 03061"
    echo "   - WhatsApp: https://wa.me/9177903061"
    echo "   - Email: sriram.polakam@gmail.com"
    echo ""
    echo "🇮🇳 Serving India Online - Founded by Sri Ram"
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi
