
import './tictac.css'


export default function TicTacToe(props){

    const classes = (props.className ? `${props.className} single-square` : `single-square`)

return(


<span className={classes}  onClick={props.onClick} > {props.state} </span>

)

}