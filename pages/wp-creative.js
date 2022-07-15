import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function wpcreative( {posts} ){

  return(
    <div>
      <div className="note">
        <h2>Headless WordPress with NEXTJS & WPGRAPHQL</h2>
        <ul>
          <li>Step 1: Create a next js project using command:  npx create-next-app </li>
          <li>Step 2: Switch to the project folder</li>
          <li>Step 3: Crete a simple post query using GraphQL plugin</li>
          <li>Step 4: Update fetch URl generated from graphql in line 36 of index.js</li>
          <li>Step 5: Run: yarn dev</li>
        </ul>

        <h3> Displaying post title from blog </h3>
      </div>
      {
        posts.nodes.map(post => {
          return(
            <ul key={post.slug}>
              <li>
                {post.title}
              </li>
            </ul>
          )
        })
      }
    </div>
  )

}

export async function getStaticProps(){

  const res = await fetch('https://headless.naphix.com/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
          query: `
          query NewQuery {
            posts {
              nodes {
                slug
                title
              }
            }
          }
          `,
      })
  })

  const json = await res.json()

  return {
    props: {
        posts: json.data.posts,
    },
  }

}
