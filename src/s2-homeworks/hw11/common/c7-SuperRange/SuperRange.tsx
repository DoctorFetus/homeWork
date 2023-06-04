import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                maxWidth: "150px",
                color: '#00CC22',
                position: "absolute",
                left: "42px",
                '& .MuiSlider-thumb': {
                    border: "1px solid #00CC22",
                    boxShadow: "inset 0 0 0 6px white",
                },
                '& .MuiSlider-rail': {
                    color: "#000000"
                }
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
