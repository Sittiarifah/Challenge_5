import * as React from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import TimePicker from '@mui/lab/TimePicker';
import {Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import '../css/main.css'

const Main = () => {
  const tipeDriver = [
    { label: 'Dengan Sopir'},
    { label: 'Tanpa Sopir (Lepas Kunci)'}, 
  ]

  const JumlahOrang = [
    { label: '1 orang'},
    { label: '2 orang'},
    { label: '3 orang'},
    { label: '4 orang'},
  ]

  const [value, setValue] = React.useState(null);
  const navigate = useNavigate()
  
  return ( 
    <>
      <div className="main">
        <div className="input">
          <div className="frame">
            <h1 className="type">Tipe Driver</h1>
            <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={tipeDriver} 
          sx={{ width: 230 }}
          renderInput={(params) => <TextField {...params} label="Pilih Tipe Driver" />}
            />
          </div>  

          <div className="frame">
            <h1 className="type">Tanggal</h1>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} label="Pilih Tanggal" />}
              />
            </LocalizationProvider>
          </div>

          <div className="frame">
          <h1 className="type">Waktu Jemput/Ambil</h1>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <TimePicker
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} label="Pilih Waktu" />}
              />
            </LocalizationProvider>
          </div>

          <div className="frame">
            <h1 className="type">Jumlah Penumpang (optional)</h1>
            <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={JumlahOrang} 
          sx={{ width: 230 }}
          renderInput={(params) => <TextField {...params} label="Jumlah Penumpang" />}
            />
          </div>

          <div className="frame">
          <Button variant="success" className="button" onClick={() => {navigate("/car")}}>Cari Mobil</Button>
            
          </div>
        </div>  
      </div> 
    </>
  )
}

export default Main

