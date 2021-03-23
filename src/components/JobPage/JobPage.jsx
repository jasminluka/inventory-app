import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Grid, Paper, Typography } from '@material-ui/core'
import { AgGridColumn, AgGridReact } from 'ag-grid-react'

import useStyles from './styles'

import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'

const getRowClass = params => {
  if (params.node.rowIndex % 2 !== 0) {
    return { background: '#F1FFFC' }
  }
  return { background: '#E9FFF0' }
}

const cellStyles = { fontWeight: 'bold' }

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
                className={`${classes.category} ${cat === category?.name ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </Typography>
            ))
          }
        </Paper>
      </Grid>
      <Grid item sm={9}>
        {
          category &&
            <div className="ag-theme-alpine" style={{ height: 550, width: '100%' }}>
              <AgGridReact
                rowData={category?.list || []}
                getRowStyle={getRowClass}
                pagination={true}
                paginationPageSize={10}
              >
                <AgGridColumn field="id" cellStyle={cellStyles} />
                <AgGridColumn field="item" sortable={true} filter={true} />
                <AgGridColumn field="quantity" sortable={true} />
                <AgGridColumn field="description" />
                <AgGridColumn field="notes" />
              </AgGridReact>
            </div>
        }
      </Grid>
    </Grid>
  )
}

export default JobPage