const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs-extra');
const path = require('path');

const BASE_URL = 'https://en.wikipedia.org/wiki'; // Base URL for Wikipedia
const PAGES = ['Node.js', 'JavaScript', 'Web_scraping']; // List of pages to scrape
const OUTPUT_DIR = path.join(__dirname, 'data');

// Function to scrape data from a Wikipedia page
const scrapeData = async (page) => {
    try {
        const { data } = await axios.get(`${BASE_URL}/${page}`);
        const $ = cheerio.load(data);
        const title = $('h1').text();
        const content = $('#mw-content-text').text().trim();
        
        return { title, content };
    } catch (error) {
        console.error(`Error scraping page ${page}:`, error);
        return { title: page, content: '' };
    }
};

// Function to save data to a JSON file
const saveDataToFile = async (data, fileName) => {
    const filePath = path.join(OUTPUT_DIR, fileName);
    await fs.ensureDir(OUTPUT_DIR);
    await fs.outputFile(filePath, JSON.stringify(data, null, 2));
    console.log(`Data saved to ${filePath}`);
};

// Main function to run the scraper
const runScraper = async () => {
    for (const page of PAGES) {
        console.log(`Scraping page ${page}...`);
        const data = await scrapeData(page);
        await saveDataToFile(data, `${page.replace(/ /g, '_')}.json`);
    }
};

runScraper();
