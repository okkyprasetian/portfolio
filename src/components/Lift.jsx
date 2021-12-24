import { BsDiamond, BsDiamondFill } from 'react-icons/bs'

const Lift = ({ sp, burger }) => {

    const arr = [[0, 350], [350, 1070], [1070, 1790], [1790, 3000]]

    return (
        <div className={`lift ${burger && 'lift-off'}`}>
            {arr.map(e => {
                return (
                    <div className='floor' key={e[0]} >
                        {
                            (sp >= e[0] && sp < e[1]) ? <BsDiamondFill /> : <BsDiamond />
                        }
                    </div>
                )
            })}
        </div >
    );
}

export default Lift;