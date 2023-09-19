import '../sass/homepage.scss'
import imagesData from '../data'
import Img from '../ui/Img'
import { useRef, useState } from 'react'
import { DndContext, useDroppable, closestCenter } from '@dnd-kit/core'
import { SortableContext } from '@dnd-kit/sortable'

function Homepage() {
  const [images, setImages] = useState(imagesData)
  const [seachQuery, setSearchQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const { isOver, setNodeRef } = useDroppable({
    id: 'droppable',
  })
  const style = {
    color: isOver ? 'green' : undefined,
  }
  return (
    <div className="homepage">
      <header>
        <img src="/hng.jpg" alt="hng" />
        <label htmlFor="searchbar">
          <img src="/search.svg" alt="searchbar" />
          <input
            placeholder="Search by tags"
            type="text"
            id="searchbar"
            name="searchbar"
            ref={inputRef}
            onChange={() => setSearchQuery(inputRef.current!.value)}
          />
        </label>
      </header>

      <main ref={setNodeRef} style={style}>
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={({ active, over }) => {
            const imagesCopy = [...images]
            if (!active.data.current || !over || !over.data.current) return

            const [draggedImage] = imagesCopy.splice(
              active.data.current.sortable.index,
              1
            )

            imagesCopy.splice(over.data.current.sortable.index, 0, draggedImage)
            setImages(imagesCopy)
          }}
        >
          <SortableContext
            items={images.map(img => ({ ...img, id: img.blurhash }))}
          >
            {images
              .filter(img => img.tag.includes(seachQuery))
              .map(img => (
                <Img
                  key={img.blurhash}
                  alt="image"
                  src={img.img}
                  blurhash={img.blurhash}
                  tag={img.tag}
                />
              ))}
          </SortableContext>
        </DndContext>
      </main>
    </div>
  )
}

export default Homepage
