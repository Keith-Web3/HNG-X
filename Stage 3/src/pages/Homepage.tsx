import '../sass/homepage.scss'
import imagesData from '../data'
import Img from '../ui/Img'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { useState } from 'react'

function Homepage() {
  const [images, setImages] = useState(imagesData)
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
          />
        </label>
      </header>

      <DragDropContext
        onDragEnd={context => {
          const { source, destination } = context
          console.log(context)
          if (!destination) return
          if (destination?.index === source.index) return

          const duplicateImages = [...images]

          const [deletedImage] = duplicateImages.splice(source.index, 1)
          duplicateImages.splice(destination.index, 0, deletedImage)

          setImages(duplicateImages)
        }}
      >
        <Droppable type="GROUP" droppableId="droppable">
          {provided => (
            <main {...provided.droppableProps} ref={provided.innerRef}>
              {images.map((img, idx) => (
                <Img
                  key={idx}
                  alt="image"
                  src={img.img}
                  blurhash={img.blurhash}
                  idx={idx}
                />
              ))}
              {provided.placeholder}
            </main>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

export default Homepage
