import { BsDiamond, BsDiamondFill } from 'react-icons/bs'

const Lift = () => {

    const arr = [0, 1, 2, 3]

    return (
        <div className='lift'>
            {arr.map(e => {
                return (
                    <div className='floor' key={e} >
                        {e === 0 ? <BsDiamondFill /> : <BsDiamond />}
                    </div>
                )
            })}
        </div >
    );
}

export default Lift;