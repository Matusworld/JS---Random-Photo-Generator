# Random Photo Generator

## Overview

This project is a web application that allows users to generate random images from specified categories using the Random Image API. Users can select from a variety of categories like nature, city, technology, and more to get images that fit their choice.

## Purpose

This project serves as a simple platform for me to learn JavaScript and related technologies. It is not intended for production use but as a sandbox where I can experiment with API integration, asynchronous JavaScript, and server/client interaction in a controlled environment.

## Features

- Image generation with category selection
- Responsive web interface
- Instant image previews

## Technologies Used

- HTML
- CSS
- JavaScript
- Node.js
- Express.js
- Axios
- Vite

## Setup and Installation

### Prerequisites

- Node.js and npm must be installed on your machine.

### Installation Steps

1. Clone the repository

2. Navigate to the project directory

3. Install dependencies:
   npm install

4. Start the backend server:
   node server.js

5. In a separate terminal, start the Vite development server for the frontend:
   npm run dev

### Environment Variables

Create a `.env` file in the root directory of the project and add the following:
NINJASAPI=<Your_API_Ninjas_Key>

Replace `<Your_API_Ninjas_Key>` with your actual API key from API Ninjas.

## Usage

After starting both servers, open a web browser and navigate to the URL provided by Vite - typically:
http://localhost:5173

Select a category from the dropdown and click the "Generate" button to display a random image based on the selected category.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
