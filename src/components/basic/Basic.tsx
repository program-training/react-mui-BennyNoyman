import {TextField, Button, Typography, Radio, Checkbox, Select} from "@mui/material";
import {useState} from "react";

export default function Basic() {
    const [input, setInput] = useState<string>("");
    const [typoValue, setTypoValue] = useState<string>("");
    return(
        <>
            <Typography variant="h1">{typoValue}</Typography>
            <TextField label="headline"
                       sx={{backgroundColor: "red"}}
                       onChange={(event) => setInput(event.target.value)}/>
            <Button onClick={() => setTypoValue(input)}>click me</Button>
            <Radio sx={{'& .MuiSvgIcon-root':{width: "45px", height: "45px"}}}></Radio>
            <Checkbox sx={{'&.Mui-checked':{
                    color:'black',
                    backgroundColor:'lightgreen'
                }}}></Checkbox>
            <Select sx={{backgroundColor: "salmon"}}></Select>
        </>
    )
}