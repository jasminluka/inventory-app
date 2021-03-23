import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Grid, Paper, Typography } from '@material-ui/core'
import { DataGrid } from '@material-ui/data-grid'

import useStyles from './styles'

const columns = [
  { field: 'id', headerName: 'Nr.', width: 70, sortable: false },
  { field: 'item', headerName: 'Item', width: 160 },
  { field: 'quantity', headerName: 'Quantity', width: 130, type: 'number' },
  { field: 'description',  headerName: 'Description', width: 350, sortable: false },
  { field: 'notes', headerName: 'Notes', width: 130, sortable: false },
]

const JobPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null)
  
  const { jobId } = useParams()
  const job = useSelector(state => state.jobs.find(job => job.id === jobId))
  const category = useSelector(state => state.categories.find(category => category.name === (selectedCategory || job?.categories[0])))
  const classes = useStyles()
  
  return (
    <Grid container spacing={4}>
      <Grid item sm={3}>
        <Paper className={classes.paper}>
          <Typography variant='h5' className={classes.name}>{job?.name}</Typography>
          <Typography className={classes.categories}>CATEGORIES</Typography>
          {
            job?.categories?.map((cat, index) => (
              <Typography
                key={index}
                className={`${classes.category} ${cat === category?.name ? classes.activeCategory : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </Typography>
            ))
          }
        </Paper>
      </Grid>
      <Grid item sm={9} style={{ height: 650 }}>
        {
          category &&
            <DataGrid rows={category?.list || []} columns={columns} pageSize={10} />
        }
      </Grid>
    </Grid>
  )
}

export default JobPage