import { useEffect } from 'react'
import GLightbox from 'glightbox'
import 'glightbox/dist/css/glightbox.min.css'

export default function Gallery() {
 
  const images = Object.values(
    import.meta.glob('./images/*.{png,jpg,jpeg,webp,gif}', {
      eager: true,
      as: 'url',
    })
  ) as string[]

  useEffect(() => {
    const lightbox = GLightbox({ selector: '.glightbox' })
    return () => lightbox.destroy()
  }, [])

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Галерея</h2>
      <div className="columns-2 gap-3 sm:columns-3 [&_a]:block [&_img]:rounded-xl [&_img]:w-full [&_img]:mb-3">
        {images.map((src, i) => (
          <a key={i} href={src} className="glightbox" data-gallery="hbd">
            <img src={src} alt={`Фото ${i + 1}`} className="transition hover:opacity-90" />
          </a>
        ))}
      </div>
    </div>
  )
}


