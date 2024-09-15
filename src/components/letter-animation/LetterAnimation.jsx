import './letterAnimation.scss' ;

const letterAnimation = ({letterClass , strArray , index})  =>{
    return (
        <span>
            {
                strArray.map((char , i) => {
                    return(<span key={char + i} className={`${letterClass} _${i + index}`}>
                        {char}
                    </span>)
                })
            }
        </span>
    )
}

export default letterAnimation ;