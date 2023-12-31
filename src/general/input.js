import { Box, FormHelperText, Input, TextField } from "@mui/material";

const MyInput = ({ name, register, errors, label }) => {
    return <>
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            {/* <div> */}
            {/* <TextField
                    helperText={errors[name]?.message}
                    {...register(name)}
                    color="secondary"
                    id="filled-error-helper-text"
                    label={label}
                    variant="filled"
                /> */}
            <TextField
                id="standard-basic"
                {...register(name)}
                label={label}
                variant="standard"
                helperText={errors[name]?.message}
            />
            {/* <Input {...register(name)} placeholder={label} label="Standard" variant="standard"/> */}
            {/* <input {...register(name)} placeholder={label} /> */}
            {/* <FormHelperText id="component-error-text">{errors[name]?.message}</FormHelperText> */}
            {/* </div> */}
        </Box>
    </>
}
export default MyInput;