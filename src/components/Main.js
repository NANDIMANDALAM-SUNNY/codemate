import React, { useState, useEffect,useContext } from 'react';
import { Box, 
         Button, 
         Tab,
         InputLabel,
         MenuItem,
         FormHelperText,
         FormControl,
         Select,
         Modal,
         Backdrop,
         Fade,
         } from '@material-ui/core';
import Editor from './Editor'
import AppBar from '@material-ui/core/AppBar';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { FaDownload, FaShareAltSquare } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { store } from '../App';
import  FileSaver from 'file-saver';
import {
  WhatsappShareButton,
  WhatsappIcon,
  TelegramShareButton,
  TelegramIcon,
  LinkedinShareButton,
  LinkedinIcon,
  EmailShareButton,
  EmailIcon,
} from 'react-share';

import { makeStyles } from '@material-ui/core/styles';
import SelectTheme from './SelectTheme';


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  icon:{
    marginLeft:"auto",
    marginTop:"10px",
    display:"flex",
    flexDirection:"row",
    fontSize:"30px"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


const Main = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [value, setValue] = useState('1');
  const { 
    html, setHtml,
    css, setCss,
    javaScript, setJavaScript,
    srcDoc, setSrcDoc,
    theme, setTheme
  } =useContext(store)

  // const handleChangeTheme = (event) => {
  //   setTheme(event.target.value);
  // };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleDownload = ()=>{
    const blob = new Blob([srcDoc], {type: "text/plain;charset=utf-8"});
    FileSaver.saveAs(blob, "index.html");
  }


    useEffect(() => {
      const timeout = setTimeout(() => {
        setSrcDoc(`
          <html>
            <style>${css}</style>
            <body>${html}</body>
            <script>${javaScript}</script>
          </html>
        `)
      }, 500)
      return () => clearTimeout(timeout)
    }, [html, css, javaScript])
  return (
    <>
    <Box >
      <Box >
      <TabContext value={value}>
        <AppBar position="static">
          <TabList indicatorColor="primary" onChange={handleChange} aria-label="simple tabs example">
            <Tab icon={<AiFillHtml5 />} label="HTML" value="1" />
            <Tab icon={<DiCss3 />}  label="CSS" value="2" />
            <Tab icon={<SiJavascript />}  label="JavaScript" value="3" />
            <Box  className={classes.icon} >
              <Box>
                <SelectTheme />
              </Box>
            <div>
              <Button onClick={handleOpen}  style={{color:"white",fontSize:"20px"}}>
                <FaShareAltSquare />
              </Button>
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
                >
                <Fade in={open}>
                  <div className={classes.paper}> 
                    <WhatsappShareButton
                      url={srcDoc}
                      quote={srcDoc}
                      hashtag={'#Coding'}
                    >
                      <WhatsappIcon size={40} round={true} />
                    </WhatsappShareButton>
                    <TelegramShareButton
                         url={srcDoc}
                        quote={srcDoc}
                        hashtag={'#Coding'}
                    >
                    <TelegramIcon size={40} round={true} />
                    </TelegramShareButton>
                    <LinkedinShareButton
                        url={srcDoc}
                        quote={srcDoc}
                        hashtag={'#Coding'}
                    >
                      <LinkedinIcon size={40} round={true} />
                    </LinkedinShareButton>
                    <EmailShareButton
                        url={srcDoc}
                        quote={srcDoc}
                        hashtag={'#Coding'}
                    
                    >
                      <EmailIcon size={40} round={true} />
                    </EmailShareButton>

                  </div>
                </Fade>
              </Modal>
          </div>
              <Box>
                <Button style={{color:"white",fontSize:"20px"}} onClick={handleDownload} ><FaDownload  /></Button>
              </Box>
            </Box>
          </TabList>
        </AppBar>
        <TabPanel   value="1"> 
            <Editor
            language="xml"
            value={html}
            onChange={setHtml}
            theme={theme}
            />
        </TabPanel>
        <TabPanel value="2">
            <Editor
            language="css"
            value={css}
            onChange={setCss}
            theme={theme}
            />
        </TabPanel>
        <TabPanel value="3">
            <Editor
            language="javascript"
            value={javaScript}
            onChange={setJavaScript}
            theme={theme}
            />
        </TabPanel>
        <TabPanel value="4"  >
        
        </TabPanel>
      </TabContext>
    </Box>


      <Box  className='bottom'>
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="1000px"
        />
      </Box>
      </Box>
      </>
  )
}

export default Main