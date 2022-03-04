import { Autocomplete, TextField, Box } from '@mui/material'

const Select = ( { data, handleChange, placeholder, value } ) => {
    return (
        <Autocomplete
            id="country-select-demo"
            sx={{ width: '90%' }}
            options={data}
            autoHighlight
            value={value}
            onChange={(e, v) => handleChange(e,v)}
            getOptionLabel={( option ) => option.name}
            renderOption={( props, option ) => (
                <Box component="li" style={{backgroundColor: '#fff'}} {...props}>
                    {option.name}
                </Box>
            )}
            renderInput={( params ) => (
                <TextField
                    {...params}
                    label={placeholder}
                />
            )}
        />
    )
}

export default Select