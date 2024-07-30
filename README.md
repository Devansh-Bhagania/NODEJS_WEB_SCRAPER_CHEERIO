# Wikipedia Scraper

This project is a simple Node.js scraper designed to extract and save content from Wikipedia pages. It uses `axios` for making HTTP requests, `cheerio` for parsing HTML, and `fs-extra` for file operations.

## Table of Contents

- [Overview](#overview)
- [How It Works](#how-it-works)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Files and Directories](#files-and-directories)
- [Important Notes](#important-notes)
- [License](#license)

## Overview

This scraper fetches content from Wikipedia pages and saves the data in JSON format. It demonstrates how to perform web scraping, handle asynchronous operations, and manage file I/O in Node.js.

## How It Works

1. **Fetch Data**: The scraper uses `axios` to send HTTP GET requests to Wikipedia pages.
2. **Parse HTML**: The HTML content of the pages is parsed using `cheerio`, which allows easy extraction of relevant information.
3. **Extract Information**: The title of the page and its main content are extracted from the HTML.
4. **Save Data**: The extracted data is saved as JSON files in a specified directory using `fs-extra`.

## Setup and Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/wikipedia-scraper.git
   cd wikipedia-scraper
   ```
2. **Installing dependencies**
   ```bash
   npm install
   ```
3. **Update Scraper Configuration**
   ```bash
   const PAGES = ['Node.js', 'JavaScript', 'Web_scraping'];
   ```
4. **Run the Scraper**
   ```bash
   node scraper.js
   ```
After running the scraper, check the data directory for JSON files. Each file will contain the title and content of a specific Wikipedia page.
   
   
