import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Grid, TextField, Button, Typography, Paper, InputLabel, Select, MenuItem } from '@material-ui/core'
import { WithContext as ReactTags } from 'react-tag-input'

import { create } from '../../features/jobs/jobsSlice'
import { selectCategories } from '../../features/categories/categoriesSlice'
import useStyles from './styles'


const KeyCodes = {
  comma: 188,
  enter: 13,
  tab: 9
}

const delimiters = [KeyCodes.comma, KeyCodes.enter, KeyCodes.tab]

const JobForm = () => {
  const [name, setName] = useState('')
  const [categories, setCategories] = useState([])
  const [pm, setPm] = useState('')

  const history = useHistory()
  const allCategories = useSelector(selectCategories)
  const dispatch = useDispatch()
  const classes = useStyles()

  const handleSubmit = e => {
    e.preventDefault()

    dispatch(create({ name, categories }))

    history.push('/')
  }

  const handleDelete = id => {
    setCategories(categories.filter((_, index) => index !== id))
  }

  const handleAddition = category => {
    setCategories([...categories, category])
  }

  const canSave = [name, pm].every(Boolean) && categories.length > 0
  
  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">ADD NEW JOBSITE</Typography>
        <TextField name="title" variant="outlined" label="Name" fullWidth value={name} onChange={e => setName(e.target.value)} />
        <Grid container spacing={4}>
          <Grid item sm={10}>
            <ReactTags
              tags={categories}
              suggestions={allCategories.map(category => ({
                  id: category.id,
                  text: category.name
                })
              )}
              placeholder="Categories Included"
              delimiters={delimiters}
              handleDelete={handleDelete}
              handleAddition={handleAddition}
              minQueryLength={1}
              autocomplete={true}
              autofocus={false}
              inputFieldPosition="top"
              allowDragDrop={false}
            />
          </Grid>
          <Grid item sm={2}>
            <InputLabel id="project-manager">PM</InputLabel>
            <Select
              labelId="project-manager"
              id="project-manager-select"
              fullWidth
              value={pm}
              onChange={e => setPm(e.target.value)}
            >
              <MenuItem value={'Mike'}>Mike</MenuItem>
              <MenuItem value={'John'}>John</MenuItem>
              <MenuItem value={'Ayla'}>Ayla</MenuItem>
              <MenuItem value={'Justin'}>Justin</MenuItem>
            </Select>
          </Grid>
        </Grid>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" disabled={!canSave}>Save</Button>
      </form>
    </Paper>
  )
}

export default JobForm