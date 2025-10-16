import React from "react";
import Nav from "../../Components/Nav/Nav";

import heroImage from './../../assets/rev_home3_01.png'

import element01 from './../../assets/H5_decor4.png'
import element02 from './../../assets/rev_home3_04.png'
import element03 from './../../assets/rev_home3_05.png'
import element04 from './../../assets/rev_home3_06.png'

import slideImage01 from './../../assets/h3_cat-4.jpg'
import slideImage02 from './../../assets/h3_cat-1.jpg'
import slideImage03 from './../../assets/h3_cat-2.jpg'
import slideImage04 from './../../assets/h3_cat-3.jpg'
import slideImage05 from './../../assets/h3_cat-7.jpg'

import { Swiper , SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import slideImage06  from './../../assets/product_18_1-600x600.jpg'
import slideImage07  from './../../assets/product_3_1-600x600.jpg'
import slideImage08  from './../../assets/product_5_1-600x600.jpg'
import slideImage09  from './../../assets/product_5_2-600x600.jpg'
import slideImage10  from './../../assets/product_19_1-600x600.jpg'
import slideImage11  from './../../assets/product_1_1-600x600.jpg'
import slideImage12  from './../../assets/product_2_4.jpg'
import slideImage13  from './../../assets/product_12_1-600x600.jpg'

import avtar01 from './../../assets/avatar-1.jpg'
import avtar02 from './../../assets/avatar-2.jpg'
import avtar03 from './../../assets/avatar-4.jpg'
import avtar04 from './../../assets/avatar-6.jpg'

function Index() {
    return (
        <>
            <div className="flex flex-col gap-[20px] relative min-h-[90vh] bg-[#ffded1]" id="home">
                <Nav />
                <div className="w-full px-[12%] pt-[100px] flex gap-[20px] flex-col lg:flex-row">
                    <div className="flex flex-col lg:w-[50%] w-full  items-start gap-4 justify-center">
                        <small className='text-4xl font-dancing'>
                            Best Seller
                        </small>
                        <h2 className="text-7xl 2xl:text-8xl font-medium text-red-600 font-Kalnia" >Ice Cream <br /> Novelties</h2>
                        <p className="text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora dolore perspiciatis dolorem labore eligendi sit ipsum officiis iste, qui cupiditate.</p>
                        <button className="btn header-btn">Shop Now <i className="ri-arrow-right-line"></i> </button>
                    </div>
                    <div className="lg:w-[50%] full flex items-center justify-center z-[1] relative md:absolute right-0 bottom-0">
                        <img src={heroImage} alt="header-image" className="w-full sm:w-[400px] 2xl:w-[600px]" />
                    </div>

                    <img src={element01} alt="element1" className="w-[80px] h-[80px] absolute -top-[-80%] left-5" />
                    <img src={element02} alt="element2" className="w-[80px] h-[80px] absolute -top-[-20%] lg:left-[90%] left-[65%] hidden sm:flex" />
                    <img src={element03} alt="element3" className="w-[90px] h-[90px] absolute -top-[-10%] left-5" />
                    <img src={element04} alt="element3" className="w-[90px] h-[90px] absolute -top-[-85%] sm:-top-[-80%] lg:left-[85%] left-[-75%] z-1" />
                </div>
            </div>

            {/* Category Section */}

            <section id="category">
                <h3 className="section_heading">Shop by Category</h3>

                <Swiper
                    className="w-full mt-[80px]"
                    slidesPerView={5}
                    spaceBetween={10}
                    autoplay={
                        {
                            delay:2500
                        }
                    }
                    modules={[Autoplay]}
                    loop={true}
                    breakpoints={{
                        0:{
                            slidesPerView: 1.5,
                        },
                        768:{
                            slidesPerView: 2.5,
                        },
                        1024:{
                            slidesPerView: 4.5,
                        }
                    }}

                >
                    <SwiperSlide>
                        <div className="w-[180px] card group">
                            <img src={slideImage01} alt="slider-image" className="w-full rounded-full mb-4"  />

                            <span className="Slide_text">Ice Cream Bar</span>
                            <span className="text-center w-full text-base hidden group-hover:inline-block">2 Products </span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-[180px] card group">
                            <img src={slideImage02} alt="slider-image" className="w-full rounded-full mb-4"  />

                            <span className="Slide_text">Frozen Yogurt</span>
                            <span className="text-center w-full text-base hidden group-hover:inline-block">6 Products </span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-[180px] card group">
                            <img src={slideImage03} alt="slider-image" className="w-full rounded-full mb-4"  />

                            <span className="Slide_text">Rolled Ice Cream</span>
                            <span className="text-center w-full text-base hidden group-hover:inline-block">3 Products </span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-[180px] card group">
                            <img src={slideImage04} alt="slider-image" className="w-full rounded-full mb-4"  />

                            <span className="Slide_text">Vegan Ice Cream</span>
                            <span className="text-center w-full text-base hidden group-hover:inline-block">3 Products </span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-[180px] card group">
                            <img src={slideImage05} alt="slider-image" className="w-full rounded-full mb-4"  />

                            <span className="Slide_text">Vegan Gelato</span>
                            <span className="text-center w-full text-base hidden group-hover:inline-block">2 Products </span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-[180px] card group">
                            <img src={slideImage01} alt="slider-image" className="w-full rounded-full mb-4"  />

                            <span className="Slide_text">Ice Cream Bar</span>
                            <span className="text-center w-full text-base hidden group-hover:inline-block">2 Products </span>
                        </div>
                    </SwiperSlide>
                </Swiper>

            </section>

            <section>
                <div className="flex gap-[10px] flex-wrap lg:flex-nowrap">
                    <div className="w-full sm:w-[46%] lg:w-[33%] h-[550px] bg-[url(assets/h3_bn-2.jpg)] bg-cover p-6 flex flex-col items-center pt-15 gap-2 text-white">
                        <small className="text-2xl">Save 20% off</small>
                        <h3>Summer 2025</h3>
                        <p className="text-center">Smooth & Refreshing , intensely , Flavorful , 100% Dairy Free . </p>
                        <button className="btn headerbtn">Shop Now <i className="ri-arrow-right-line"></i></button>
                    </div>
                    <div className="w-full sm:w-[46%] lg:w-[33%] h-[550px] bg-[url(assets/h3_bn-1.jpg)] bg-cover p-6 flex flex-col items-center pt-15 gap-2 text-white">
                    <small className="text-2xl">Save 20% off</small>
                        <h3>Summer 2025</h3>
                        <p className="text-center">Smooth & Refreshing , intensely , Flavorful , 100% Dairy Free . </p>
                        <button className="btn headerbtn">Shop Now <i className="ri-arrow-right-line"></i></button>
                    </div>
                    <div className="w-full lg:w-[33%] h-[550px] flex flex-col gap-10">
                       <div className="h-[250px] w-full bg-[url(assets/h3_bn-4.jpg)] bg-cover p-6 flex flex-col pt-4 gap-2 text-white">
                       <h3 className="text-3xl">Best Selling</h3>
                       <p className="pt-20">The 1# Best <br /> Selling Gelato.</p>
                       </div>
                       <div className="h-[250px] w-full bg-[url(assets/h3_bn-3.jpg)] bg-cover p-6 flex flex-col pt-4 gap-2 text-white">
                       <h3 className="text-3xl">Best Selling</h3>
                       <p className="pt-20">smooth & Creamy <br /> texture , low in calorie .</p>
                       </div>
                    </div>
                </div>
            </section>

            {/* Popular flavor SECTION */}
            <section id="popular">
                <h3 className="section_heading">Popular Scoop Flavors </h3>
                    
                <Swiper
                    className="mt-20 w-full"

                    slidesPerView={3}
                    spaceBetween={30}
                    autoplay={
                        {
                            delay:1500
                        }
                    }
                    loop={true}
                    breakpoints={{
                        0:{
                            slidesPerView: 1.5,
                        },
                        768:{
                            slidesPerView:2.5
                        },
                        1024:{
                            slidesPerView:3.5
                        }
                    }}

                    modules={[Autoplay]}

                >
                    <SwiperSlide>
                        <div className="relative flex flex-col gap-[10px] card">
                            <div className="w-full">
                                <img src={slideImage06} alt="slide-image" className="w-full" />

                                <div className="absolute top-5 flex flex-col right-5 gap-2 icons-card hidden">
                                    <i className="ri-heart-line icon-card"></i>
                                    <i className="ri-shuffle-line icon-card"></i>
                                    <i className="ri-eye-line icon-card"></i>
                                </div>

                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <div className="">
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-line"></i>
                                </div>

                                <h2 className="text-lg font-bold text-rose-400 text-center">Chocolate Fudge Browning</h2>
                                <span>$7.50</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative flex flex-col gap-[10px] card">
                            <div className="w-full">
                                <img src={slideImage07} alt="slide-image" className="w-full" />

                                <div className="absolute top-5 flex flex-col right-5 gap-2 icons-card hidden">
                                    <i className="ri-heart-line icon-card"></i>
                                    <i className="ri-shuffle-line icon-card"></i>
                                    <i className="ri-eye-line icon-card"></i>
                                </div>

                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <div className="">
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-line"></i>
                                </div>

                                <h2 className="text-lg font-bold text-rose-400 text-center">Boom Balattl's Ice Cream</h2>
                                <span>$5.50</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative flex flex-col gap-[10px] card">
                            <div className="w-full">
                                <img src={slideImage08} alt="slide-image" className="w-full" />

                                <div className="absolute top-5 flex flex-col right-5 gap-2 icons-card hidden">
                                    <i className="ri-heart-line icon-card"></i>
                                    <i className="ri-shuffle-line icon-card"></i>
                                    <i className="ri-eye-line icon-card"></i>
                                </div>

                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <div className="">
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-line"></i>
                                </div>

                                <h2 className="text-lg font-bold text-rose-400 text-center">Peekaboo  Ice Cream</h2>
                                <span>$13.50</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative flex flex-col gap-[10px] card">
                            <div className="w-full">
                                <img src={slideImage10} alt="slide-image" className="w-full" />

                                <div className="absolute top-5 flex flex-col right-5 gap-2 icons-card hidden">
                                    <i className="ri-heart-line icon-card"></i>
                                    <i className="ri-shuffle-line icon-card"></i>
                                    <i className="ri-eye-line icon-card"></i>
                                </div>

                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <div className="">
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-line"></i>
                                </div>

                                <h2 className="text-lg font-bold text-rose-400 text-center">Beckon Fudge Browning</h2>
                                <span>$14.50</span>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

            </section>

            {/* Shop Section */}

            <section id="shop">
                <h3 className="section_heading">Eat Ice Cream , Be Happy !</h3>

                {/* Grid Wrapper */}
                <div className="mt-30 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                    {/* Grid-Card */}
                    <div className="w-full flex flex-col gap-2 relative card">
                        {/* Grid-image */}
                        <div className="w-full">
                            <img src={slideImage06} alt="slide-image" />

                            <div className="absolute top-5 flex flex-col gap-2 right-5 hidden icons-card">
                                <i className="ri-heart-line icon-card"></i>
                                <i className="ri-shuffle-line icon-card"></i>
                                <i className="ri-eye-line icon-card"></i>
                            </div>
                        </div>
                        {/* Grid-card-content */}
                        <div className="flex flex-col gap-2 items-center">
                            <div className="">
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-line"></i>
                            </div>

                            <h2 className="text-lg font-bold text-rose-400 text-center">Chocolate Fudge Browing</h2>
                            <span>$7.50</span>
                        </div>
                    </div>
                    {/* Grid-Card */}
                    <div className="w-full flex flex-col gap-2 relative card">
                        {/* Grid-image */}
                        <div className="w-full">
                            <img src={slideImage07} alt="slide-image" />

                            <div className="absolute top-5 flex flex-col gap-2 right-5 hidden icons-card">
                                <i className="ri-heart-line icon-card"></i>
                                <i className="ri-shuffle-line icon-card"></i>
                                <i className="ri-eye-line icon-card"></i>
                            </div>
                        </div>
                        {/* Grid-card-content */}
                        <div className="flex flex-col gap-2 items-center">
                            <div className="">
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-line"></i>
                            </div>

                            <h2 className="text-lg font-bold text-rose-400 text-center">Booms Battles Ice Creams</h2>
                            <span>$5.50</span>
                        </div>
                    </div>
                    {/* Grid-Card */}
                    <div className="w-full flex flex-col gap-2 relative card">
                        {/* Grid-image */}
                        <div className="w-full">
                            <img src={slideImage08} alt="slide-image" />

                            <div className="absolute top-5 flex flex-col gap-2 right-5 hidden icons-card">
                                <i className="ri-heart-line icon-card"></i>
                                <i className="ri-shuffle-line icon-card"></i>
                                <i className="ri-eye-line icon-card"></i>
                            </div>
                        </div>
                        {/* Grid-card-content */}
                        <div className="flex flex-col gap-2 items-center">
                            <div className="">
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-line"></i>
                            </div>

                            <h2 className="text-lg font-bold text-rose-400 text-center">Peekaboo Ice Creams</h2>
                            <span>$13.50</span>
                        </div>
                    </div>
                    {/* Grid-Card */}
                    <div className="w-full flex flex-col gap-2 relative card">
                        {/* Grid-image */}
                        <div className="w-full">
                            <img src={slideImage09} alt="slide-image" />

                            <div className="absolute top-5 flex flex-col gap-2 right-5 hidden icons-card">
                                <i className="ri-heart-line icon-card"></i>
                                <i className="ri-shuffle-line icon-card"></i>
                                <i className="ri-eye-line icon-card"></i>
                            </div>
                        </div>
                        {/* Grid-card-content */}
                        <div className="flex flex-col gap-2 items-center">
                            <div className="">
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-line"></i>
                            </div>

                            <h2 className="text-lg font-bold text-rose-400 text-center">Peekaboo Ice Creams</h2>
                            <span>$13.50</span>
                        </div>
                    </div>
                    {/* Grid-Card */}
                    <div className="w-full flex flex-col gap-2 relative card">
                        {/* Grid-image */}
                        <div className="w-full">
                            <img src={slideImage10} alt="slide-image" />

                            <div className="absolute top-5 flex flex-col gap-2 right-5 hidden icons-card">
                                <i className="ri-heart-line icon-card"></i>
                                <i className="ri-shuffle-line icon-card"></i>
                                <i className="ri-eye-line icon-card"></i>
                            </div>
                        </div>
                        {/* Grid-card-content */}
                        <div className="flex flex-col gap-2 items-center">
                            <div className="">
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-line"></i>
                            </div>

                            <h2 className="text-lg font-bold text-rose-400 text-center">Becokn Ice Creams</h2>
                            <span>$17.50</span>
                        </div>
                    </div>
                    {/* Grid-Card */}
                    <div className="w-full flex flex-col gap-2 relative card">
                        {/* Grid-image */}
                        <div className="w-full">
                            <img src={slideImage11} alt="slide-image" />

                            <div className="absolute top-5 flex flex-col gap-2 right-5 hidden icons-card">
                                <i className="ri-heart-line icon-card"></i>
                                <i className="ri-shuffle-line icon-card"></i>
                                <i className="ri-eye-line icon-card"></i>
                            </div>
                        </div>
                        {/* Grid-card-content */}
                        <div className="flex flex-col gap-2 items-center">
                            <div className="">
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-line"></i>
                            </div>

                            <h2 className="text-lg font-bold text-rose-400 text-center">Noosa Ice Creams</h2>
                            <span>$11.50</span>
                        </div>
                    </div>
                    {/* Grid-Card */}
                    <div className="w-full flex flex-col gap-2 relative card">
                        {/* Grid-image */}
                        <div className="w-full">
                            <img src={slideImage12} alt="slide-image" />

                            <div className="absolute top-5 flex flex-col gap-2 right-5 hidden icons-card">
                                <i className="ri-heart-line icon-card"></i>
                                <i className="ri-shuffle-line icon-card"></i>
                                <i className="ri-eye-line icon-card"></i>
                            </div>
                        </div>
                        {/* Grid-card-content */}
                        <div className="flex flex-col gap-2 items-center">
                            <div className="">
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-line"></i>
                            </div>

                            <h2 className="text-lg font-bold text-rose-400 text-center"> Ice Creams</h2>
                            <span>$4.50</span>
                        </div>
                    </div>
                    {/* Grid-Card */}
                    <div className="w-full flex flex-col gap-2 relative card">
                        {/* Grid-image */}
                        <div className="w-full">
                            <img src={slideImage13} alt="slide-image" />

                            <div className="absolute top-5 flex flex-col gap-2 right-5 hidden icons-card">
                                <i className="ri-heart-line icon-card"></i>
                                <i className="ri-shuffle-line icon-card"></i>
                                <i className="ri-eye-line icon-card"></i>
                            </div>
                        </div>
                        {/* Grid-card-content */}
                        <div className="flex flex-col gap-2 items-center">
                            <div className="">
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-line"></i>
                            </div>

                            <h2 className="text-lg font-bold text-rose-400 text-center"> Halo Tops Ice Creams</h2>
                            <span>$4.50</span>
                        </div>
                    </div>
                </div>
                

            </section>

            <section>
                <div className="flex justify-between flex-wrap gap-5">
                    <div className="flex items-center gap-4">
                        <h3 className="text-6xl font-bold text-rose-500">1.5</h3>
                        <p className="text-gray-400">Millon Liters <br /><span className="text-2xl text-black font-semibold">Produced Over</span></p>
                    </div>
                    <div className="flex items-center gap-4">
                        <h3 className="text-6xl font-bold text-rose-500">29</h3>
                        <p className="text-gray-400">Millon <br /><span className="text-2xl text-black font-semibold">Scoops Sold</span></p>
                    </div>
                    <div className="flex items-center gap-4">
                        <h3 className="text-6xl font-bold text-rose-500">20</h3>
                        <p className="text-gray-400">Years of <br /><span className="text-2xl text-black font-semibold">Our Experience</span></p>
                    </div>
                </div>
            </section>

            <section className="bg-orange-100" id="testimonials">

                <h3 className="section_heading">Happy Clients Say</h3>

                <Swiper 
                    className="w-full mt-[100px] mb-[100px]"
                    slidesPerView={3}
                    spaceBetween={20}
                    autoplay={
                        {
                            delay:1500
                        }
                    }
                    loop={true}
                    breakpoints={{
                        0:{
                            slidesPerView:1.5
                        },
                        768:{
                            slidesPerView:2.5
                        },
                        1024:{
                            slidesPerView:3
                        }
                    }}

                    modules={[Autoplay]}
                >
                    <SwiperSlide>
                        <div className="w-full card group p-8 bg-white">
                            <div className="flex items-start gap-3">
                                <img src={avtar01} alt="avtar" className="w-[50px] rounded-full mb-4"/>

                                <div className="flex flex-col">
                                    <div className="">
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-line"></i>
                                    </div>

                                    <span className="text-sm">Sandra Farmar</span>

                                </div>
                            </div>

                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, mollitia corrupti deserunt hic, quae perspiciatis qui ipsum natus nihil modi earum inventore distinctio maiores tempore.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-full card group p-8 bg-white">
                            <div className="flex items-start gap-3">
                                <img src={avtar02} alt="avtar" className="w-[50px] rounded-full mb-4"/>

                                <div className="flex flex-col">
                                    <div className="">
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-line"></i>
                                    </div>

                                    <span className="text-sm">Asma Cornor</span>

                                </div>
                            </div>

                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, mollitia corrupti deserunt hic, quae perspiciatis qui ipsum natus nihil modi earum inventore distinctio maiores tempore.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-full card group p-8 bg-white">
                            <div className="flex items-start gap-3">
                                <img src={avtar03} alt="avtar" className="w-[50px] rounded-full mb-4"/>

                                <div className="flex flex-col">
                                    <div className="">
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-line"></i>
                                    </div>

                                    <span className="text-sm">Kritika Cornor</span>

                                </div>
                            </div>

                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, mollitia corrupti deserunt hic, quae perspiciatis qui ipsum natus nihil modi earum inventore distinctio maiores tempore.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-full card group p-8 bg-white">
                            <div className="flex items-start gap-3">
                                <img src={avtar04} alt="avtar" className="w-[50px] rounded-full mb-4"/>

                                <div className="flex flex-col">
                                    <div className="">
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-line"></i>
                                    </div>

                                    <span className="text-sm">Soheha Cornor</span>

                                </div>
                            </div>

                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, mollitia corrupti deserunt hic, quae perspiciatis qui ipsum natus nihil modi earum inventore distinctio maiores tempore.</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>

            <section className="bg-black text-white flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-5 pb-9">
                    <div className="flex flex-col gap-2">
                        <span className="text-2xl text-red-600 font-bold cursor-pointer">Ice Parlor</span>
                        
                        <div className="flex flex-col mt-4">
                            <span>Follow Us</span>

                            <p className="text-gray-500 hover:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                            <div className="flex gap-4 mt-4">
                                <i className="ri-facebook-line text-gray-500 hover:text-white cursor-pointer text-2xl "></i>
                                <i className="ri-twitter-x-line text-gray-500 hover:text-white cursor-pointer text-2xl  "></i>
                                <i className="ri-youtube-line text-gray-500 hover:text-white cursor-pointer  text-2xl  "></i>
                                <i className="ri-instagram-line text-gray-500 hover:text-white cursor-pointer text-2xl "></i>
                            </div>

                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="text-2xl mb-5">Usefull Links</h2>

                        <p className="text-gray-500 hover:text-white cursor-pointer">About</p>
                        <p className="text-gray-500 hover:text-white cursor-pointer">Service</p>
                        <p className="text-gray-500 hover:text-white cursor-pointer">Storage</p>
                        <p className="text-gray-500 hover:text-white cursor-pointer">Blog</p>
                        <p className="text-gray-500 hover:text-white cursor-pointer">Shop</p>
                        <p className="text-gray-500 hover:text-white cursor-pointer">Menu</p>
                        <p className="text-gray-500 hover:text-white cursor-pointer">Spe.Menu</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="text-2xl">Find Store</h2>

                        <p className="text-gray-500 hover:text-white">5606 e Speragge , Ave , Spokane </p>
                        <p className="text-gray-500 hover:text-white">Valliay , WA 998877 ,  USA</p>
                        <h2 className="text-2xl">Call Now</h2>
                        <p className="text-gray-500 hover:text-white">+128764 145 654 987</p>
                        <p className="text-gray-500 hover:text-white">Support@IceParlor.com</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="text-2xl">Opening Hours</h2>
                        <p className="text-gray-500 hover:text-white">Monday - Sunday</p>
                        <p className="text-gray-500 hover:text-white">9:00 am to 11:30pm</p>
                    </div>
                </div>

                <p className="text-center pt-8 border-t-1 border-gray-500">@2025 IceParlor . All Rights Reserved</p>
            </section>
        </>
    )
}

export default Index