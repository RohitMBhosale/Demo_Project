import {Fragment} from 'react'

export function Myfun(props) {
    
    const  {subject, email, name1, name2, name3, name4, location} = props;

    return(
        <Fragment>

            Subject : {subject}<br/>
            To : {email}<br/><br/>

            Hi , {name1}<br/><br/>

            I am having a birthday party next Friday at my Home . Would you like to come ? It will be fun .<br/> Lots of people from my school are coming . you know some of them - {name2} , {name3} , {name4} .<br/>

            My house is behind our school , near {location} .<br/><br/>

            I hope you will come and see you soon .<br/>

            from ,<br/>
            {name1}

        </Fragment>
    )
}