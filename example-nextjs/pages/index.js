import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import styles from '../styles/Home.module.css'

import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'

const elemPrefix = 'test'
const getId = (index) => `${elemPrefix}${index}`

const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: getId(ind) }))

export default function Home() {
  const [items, setItems] = React.useState(getItems)
  const [selected, setSelected] = React.useState([])
  const [position, setPosition] = React.useState(300)

  function savePosition({ scrollContainer }) {
    setPosition(scrollContainer.scrollLeft)
  }

  React.useEffect(() => {
    setTimeout(() => {
      const newItems = items.concat(
        Array(5)
          .fill(0)
          .map((_, ind) => ({ id: getId(items.length + ind) }))
      )
      console.log('push new items')
      setItems(newItems)
    }, 3000)
  }, [])

  const toggleSelected = (id) => {
    const isSelected = selected.find((el) => el === id)

    setSelected((currentSelected) =>
      isSelected
        ? currentSelected.filter((el) => el !== id)
        : currentSelected.concat(id)
    )
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <div style={{ width: '90vw' }}>
          <ScrollMenu
            LeftArrow={LeftArrow}
            RightArrow={RightArrow}
            onInit={({ scrollContainer }) => {
              scrollContainer.current.scrollLeft = position
            }}
            onScroll={savePosition}
          >
            {items.map(({ id }) => (
              <Card
                id={id}
                itemId={id}
                key={id}
                onClick={(ev) => toggleSelected(id, ev)}
                selected={!!selected.find((el) => el === id)}
              />
            ))}
          </ScrollMenu>
        </div>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } = React.useContext(VisibilityContext)

  return (
    <Arrow disabled={isFirstItemVisible} onClick={scrollPrev}>
      Left
    </Arrow>
  )
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext)

  return (
    <Arrow disabled={isLastItemVisible} onClick={scrollNext}>
      Right
    </Arrow>
  )
}

function Arrow({ children, disabled, onClick }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      style={{
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        right: '1%',
        userSelect: 'none',
      }}
    >
      {children}
    </button>
  )
}

function Card({ onClick, selected, title, itemId }) {
  const { isItemVisible } = React.useContext(VisibilityContext)

  return (
    <div
      onClick={onClick}
      style={{
        border: '1px solid',
        display: 'inline-block',
        margin: '0 10px',
        width: '160px',
      }}
      tabIndex="0"
    >
      <div className="card">
        <div>{title}</div>
        <div>visible: {JSON.stringify(!!isItemVisible(itemId))}</div>
        <div>selected: {JSON.stringify(!!selected)}</div>
      </div>
      <div
        style={{
          backgroundColor: selected ? 'green' : 'bisque',
          height: '200px',
        }}
      />
    </div>
  )
}
