const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/", async (req, res) => {
  const { query } = req;
  const results = [];

  try {
    // YouTube API
    const youtubeResponse = await axios.get(
      `https://www.googleapis.com/youtube/v3/search`,
      {
        params: {
          part: "snippet",
          q: query,
          key: "AIzaSyD1PeFRjwf9lm1G6YAa9SZ97U6UjMHSLBo",
        },
      }
    );
    results.push(
      ...youtubeResponse.data.items.map((item) => ({
        type: "video",
        title: item.snippet.title,
        link: `https://www.youtube.com/watch?v=${item.id.videoId}`,
        views: Math.floor(Math.random() * 1000), // Mocking views
        likes: Math.floor(Math.random() * 500), // Mocking likes
      }))
    );

    // DuckDuckGo API for articles
    const duckResponse = await axios.get(`https://api.duckduckgo.com/`, {
      params: {
        q: query,
        format: "json",
      },
    });
    results.push(
      ...duckResponse.data.RelatedTopics.map((topic) => ({
        type: "article",
        title: topic.Text,
        link: topic.FirstURL,
        views: Math.floor(Math.random() * 1000), // Mocking views
        likes: Math.floor(Math.random() * 500), // Mocking likes
      }))
    );

    // OpenLibrary API for books
    const openLibraryResponse = await axios.get(
      `https://openlibrary.org/search.json`,
      {
        params: {
          q: query,
        },
      }
    );
    results.push(
      ...openLibraryResponse.data.docs.map((doc) => ({
        type: "book",
        title: doc.title,
        link: `https://openlibrary.org${doc.key}`,
        views: Math.floor(Math.random() * 1000), // Mocking views
        likes: Math.floor(Math.random() * 500), // Mocking likes
      }))
    );

    // Reddit API for posts
    const redditResponse = await axios.get(
      `https://www.reddit.com/search.json`,
      {
        params: {
          q: query,
        },
      }
    );
    results.push(
      ...redditResponse.data.data.children.map((child) => ({
        type: "post",
        title: child.data.title,
        link: `https://www.reddit.com${child.data.permalink}`,
        views: Math.floor(Math.random() * 1000), // Mocking views
        likes: Math.floor(Math.random() * 500), // Mocking likes
      }))
    );

    // SerpAPI for academic papers
    const serpResponse = await axios.get(`https://serpapi.com/search.json`, {
      params: {
        q: query,
        api_key:
          "f3b0d5ae19bef4210d66816c32d223f74ef797f3ecf3d5a1e5930ca16157fe2c",
        engine: "google_scholar",
      },
    });
    results.push(
      ...serpResponse.data.organic_results.map((result) => ({
        type: "academic",
        title: result.title,
        link: result.link,
        views: Math.floor(Math.random() * 1000), // Mocking views
        likes: Math.floor(Math.random() * 500), // Mocking likes
      }))
    );

    // Ranking by views and likes
    results.sort((a, b) => b.views + b.likes - (a.views + a.likes));

    res.json(results);
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(500).json({ message: "Error fetching data" });
  }
});

module.exports = router;
