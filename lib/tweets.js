import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

export async function getTweetData() {

    // Instead of the file system,
    // fetch post data from an external API endpoint
    const res = await fetch('https://cruzcontrol-staging.herokuapp.com')
    console.log(res)
    return res.json()
}
