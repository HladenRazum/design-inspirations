import { useEffect, useState } from 'react'

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
  const numButtons = items.length > 0 ? Math.ceil(totalPages / items.length) : 0

  useEffect(() => {
    const getData = async (itemsPerPage: number) => {
      const response = await fetch(
        'https://swapi.dev/api/people/?page=' + itemsPerPage
      )

      const data = await response.json()
      setTotalPages(data.count)
      setItems(data.results)

      if (data.previous) {
        setIsPrevious(true)
      }

      if (data.next) {
        setIsNextPage(true)
      }

      console.log(data)
    }

    getData(currentPage)
  }, [currentPage])

  const handleGetNextItems = () => {}

  return (
    <div className='h-screen bg-slate-900 w-full relative'>
      {items.map((item) => (
        <div
          key={item.name}
          className='flex p-2 mb-1 items-baseline gap-2 text-slate-500 border-b border-neutral-900'
        >
          <p className='text-white text-xl' key={item.name}>
            {item.name}
          </p>
          <p>height: {item.height}</p>
          <p>mass: {item.mass}</p>
        </div>
      ))}
      <div className='flex justify-between fixed bottom-1 w-full'>
        <button
          className='p-5 border bg-green-200 text-green-800 disabled:bg-neutral-100 disabled:text-neutral-400 cursor-pointer'
          disabled={!isPrevious}
        >
          Previous Page
        </button>
        <button
          onClick={handleGetNextItems}
          className='p-5 border bg-green-200 text-green-800 disabled:bg-neutral-100 disabled:text-neutral-400 cursor-pointer'
          disabled={!isNextPage}
        >
          Next Page
        </button>
      </div>
      <div className=' text-slate-500 bottom-10   w-full'>
        totalPages: <span className='text-orange-500'> {totalPages}</span>{' '}
        currentPage: <span className='text-orange-500'> {currentPage}</span>
      </div>
    </div>
  )
}
