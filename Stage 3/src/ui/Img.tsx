import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { MouseEventHandler, useState } from 'react'
import { BlurhashCanvas } from 'react-blurhash'

interface ImgProps {
  src: string
  blurhash: string
  alt: string
  onClick?: React.MouseEventHandler<HTMLImageElement>
  className?: string
  tag: string
}

const Img = function ({
  src,
  blurhash,
  alt,
  onClick,
  className,
  tag,
}: ImgProps) {
  const [isImgLoaded, setIsImgLoaded] = useState(false)

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: blurhash })
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  }
  return (
    <div
      className="img-container"
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
    >
      {!isImgLoaded && (
        <BlurhashCanvas
          onClick={onClick as MouseEventHandler<HTMLCanvasElement> | undefined}
          hash={blurhash}
          punch={1}
        />
      )}
      <p className="tag">{tag}</p>
      <img
        style={{ display: isImgLoaded ? 'block' : 'none' }}
        onLoad={() => setIsImgLoaded(true)}
        src={src}
        alt={alt}
        onClick={onClick}
        className={className}
      />
    </div>
  )
}

export default Img
