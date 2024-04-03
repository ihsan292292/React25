import { useState } from "react";
import data from "./data";
import "./styles.css"

export default function Accordian() {

    const [selected, setselected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false)
    const [multiple, setMultiple] = useState([])

    function handleSingleSelection(getCurrentId){
        console.log(getCurrentId);
        setselected(getCurrentId === selected ? null : getCurrentId);
    }

    function handleMultiselection(getCurrentId){
        let cpyMultiple = [...multiple]
        const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId)
        if (findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId)
        else cpyMultiple.splice(findIndexOfCurrentId, 1)

        setMultiple(cpyMultiple)

    }
    console.log(selected)
    return <div className="wrapper">
        <button onClick={() =>setEnableMultiSelection(!enableMultiSelection)}>Enable</button>
        <div className="accordian">
            {
                data && data.length > 0 ? (
                    data.map((dataItem) => (
                    <div className="item">
                        <div onClick={ enableMultiSelection 
                            ? ()=>  handleMultiselection(dataItem.id)
                            : () => handleSingleSelection(dataItem.id)} className="title">
                            <h3>{dataItem.question}</h3>
                            <span>+</span>
                        </div>
                        {
                            enableMultiSelection 
                            ? multiple.indexOf(dataItem.id) !== -1  &&
                             (
                              <div className="content">{dataItem.answer}</div>
                              )
                             :
                            selected === dataItem.id && 
                            (
                            <div className="content">{dataItem.answer}</div> 
                        )} 
                            {/* {
                                selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1? (
                                <div className="content">{dataItem.answer}</div>
                                ) : null
                            } */}
                    </div>
                    ))
                ) : ( 
                    <div>No data Found !!</div> 
                    )
            };
        </div>
    </div>;

}
