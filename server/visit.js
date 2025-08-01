const express = require('express');
const fetch = require('node-fetch');
require('dotenv').config();

const router = express.Router();

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const REPO_OWNER = 'qiiizhen';
const REPO_NAME = 'visitor-counter';
const FILE_PATH = 'visits.json';

router.get('/', async (req, res) => {
  const apiUrl = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}`;

  try {
    const response = await fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        Accept: 'application/vnd.github.v3+json',
      },
    });

    const file = await response.json();
    const content = Buffer.from(file.content, 'base64').toString();
    const json = JSON.parse(content);
    json.count += 1;

    const update = await fetch(apiUrl, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        Accept: 'application/vnd.github.v3+json',
      },
      body: JSON.stringify({
        message: 'Update visit count',
        content: Buffer.from(JSON.stringify(json, null, 2)).toString('base64'),
        sha: file.sha,
      }),
    });

    res.json({ visits: json.count });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to update visit count' });
  }
});

module.exports = router;
// console.log("Using GitHub token:", GITHUB_TOKEN.slice(0, 5) + "...");
// console.log("GitHub API URL:", apiUrl);
// console.log("Old count:", json.count);
// console.log("New count:", json.count + 1);
