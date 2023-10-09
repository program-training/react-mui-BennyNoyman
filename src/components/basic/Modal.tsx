import { useState } from "react";
import {Box, Button, Modal, TextField, Typography} from "@mui/material";

export default function () {
    const style = {
        color: 'black',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    return(
        <>
            <TextField onChange={(event) => setInput1(event.target.value)}></TextField>
            <TextField onChange={(event) => setInput2(event.target.value)}></TextField>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h2">your texts</Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>{input1}</Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>{input2}</Typography>
                </Box>
            </Modal>
        </>
        )

}