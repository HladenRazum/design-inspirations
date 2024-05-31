import { Suspense, useEffect, useState } from 'react'

type Result = {
  name: string
  mass: string
  height: string
}

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [isPrevious, setIsPrevious] = useState(false)
  const [isNextPage, setIsNextPage] = useState(false)
  const [items, setItems] = useState<Result[]>([])
  const [isLoading, setIsLoading] = useState(false)

  // postsPerPage  = items.length
  // numButtons = totalPages / items.length

  useEffect(() => {
    const getData = async (itemsPerPage: number) => {
      setIsLoading(true)
      try {
        const response = await fetch(
          'https://swapi.dev/api/people/?page=' + itemsPerPage
        )

        const data = await response.json()
        setTotalPages(data.count)
        setItems(data.results)

        if (data.previous) {
          setIsPrevious(true)
        } else {
          setIsPrevious(false)
        }

        if (data.next) {
          setIsNextPage(true)
        } else {
          setIsNextPage(false)
        }
        console.log(data.next)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }

    getData(currentPage)
  }, [currentPage])

  const handleGetNextItems = () => {
    if (isNextPage) {
      setCurrentPage((prev) => prev + 1)
    }
  }

  const handleGetPreviousItems = () => {
    if (isPrevious) {
      setCurrentPage((prev) => prev - 1)
    }
  }

  return (
    <div className="min-h-screen bg-slate-900 w-full relative">
      {isLoading ? (
        <div className="p-7 text-xl text-blue-700">Loading content...</div>
      ) : (
        items?.map((item) => (
          <div
            key={item.name}
            className="flex p-2 mb-1 items-baseline gap-2 text-slate-500 border-b border-neutral-900"
          >
            <p className="text-white text-xl" key={item.name}>
              {item.name}
            </p>
            <p>height: {item.height}</p>
            <p>mass: {item.mass}</p>
          </div>
        ))
      )}

      <div className="flex justify-between fixed bottom-1 w-full">
        <button
          onClick={handleGetPreviousItems}
          className="p-5 border bg-green-200 text-green-800 disabled:bg-neutral-100 disabled:text-neutral-400 cursor-pointer"
          disabled={!isPrevious}
        >
          Previous Page
        </button>
        <button
          onClick={handleGetNextItems}
          className="p-5 border bg-green-200 text-green-800 disabled:bg-neutral-100 disabled:text-neutral-400 cursor-pointer"
          disabled={!isNextPage}
        >
          Next Page
        </button>
      </div>
      <div className=" text-slate-500 bottom-10   w-full">
        totalPages: <span className="text-orange-500"> {totalPages}</span>{' '}
        currentPage: <span className="text-orange-500"> {currentPage}</span>
      </div>
    </div>
  )
}
