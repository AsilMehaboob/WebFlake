import React from 'react';
import ReactDOM from 'react-dom';
import './Carousel.css'

/************************************

************************************/
const slideWidth = 30;

const _items = [
    {
        movie: {
            title: 'Die Hard',
            desc: '',
            image: 'http://cinespia.org/wp-content/uploads/2015/11/diehardposter.jpg',
        },
    },
    {
        movie: {
            title: " Garlic Herb Butter Roast Turkey",
            desc: "",
            image: 'https://www.allrecipes.com/thmb/ORGJ6dFOd8LA5JQLvVAVD1PfJjo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ALR-56348-a-simply-perfect-roast-turkey-VAT-hero-4x3-c9eaf408d00a4cd89251ea856b1c317f.jpg',
        },
    },
    {
        movie: {
            title: 'Cranberry Sauce',
            desc: '',
            image: 'https://theviewfromgreatisland.com/wp-content/uploads/2022/11/cranberry-sauce-with-spiced-rum-6143-November-05-2022.jpg',
        },
    },
    {
        movie: {
            title: 'Peppermint Cheesecake',
            desc: '',
            image: 'https://bakefromscratch.com/wp-content/uploads/2021/11/CH-Peppermint-Cheesecake_019SR1x1.jpg',
        },
    },
    {
        movie: {
            title: 'Salted Caramel Eggnog',
            desc: '',
            image: 'https://hips.hearstapps.com/hmg-prod/images/homemade-eggnog-index-65720b2598ed5.jpg?crop=0.8905165592856336xw:1xh;center,top&resize=1200:*',
        },
    },
];

const length = _items.length;
_items.push(..._items);

const sleep = (ms = 0) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

const createItem = (position, idx) => {
    const item = {
        styles: {
            transform: `translateX(${position * slideWidth}rem)`,
        },
        movie: _items[idx].movie,
    };

    switch (position) {
        case length - 1:
        case length + 1:
            item.styles = {...item.styles, filter: 'grayscale(1)'};
            break;
        case length:
            break;
        default:
            item.styles = {...item.styles, opacity: 0};
            break;
    }

    return item;
};

const CarouselSlideItem = ({pos, idx, activeIdx}) => {
    const item = createItem(pos, idx, activeIdx);

    return (
        <li className="carousel__slide-item" style={item.styles}>
            <div className="carousel__slide-item-img-link">
                <img src={item.movie.image} alt={item.movie.title} />
            </div>
            <div className="carousel-slide-item__body">
                <h4>{item.movie.title}</h4>
                <p>{item.movie.desc}</p>
            </div>
        </li>
    );
};

const keys = Array.from(Array(_items.length).keys());

const Carousel = () => {
    const [items, setItems] = React.useState(keys);
    const [isTicking, setIsTicking] = React.useState(false);
    const [activeIdx, setActiveIdx] = React.useState(0);
    const bigLength = items.length;

    const prevClick = (jump = 1) => {
        if (!isTicking) {
            setIsTicking(true);
            setItems((prev) => {
                return prev.map((_, i) => prev[(i + jump) % bigLength]);
            });
        }
    };

    const nextClick = (jump = 1) => {
        if (!isTicking) {
            setIsTicking(true);
            setItems((prev) => {
                return prev.map(
                    (_, i) => prev[(i - jump + bigLength) % bigLength],
                );
            });
        }
    };

    const handleDotClick = (idx) => {
        if (idx < activeIdx) prevClick(activeIdx - idx);
        if (idx > activeIdx) nextClick(idx - activeIdx);
    };

    React.useEffect(() => {
        if (isTicking) sleep(300).then(() => setIsTicking(false));
    }, [isTicking]);

    React.useEffect(() => {
        setActiveIdx((length - (items[0] % length)) % length) // prettier-ignore
    }, [items]);

    return (
        <div className="carousel__wrap">
            <div className="carousel__inner">
                <button className="carousel__btn carousel__btn--prev" onClick={() => prevClick()}>
                    <i className="carousel__btn-arrow carousel__btn-arrow--left" />
                </button>
                <div className="carousel__container">
                    <ul className="carousel__slide-list">
                        {items.map((pos, i) => (
                            <CarouselSlideItem
                                key={i}
                                idx={i}
                                pos={pos}
                                activeIdx={activeIdx}
                            />
                        ))}
                    </ul>
                </div>
                <button className="carousel__btn carousel__btn--next" onClick={() => nextClick()}>
                    <i className="carousel__btn-arrow carousel__btn-arrow--right" />
                </button>
                <div className="carousel__dots">
                    {items.slice(0, length).map((pos, i) => (
                        <button
                            key={i}
                            onClick={() => handleDotClick(i)}
                            className={i === activeIdx ? 'dot active' : 'dot'}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

ReactDOM.render(<Carousel />, document.getElementById('root'));

export default Carousel;


