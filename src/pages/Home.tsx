import Slider from "react-slick";
import CustomButton from "../componets/ui/CustomButton";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Seprator from "../componets/ui/Seprator";

function Home() {
  const cards = [
    {
      title: "ULTRA-MODULUS CARBON",
      desc: "Ultra-light, incredibly tough, built for brutal terrain.",
      defaultImg:
        "https://www.yt-industries.com/thumbnail/88/12/5b/1746098628/JEFFSY-29-CF-MY25-Core4-FogGreen_0415_1920x1920.jpg?ts=1746098629",
      hoverImg:
        "https://www.yt-industries.com/thumbnail/3d/73/fb/1746098629/JEFFSY-29-CF-MY25-Core4-FogGreen_0451_1280x1280.jpg?ts=1746098631",
    },
    {
      title: "RACE GEOMETRY",
      desc: "Built for speed and precision.",
      defaultImg:
        "https://www.yt-industries.com/thumbnail/13/95/98/1746098628/JEFFSY-29-CF-MY25-Core4-FogGreen_0017_1920x1920.jpg?ts=1746098629",
      hoverImg:
        "https://www.yt-industries.com/thumbnail/0e/af/84/1746098629/JEFFSY-29-CF-MY25-Core4-FogGreen_0466_1280x1280.jpg?ts=1746098631",
    },
    {
      title: "PRO SUSPENSION",
      desc: "Maximum control at full send.",
      defaultImg:
        "https://www.yt-industries.com/thumbnail/fd/d8/70/1746098629/JEFFSY-29-CF-MY25-Core4-FogGreen_0430_1920x1920.jpg?ts=1746098630",
      hoverImg:
        "https://www.yt-industries.com/thumbnail/c7/43/db/1738833161/JEFFSY-29-CF-MY25-Core4-FogGreen_0404sSfKWv40Ptkf5.jpg_1280x1280.jpg?ts=1738833310",
    },
    {
      title: "LIGHTWEIGHT BUILD",
      desc: "Strength without compromise.",
      defaultImg:
        "https://www.yt-industries.com/thumbnail/f8/57/77/1746098629/JEFFSY-29-CF-MY25-Core4-FogGreen_0402_1920x1920.jpg?ts=1746098631",
      hoverImg:
        "https://www.yt-industries.com/thumbnail/3d/73/fb/1746098629/JEFFSY-29-CF-MY25-Core4-FogGreen_0451_1280x1280.jpg?ts=1746098631",
    },
    {
      title: "ENDURO READY",
      desc: "Designed for brutal descents.",
      defaultImg:
        "https://www.yt-industries.com/thumbnail/89/c2/fd/1746098628/JEFFSY-29-CF-MY25-Core4-FogGreen_0476_1920x1920.jpg?ts=1746098629",
      hoverImg:
        "https://www.yt-industries.com/thumbnail/b1/98/f4/1746098629/JEFFSY-29-CF-MY25-Core4-FogGreen_0460_1280x1280.jpg?ts=1746098630",
    },
  ];

  const settings = {
    className: "center",
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 3.4,
    swipeToSlide: true,
    arrows: false,
    dots: false,
  };

  const testimonials = [
    {
      name: "Aarav Mehta",
      review:
        "VertX Bicycle delivers a smooth and powerful ride. Perfect for my daily commute and weekend rides.",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Neha Sharma",
      review:
        "I love the lightweight design and premium build quality. VertX Bicycle feels fast, stable, and stylish.",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Rahul Verma",
      review:
        "Amazing performance on both city roads and rough paths. VertX Bicycle is totally worth the investment.",
      img: "https://randomuser.me/api/portraits/men/65.jpg",
    },
    {
      name: "Sneha Patel",
      review:
        "Comfortable, durable, and very easy to handle. VertX Bicycle exceeded my expectations.",
      img: "https://randomuser.me/api/portraits/women/30.jpg",
    },
    {
      name: "Karan Singh",
      review:
        "The design is sleek and modern, and the ride quality is outstanding. Highly recommended for cyclists of all levels.",
      img: "https://randomuser.me/api/portraits/men/18.jpg",
    },
    {
      name: "Rohit Malhotra",
      review:
        "VertX Bicycle offers excellent balance and control. Riding feels effortless even on long distances.",
      img: "https://randomuser.me/api/portraits/men/77.jpg",
    },
    {
      name: "Priya Nair",
      review:
        "The braking and suspension are top-notch. VertX gives confidence and comfort on every ride.",
      img: "https://randomuser.me/api/portraits/women/21.jpg",
    },
    {
      name: "Ankit Joshi",
      review:
        "Great value for money. Premium feel, strong frame, and very smooth performance.",
      img: "https://randomuser.me/api/portraits/men/54.jpg",
    },
    {
      name: "Meera Kulkarni",
      review:
        "Stylish design and reliable performance. VertX Bicycle stands out from other brands I’ve tried.",
      img: "https://randomuser.me/api/portraits/women/39.jpg",
    },
    {
      name: "Vikas Choudhary",
      review:
        "Whether it’s city traffic or open roads, VertX Bicycle handles everything perfectly.",
      img: "https://randomuser.me/api/portraits/men/23.jpg",
    },
  ];

  return (
    <>
      <section className="bg-lightgray relative rounded-b-[3rem] p-8 pt-44">
        <div className="max-width text-center">
          <h1 className="text-dark mb-8 text-center text-[5rem] leading-24 font-medium tracking-tight uppercase">
            Build for Speed <br />
            Designed for freedom
          </h1>

          <CustomButton data="Explore" />

          {/* <ScrollVelocity
          texts={["React Bits", "Scroll Down"]}
          // velocity={100}
          className="custom-scroll-text"
        /> */}

          <img
            src="https://www.yt-industries.com/_ipx/f_webp&s_2300x1400/https://www.yt-industries.com/media/be/1b/b1/1747664007/JEFFSY-29-CF-MY25-Core4-FogGreen_Side.png%3Fts=1747664007%3Fwidth=1000%26fit=crop,smart"
            alt=""
            className="mx-auto w-[60%]"
          />
        </div>
      </section>

      <section className="p-8 py-36 text-center">
        <div className="max-width">
          <span className="text-text-light text-lg"> The Concept </span>

          <h3 className="text-text-light mx-auto mt-8 w-[80%] text-5xl leading-15 tracking-tight">
            The Vertx combines cutting-edge design with rugged trail capability.
            Crafted with an advanced carbon frame and high-performance
            components, it’s engineered to deliver confidence and control across
            every terrain from steep climbs to fast descents
          </h3>
        </div>
      </section>

      <Seprator />

      <section className="p-8 py-36">
        <div className="max-width">
          <h1 className="mb-8 text-center text-[5rem] leading-24 font-medium tracking-tight text-white uppercase">
            Core features
          </h1>

          <div className="mx-auto mt-28 max-w-7xl px-4 text-white">
            <div className="grid grid-cols-1 gap-32 md:grid-cols-2">
              {cards.map((card, index) => (
                <div key={index} className="w-full">
                  <img
                    src={card.defaultImg}
                    alt={card.title}
                    className="h-auto w-full rounded-4xl object-cover"
                  />

                  <h4 className="mt-4 text-2xl leading-tight font-medium tracking-tight md:text-3xl">
                    {card.title}
                  </h4>
                  <p className="mt-2 text-base text-gray-400">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Seprator />

      <section className="p-8 py-36">
        <div className="max-width">
          <h1 className="mb-8 text-center text-[5rem] leading-24 font-medium tracking-tight text-white uppercase">
            What our customers say
          </h1>

          <div className="slider-container py-8">
            <Slider {...settings}>
              {testimonials.map((data) => (
                <div className="rounded-3xl bg-[#ffffff0d] p-8 text-white">
                  <img src={data.img} alt="" className="size-14 rounded-full" />
                  <p className="py-12 text-[1.2rem] font-light">
                    {data.review}
                  </p>

                  <p className="text-lightgray">{data.name}</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      <section className="bg-lightgray relative rounded-[3rem] p-8 pb-16 text-center">
        <div className="max-width relative text-center">
          <img
            src="https://www.yt-industries.com/thumbnail/bd/c9/c1/1738833154/JEFFSY-29-CF-MY25-Core4-FogGreen_RearND.png_1280x1280.png?ts=1738833304"
            alt=""
            className="mx-auto w-[60%]"
          />
          <h1 className="text-dark mb-8 text-center text-[5rem] leading-24 font-medium tracking-tight uppercase">
            Book your Vertx now
          </h1>

          <CustomButton data="book now" />
        </div>
      </section>
    </>
  );
}

export default Home;
