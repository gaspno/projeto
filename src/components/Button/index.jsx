import { Component } from "react/cjs/react.development";
import './styles.css' 

export class Button extends Component {
   
    render() {
        const {text,onClick,disabled}=this.props;
        
        return (
        <button className='button' onClick={onClick} disabled={disabled}>{text}</button>
        )
    }

}