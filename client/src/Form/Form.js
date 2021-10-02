import { Button, Paper, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import useStyles from "./styles"
import FileBase from 'react-file-base64'
import { useDispatch } from 'react-redux'
import { createPost } from '../actions/posts'


export default function Form() {
    const classes = useStyles()

    const [postData, setPostData] = useState({
        creator: '', title: '', message: '', tags: '', selectedFile: ''
    })
    const dispatch = useDispatch()

    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(createPost(postData))
     }

     const clear = () =>{

    }
    return (
        <div>
            <Paper className={classes.paper}>
                <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                    <Typography variant='h6'>Створи згадку</Typography>
                    <TextField name='creator' variant='outlined' label='Автор' fullWidth value={postData.creator} onChange={(e)=>setPostData({...postData, creator: e.target.value})}/>
                    <TextField name='title' variant='outlined' label='заголовок' fullWidth value={postData.title} onChange={(e)=>setPostData({...postData, title: e.target.value})}/>
                    <TextField name='message' variant='outlined' label='Текст' fullWidth value={postData.message} onChange={(e)=>setPostData({...postData, message: e.target.value})}/>
                    <TextField name='tags' variant='outlined' label='Теги' fullWidth value={postData.tags} onChange={(e)=>setPostData({...postData, tags: e.target.value})}/>
                    <div className={classes.fileInput}>
                        <FileBase 
                        type='file' multiple={false} onDone={({base64})=>setPostData({...postData, selectedFile: base64})}
                        />
                    </div>
                    <Button className={classes.buttonSubmit} variant='contained' color='primary' size='large' type='submit' fullWidth>Зберегти</Button>
                    <Button variant='contained' color='secondary' size='small' type='submit' onClick={clear} fullWidth>Очистити</Button>
                </form>
            </Paper>
        </div>
    )
}
