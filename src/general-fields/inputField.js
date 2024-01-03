import { Box, FormControl, FormHelperText, Input, TextField } from "@mui/material";

const PrivateInput = ({ name, nameForError, register, errors, label, helperText, multiline }) => {
    return <>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
            {/* <div> */}
            {/* <TextField
        helpertext={errors[name]?.message}
        {...register(name)}
        color="secondary"
        id="filled-error-helper-text"
        label={label}
        variant="filled"
    /> */}
            <TextField
                id={multiline ? "standard-multiline-static" : "standard-basic"}
                rows={multiline ? 4 : 1}
                multiline={multiline ? true : false}
                {...register(name)}
                label={label}
                variant="standard"
                helpertext={nameForError ? errors[nameForError]?.message : errors[name]?.message}
            />
            <FormHelperText>{nameForError ? errors[nameForError]?.message : errors[name]?.message}</FormHelperText>
            {helperText ? <FormHelperText id="component-error-text">{helperText}</FormHelperText> : <></>}
            {/* <Input {...register(name)} placeholder={label} label="Standard" variant="standard"/> */}
            {/* <input {...register(name)} placeholder={label} /> */}
            {/* </div> */}
            {/* (errors[name]?.message && helperText) || */}
            {/* || helperText */}
        </FormControl>
    </>
}

const MyInput = ({ name, nameForError, register, errors, label, helperText, multiline, box = true }) => {
    return <>
        {box != false ?
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '98%' },
                    // '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <PrivateInput name={name} nameForError={nameForError}
                    register={register} errors={errors} label={label}
                    helperText={helperText} multiline={multiline ? multiline : ""} />
            </Box> :
            <PrivateInput name={name} nameForError={nameForError}
                register={register} errors={errors} label={label}
                helperText={helperText} multiline={multiline ? multiline : ""} />
        }
    </>
}
export default MyInput;