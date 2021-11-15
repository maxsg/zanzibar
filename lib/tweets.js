import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

let base_url;
const env = process.env.NODE_ENV
if (env == "development") {
    base_url = 'http://127.0.0.1:5000/'
}
else if (env == "production") {
    base_url = 'https://cruzcontrol-staging.herokuapp.com/'
}

base_url = 'https://cruzcontrol-staging.herokuapp.com/'
 
export async function getTweetData() {

    // Instead of the file system,
    // fetch post data from an external API endpoint
    const res = await fetch(base_url)
    console.log(res)
    return res.json()
}
