const fs = require("fs");
const config = require("./config");
const postMethods = require("./posts.js");
const addHomePage = require("./homepage")



const posts = fs
    .readdirSync(config.dev.postsdir)
    .map(post => post.slice(0, -3))
    .map(post => postMethods.createPost(post))
    .sort((a, b) => {
        return b.attributes.date - a.attributes.date
    });

if (!fs.readdirSync(config.dev.outdir)) fs.mkdirSync(config.dev.outdir);

postMethods.createPosts(posts);
addHomePage(posts);