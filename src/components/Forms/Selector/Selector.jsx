import { BtnOpen, Input, Label, Option, Options, SvgIcon, Wrapper } from "./Selector.styled"
import { useState } from "react";
import { useEffect } from "react";

export const Selector = ({label, type, name, value, placer, options, handleFilter})=>{
  const [showList, setShowList] = useState(false);
	const [filtered, setFiltered] = useState(options);
	const [filter, setFilter] = useState(value);

	const handleChange =(str)=>{
		// setFiltered(options.filter(el => el.toString().toLowerCase().startsWith(str.toString().toLowerCase())));
		setFilter(str.name);		
		handleFilter(str._id);
	}	
	const onClick = (str) =>{
		handleChange(str);
		setShowList(false);
		setFiltered(options);
	}
	useEffect(() => {
		setFilter(value)
	}, [value])
	
	return(
		<Wrapper>
			<Label>{label}</Label>
			<Input  type={type} name={name} value={filter} placeholder={placer} onChange={ev => handleChange(ev.target.value)} onFocus={()=>setShowList(true)} onBlur={()=>setShowList(false)} />
			<BtnOpen type="button" onClick={() => { setShowList(!showList); }} ><SvgIcon tag={showList ? "up" : "down"}/>
			</BtnOpen>			
			<Options $isopen={showList}>
				{filtered.map(el=> <Option key={el._id} onClick={()=>onClick(el)}>{el.name}</Option>)}
			</Options>
		</Wrapper>
	)
}