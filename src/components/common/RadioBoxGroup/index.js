import React, { Component } from 'react'

export default class index extends Component {
    handleChange=e=>{
        // let newArr;
        // if(e.target.checked){
        //     newArr = [...this.props.chooseDatas,e.target.value]
        // }else{
        //     newArr = this.props.chooseDatas.filter(it=>it!==e.target.value)
        // }
        this.props.onChange && this.props.onChange(e.target.value,this.props.name,e)
    }
  /**
   * 得到一组单选框
   */
    getRadios(){
      return this.props.datas.map(it =>(
            <label key={it.value}>
            <input 
                type="radio"
                name={this.props.name}
                value={it.value}
                checked={this.props.value === it.value} 
                onChange={this.handleChange}
            />
           { it.text}
            </label>
      ));
    }

    
    render() {
        const bs = this.getRadios()
        return (
            <div>
                {bs}
            </div>
        )
    }
}
