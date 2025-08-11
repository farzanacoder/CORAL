import React from 'react'
import Container from '../../components/Container'
import Flex from '../../components/Flex'
import Image from '../../components/Image'
import Brand_1 from '../../src/assets/brand_1.png'
import Brand_2 from '../../src/assets/brand_2.png'
import Brand_3 from '../../src/assets/02.png'
import Brand_4 from '../../src/assets/03.png'
import Brand_5 from '../../src/assets/04.png'

const Brand = () => {
  return (
    <>
    <section className='py-20'>
           <div className="relative w-full overflow-hidden">
                        <div className="flex animate-marquee whitespace-nowrap">
                            {[Brand_1, Brand_2, Brand_3, Brand_4, Brand_5, Brand_1, Brand_2, Brand_3, Brand_4, Brand_5].map((brand, i) => (
                                <Image
                                    key={i}
                                    src={brand}
                                    alt="brand"
                                    className="h-[50px] lg:h-[65px] w-auto mx-4 inline-block"
                                />
                            ))}
                        </div>
                    </div>
    </section>



      {/* CSS Animation */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee {
          animation: marquee 12s linear infinite;
        }
      `}</style>
    </>

    
  )
}

export default Brand