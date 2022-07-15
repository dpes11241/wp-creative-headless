import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Navbar( {menus} ){
  console.log( {menus}.menuItems.edges[1].node.label )
  return(
    <div>
      {

      }
    </div>
  )

}

export async function getStaticProps(){

  const res = await fetch('http://headless-wp.test/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
          query: `
          query Navbar {
            menus {
              nodes {
                id
                databaseId
                name
                menuItems {
                  edges {
                    node {
                      id
                      label
                      parentId
                    }
                  }
                }
              }
            }
          }
          `,
      })
  })

  const json = await res.json()

  return {
    props: {
        menus: json.data.menus,
    },
  }

}
