import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

const MySelect = ({ name, register, errors, label, options: [{ }] }) => {
    // const [selected, setSelected] = useState('');
    // const handleChange = (event) => {
    //     console.log('event ', event);
    //     console.log('selected ', selected);
    //     setSelected(event.target.value);
    const [age, setAge] = useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return <>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">{label}</InputLabel>
            <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={age}
                onChange={handleChange}
                label={label}
                // {...register(name)}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                {/* {options?.map(op => {
                    <>
                        <div>{op} op works2!!</div>
                        <MenuItem value={op?.Id}>{op.Name}</MenuItem>
                    </>
                })} */}
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        </FormControl>
    </>
}
export default MySelect;
// <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
//     <InputLabel id="demo-simple-select-standard-label">{label}</InputLabel>
//     <Select
//         labelId="demo-simple-select-standard-label"
//         id="demo-simple-select-standard"
//         value={selected}
//         onChange={handleChange}
//         label={label}
//         {...register(name)}
//         helpertext={errors[name]?.message}
//     >
//         <MenuItem value="">
//             <em>ריק</em>
//         </MenuItem>
//         <MenuItem value={10}>Ten</MenuItem>
//         {/* {options.map(op => {
//             <>
//                 <div>{op} op works2!!</div>
//                 <MenuItem value={op?.Id}>{op.Name}</MenuItem>
//             </>
//         })} */}
//         {/* <MenuItem value={10}>Ten</MenuItem>*/}
//         <MenuItem value={20}>Twenty</MenuItem>
//         <MenuItem value={30}>Thirty</MenuItem>
//     </Select>
// </FormControl>