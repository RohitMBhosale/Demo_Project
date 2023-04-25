import './cardData.css'

export function CardData(props) {
    const { image, designation, name, jobDiscription } = props

    function alertName() {
        alert(props.name)
    }

    return (

        <div className='container' >

            <img src={image} />
            <h3 className='designation'>{props.designation}</h3>
            <h1 className='name'>{props.name}</h1>
            <p className='job'>{props.jobDiscription}</p>
            <button className={props.externalClassName || 'btn'}
                onClick={props.onClickFunction || alertName}
                style={props.buttonStyle}>See More</button>

        </div>


    )
}