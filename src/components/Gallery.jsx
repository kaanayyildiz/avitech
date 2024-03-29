import heroImage from "../assets/avitech-aircraft-parts-2.jpg"
import heroImage2 from "../assets/avitech-aircraft-parts.jpg"

export default function Gallery() {
    return (
        <>
        
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
        {/* image - start */}
        <a className="group relative flex h-80 items-end overflow-hidden md:h-80">
          <img src={heroImage} loading="lazy" alt="Avitech Steel" className="inset-0 h-full w-full object-cover object-center transition duration-700 group-hover:scale-110 grayscale" />
        </a>
        {/* image - end */}
        {/* image - start */}
        <a className="group relative flex h-48 items-end overflow-hidden md:col-span-2 md:h-80">
          <img src={heroImage2} loading="lazy" alt="Avitech Business Corporate" className="inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" />
        </a>
        {/* image - end */}
      </div>
        

        </>
    )
}