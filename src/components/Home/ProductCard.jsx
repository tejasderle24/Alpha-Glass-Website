import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import G1 from '../../assets/G1.png'
import G2 from '../../assets/G2.png'
import G3 from '../../assets/G3.png'

function ProductCard() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Default for desktop view
        slidesToScroll: 1
    };

    const data = [
        {
            img: G1,
            title: "Laminated Glass",
            desc: "Laminated glass is a safety glass made by bonding layers of glass with a plastic interlayer, offering durability and shatter resistance."
        },
        {
            img: G2,
            title: "Tempered Glass",
            desc: "Tempered glass is a type of safety glass that's heat-treated to be stronger and shatter into small, less harmful pieces when broken."
        },
        {
            img: G3,
            title: "Bend Glass",
            desc: "Bend glass is a curved or shaped glass formed by heating it until pliable and molding it into desired contours, and design."
        },
        {
            img: G1,
            title: "Laminated Glass",
            desc: "Laminated glass is a safety glass made by bonding layers of glass with a plastic interlayer, offering durability and shatter resistance."
        },
        {
            img: G2,
            title: "Tempered Glass",
            desc: "Tempered glass is a type of safety glass that's heat-treated to be stronger and shatter into small, less harmful pieces when broken."
        },
        {
            img: G3,
            title: "Bend Glass",
            desc: "Bend glass is a curved or shaped glass formed by heating it until pliable and molding it into desired contours, and design."
        }
    ];

    return (
        <div className="w-3/4 m-auto">
            <div className="mt-20">
                <Slider
                    {...settings}
                    responsive={[
                        {
                            breakpoint: 1024, // Tablet and desktop view
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1
                            }
                        },
                        {
                            breakpoint: 768, // For mobile/tablet views
                            settings: {
                                slidesToShow: 1, // Show only one slide at a time
                                slidesToScroll: 1
                            }
                        }
                    ]}
                >
                    {
                        data.map((d, index) => (
                            <div key={index} className="p-6">
                                <div className="max-w-sm h-auto rounded overflow-hidden shadow-lg bg-white">
                                    <img className="w-full h-48 object-cover" src={d.img} alt={d.title} />
                                    <div className="px-6 py-4">
                                        <h1 className="text-[#3C3C3C] font-bold text-xl mb-2 ">{d.title}</h1>
                                        <p className="text-[#3D3737] text-base p-4">
                                            {d.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    );
}

export default ProductCard;
