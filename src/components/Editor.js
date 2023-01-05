import React from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/dracula.css'
import 'codemirror/theme/material.css'
import 'codemirror/theme/3024-day.css'
import 'codemirror/theme/3024-night.css'
import 'codemirror/theme/abcdef.css'
import 'codemirror/theme/ambiance-mobile.css'
import 'codemirror/theme/ambiance.css'
import 'codemirror/theme/ayu-dark.css'
import 'codemirror/theme/ayu-mirage.css'
import 'codemirror/theme/base16-dark.css'
import 'codemirror/theme/base16-light.css'
import 'codemirror/theme/bespin.css'
import 'codemirror/theme/blackboard.css'
import 'codemirror/theme/cobalt.css'
import 'codemirror/theme/colorforth.css'
import 'codemirror/theme/darcula.css'
import 'codemirror/theme/eclipse.css'
import 'codemirror/theme/elegant.css'
import 'codemirror/theme/hopscotch.css'
import 'codemirror/theme/icecoder.css'
import 'codemirror/theme/idea.css'
import 'codemirror/theme/lesser-dark.css'
import 'codemirror/theme/liquibyte.css'
import 'codemirror/theme/mbo.css'
import 'codemirror/theme/material-ocean.css'
import 'codemirror/theme/neat.css'
import 'codemirror/theme/neo.css'
import 'codemirror/theme/night.css'
import 'codemirror/theme/oceanic-next.css'
import 'codemirror/theme/paraiso-dark.css'
import 'codemirror/theme/railscasts.css'
import 'codemirror/theme/rubyblue.css'
import 'codemirror/theme/seti.css'
import 'codemirror/theme/shadowfox.css'
import 'codemirror/theme/ssms.css'
import 'codemirror/theme/the-matrix.css'
import 'codemirror/theme/twilight.css'
import 'codemirror/theme/vibrant-ink.css'
import 'codemirror/theme/xq-dark.css'
import 'codemirror/theme/xq-light.css'
import 'codemirror/theme/yeti.css'
import 'codemirror/theme/yonce.css'
import 'codemirror/theme/zenburn.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { Controlled } from 'react-codemirror2'
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/javascript-hint';
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/addon/hint/anyword-hint';
import 'codemirror/keymap/sublime';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/fold/foldcode';
import 'codemirror/addon/fold/foldgutter';
import 'codemirror/addon/fold/brace-fold';
import 'codemirror/addon/fold/comment-fold';
import 'codemirror/addon/fold/foldgutter.css';
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';





const useStyles = makeStyles({
  container:{
    display: 'flex',
    height:"40vh",
    margin:0
  },
  codeMirrorWrapper:{
    flexGrow: 1,
    overflow: 'hidden',
  }
});

const Editor = ({ language, value, onChange, theme}) => {
  const classes = useStyles();  
  const handleChange = (editor, data, value) => {
    onChange(value)
  }
  return (
    <>
       <Box className={classes.container}>
          <Controlled
            onBeforeChange={handleChange}
            value={value}
            className={classes.codeMirrorWrapper}
            options={{
              lineWrapping: true,
              lint: true,
              mode: language,
              smartIndent: true,
              foldGutter: true,
              gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
              theme: theme,
              lineNumbers: true,
              autoCloseTags: true,
              keyMap: 'sublime',
              matchBrackets: true,
              autoCloseBrackets: true,
               extraKeys: {
                   'Ctrl-Space': 'autocomplete'
                }
            }}
          />
    </Box>
    </>
  )
}

export default Editor