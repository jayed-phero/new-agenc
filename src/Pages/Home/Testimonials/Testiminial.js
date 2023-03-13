import React from 'react';
import Slider from 'react-slick';
import Heading from '../../../components/Heading';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.css'

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            
            style={{ display: "none"}}
            onClick={onClick}
        />
    );
}
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className}`}
            style={{ display: "none" }}
            onClick={onClick}
        />
    );
}

const Testiminial = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 900,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const testimonal = [
        {
          id: 1,
          name: "HERICSION TM",
          post: "CEO OF NERTIE",
          desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
          cover: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
          id: 2,
          name: "SCOTT ROGER ",
          post: "GENERAL MANAGER",
          desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
          cover: "https://images.unsplash.com/photo-1589386417686-0d34b5903d23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
          id: 3,
          name: "AMELEA DECIN",
          post: "SECRETARY GENERAL",
          desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
          cover: "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
            id: 4,
            name: "ROGER SCOTT",
            post: "MARKETING MANAGER",
            desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
            cover: "https://images.unsplash.com/photo-1589386417686-0d34b5903d23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
          },
      ]
    return (
        <div >
            <div className='max-w-7xl mx-auto px-5 xl:px-0 my-11 m md:my-20'>
                <Heading
                    title={"Clents Feedback"}
                />
                <h3 className='lg:text-5xl font-bold text-3xl text-center max-w-xl mx-auto'>Top rated reviews by our satisfied clients</h3>
                <section class="gri grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3">
                <Slider {...settings}>
                    {
                        testimonal.map(data =>
                            <div class="p-12 border rounded-lg dark:border-gray-700 shadow-xl">
                                <div className='h-12 w-12 mb-5 rounded-full bg-orange-400 text-white text-2xl font-bold flex items-center justify-center'>
                                <i class="fa-solid fa-quote-right"></i>
                                </div>
                                <p class="leading-loose text-gray-800 dark:text-gray-400">
                                    {data.desc}
                                </p>

                                <div class="flex items-center mt-8 -mx-2">
                                    <img class="object-cover mx-2 rounded-full w-16 shrink-0 h-16 ring-4 ring-gray-300 dark:ring-gray-700" src={data.cover} alt="" />

                                    <div class="mx-4">
                                        <h1 class="font-semibold text-blue-500 text-xl dark:text-white">{data.name}</h1>
                                        <span class="text-s text-gray-700 dark:text-gray-400">{data.post}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    </Slider>
                </section>
            </div>
        </div>
    );
};

export default Testiminial;