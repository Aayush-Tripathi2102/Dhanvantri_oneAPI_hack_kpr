# Dhanvantri

## Overview
This website is designed for medical purposes, providing users with essential health-related information and tools. The website helps users find nearby hospitals and medical specialists, store and manage their medical history, and streamline the prescription process by automatically adding medicines to the cart after scanning prescriptions.

## Features
- *Nearby Hospitals and Specialties*: Find hospitals and medical specialists near your location.
- *Medical History Storage*: Upload and securely store your previous medical records for future reference.
- *Prescription Scanning*: Upload a prescription, and the website will automatically recognize the medicines and add them to your shopping cart.
- *User Account*: Create an account to manage your medical history, view saved records, and track prescription orders.

## Key Functionalities
1. *Hospital and Speciality Finder*: 
   - Displays a list of hospitals and specialists near your location.
   - Provides detailed information on specialties available at each hospital.

2. *Medical History Management*:
   - Securely upload and store your past medical records, prescriptions, and reports.
   - Access your stored records anytime for future consultations.

3. *Prescription Scanning*:
   - Use image recognition to scan uploaded prescriptions.
   - Automatically extract medicine information and add the items to your cart for easy purchasing.

4. *User-Friendly Dashboard*:
   - View saved hospitals, specialists, and medical history.
   - Track orders and view prescription statuses.

## Technology Stack
- *Frontend*: HTML, CSS, JavaScript
- *Backend*: Node.js, Express
- *Database*: MongoDB (for storing user data, medical history, and prescription details)
- *Image Processing*: Tesseract.js or other OCR (Optical Character Recognition) library for scanning prescriptions
- *Authentication*: JWT-based authentication for secure login and user session management

## Setup and Installation
To run the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Aayush-Tripathi2102/Dhanvantri_oneAPI_hack_kpr.git
2. Go to the frontend directory:
   ```bash
   npm install
3. Run the Frontend:
   ```bash
   npm run dev
4. Go to Backend folder:
   ```bash
   cd ..
   cd ./Backend
5. Run the Backend:
   ```bash
   python main.py
