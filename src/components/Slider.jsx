import { useState, useEffect } from 'react'
import data from '../data'

const Slider = () => {

    // ===== State =====
    const [pages] = useState(data)
    const [index, setIndex] = useState([0, 1, 2])

    // ===== Set State =====
    // const leftClick = () => {
    //     let newIndex = index.map(e => e - 1)
    //     setIndex(newIndex)
    // }
    // const rightClick = () => {
    //     let newIndex = index.map(e => e + 1)
    //     setIndex(newIndex)
    // }

    // ===== Use Effect =====

    // == make index not out of array
    useEffect(() => {
        const lastIndex = pages.length - 1
        let newIndex = index.map(i => {
            if (i < 0) {
                i = lastIndex
            } else if (i > lastIndex) {
                i = 0
            }
            return i
        })
        for (let j = 0; j < index.length; j++) {
            if (index[j] !== newIndex[j]) {
                setIndex(newIndex)
                break
            }
        }
    }, [index, pages.length])

    // == auto slide for certain interval time period
    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index.map(e => e - 1))
        }, 4000);
        return () => clearInterval(slider)
    }, [index, pages])


    return (
        <div className='slider'>
            <div className="slider-container">
                {pages.map((p, pIndex) => {
                    let position = 'slide-right'
                    let bigImg = null
                    if (pIndex === index[0]) {
                        position = 'slide-active-left'
                    } else if (pIndex === index[1]) {
                        position = 'slide-active'
                    } else if (pIndex === index[2]) {
                        position = 'slide-active-right'
                    } else if (pIndex === index[0] - 1 || (index[0] === 0 && pIndex === pages.length - 1)) {
                        position = 'slide-left'
                    }

                    if (position === 'slide-active') {
                        bigImg = 'big-img'
                    }

                    return (
                        <div className={`pages ${position}`} key={p.id}>
                            <img className={`pages-img ${bigImg}`} src={p.img} alt={p.id} />
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Slider;