import { MouseEventHandler, useState } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { BlurhashCanvas } from 'react-blurhash'

interface ImgProps {
  src: string
  blurhash: string
  alt: string
  onClick?: React.MouseEventHandler<HTMLImageElement>
  className?: string
  idx: number
}

const Img = function ({
  src,
  blurhash,
  alt,
  onClick,
  className,
  idx,
}: ImgProps) {
  const [isImgLoaded, setIsImgLoaded] = useState(false)
  return (
    <Draggable draggableId={blurhash} index={idx}>
      {provided => (
        <>
          {!isImgLoaded && (
            <BlurhashCanvas
              onClick={
                onClick as MouseEventHandler<HTMLCanvasElement> | undefined
              }
              hash={blurhash}
              punch={1}
            />
          )}
          <img
            style={{ display: isImgLoaded ? 'block' : 'none' }}
            onLoad={() => setIsImgLoaded(true)}
            src={src}
            alt={alt}
            onClick={onClick}
            className={className}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          />
        </>
      )}
    </Draggable>
  )
}

export default Img
