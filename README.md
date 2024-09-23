# **Search Aggregation App**

A dynamic and interactive search aggregation app that fetches YouTube videos, articles, academic papers, and blog posts from various APIs based on a user’s search query. The results are presented as animated flip cards, with filtering and ranking options based on views, likes, and content type.

## **Technologies Used**

- **Frontend:** React, CSS3 (for animations and styling), Axios (for API requests)
- **Backend:** Node.js, Express.js
- **APIs Integrated:**
  - YouTube Data API
  - DuckDuckGo API
  - OpenLibrary API
  - Reddit API

## **Getting Started**

### **Prerequisites**

Ensure that you have the following software installed on your local machine:

- **Node.js** (v14.x or higher) and npm (Node Package Manager)
- **Git** (to clone the repository)

### **1. Clone the Repository**

First, clone the repository to your local machine using Git:

```bash
[git clone https://github.com/sophia17032002/Revoltronx]
cd Revoltronx
```

### **2. Install Dependencies**

To install all required dependencies, navigate to both the `client` and `server` folders and run:

```bash
# For backend
cd server
npm install

# For frontend
cd ../client
npm install
```

### **3. Set Up API Keys**

You will need API keys for the following services:

- **YouTube Data API**
- **DuckDuckGo API** (optional but recommended)
- **OpenLibrary API**
- **Reddit API**

#### **Create a `.env` file in the `server/` directory and add your API keys like so or add it in server/search.js:**

```bash
YOUTUBE_API_KEY=your-youtube-api-key
DUCKDUCKGO_API_KEY=your-duckduckgo-api-key
REDDIT_API_KEY=your-reddit-api-key
OPENLIBRARY_API_KEY=your-openlibrary-api-key
```

> Note: If some APIs don't require a key, you can leave those entries out or set them to a placeholder value.

### **4. Running the Application**

To start both the client (frontend) and server (backend) simultaneously, follow these steps:

#### **Step 1: Start the Backend Server**

In the `server/` directory, start the backend:

```bash
npm start
```

#### **Step 2: Start the Frontend**

In the `client/` directory, start the frontend:

```bash
npm start
```

The app should now be running at:

- **Frontend:** `http://localhost:3000/`
- **Backend:** `http://localhost:5000/`

### **5. Search and Filter**

1. **Search:** Enter a search query in the search bar.
2. **Filter:** Use the filter dropdown to refine results by content type:
   - YouTube
   - Articles
   - Academic Papers
   - Blogs

### **6. Customization**

- To modify the design, update the CSS files in the `client/src/` folder.
- To extend or adjust the ranking logic, edit the backend API logic in `server/`.

---

## **Folder Structure**

```bash
search-aggregation-app/
│
├── client/              # Frontend code
│   ├── public/          # Public assets (index.html, etc.)
│   ├── src/             # React components and styling
│   │   ├── components/  # SearchBar, SearchResults components
│   │   └── App.js       # Main entry point for the React app
│   └── package.json     # Frontend dependencies and scripts
│
├── server/              # Backend code
│   ├── search.js          # API routes for fetching data
│   └── index.js           # Main server configuration
│   └── package.json     # Backend dependencies and scripts
│
├── .env                 # Environment variables (API keys)
├── README.md            # Project documentation
└── .gitignore           # Files to ignore in version control
```

---

## **Challenges Faced**

1. **API Integration:** Handling inconsistent data formats from different APIs and integrating them into a unified search result was challenging. Adjustments were made to ensure smooth parsing and display of the data.
2. **Ranking System:** Developing a fair and effective ranking system for non-video content was complex, so relevance became the primary metric.
3. **UI Responsiveness:** Ensuring the flip cards worked across different devices while keeping the animations smooth required several iterations.
4. **Performance Optimization:** Fetching data from multiple APIs can be slow, so we optimized API calls and added a loading spinner to improve the user experience.

---

## **Future Enhancements**

- Add pagination for more search results.
- Improve ranking by incorporating user preferences and further metrics (e.g., comment count for YouTube, shares for articles).
- Add user authentication to save favorite search results or filter preferences.

---

## **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
