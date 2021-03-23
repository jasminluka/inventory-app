import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Grid, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, Typography, Button } from '@material-ui/core'

import { selectJobs } from '../../features/jobs/jobsSlice'
import useStyles from './styles'

const Dashboard = () => {
	const jobs = useSelector(selectJobs)
	const classes = useStyles()

	return (
		<Grid container spacing={3}>
			<Grid item sm={11}>
				<TableContainer component={Paper}>
					<Table className={classes.table} aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell><Typography className={classes.bold}>JOB SITE NAME</Typography></TableCell>
								<TableCell align="right"><Typography className={classes.bold}>STATUS</Typography></TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{
								jobs.map(job => (
									<TableRow key={job.name}>
										<TableCell component="th" scope="row">
											<Link to={`/${job.id}`} className={classes.link}>{job.name}</Link>
										</TableCell>
										<TableCell align="right">{job.isConfirmed ? 'Confirmed' : 'Pending'}</TableCell>
									</TableRow>
								))
							}
						</TableBody>
					</Table>
				</TableContainer>
			</Grid>
			<Grid item sm={1}>
				<Link to='/new-job' style={{ textDecoration: 'none' }}>
					<Button variant="contained" color="primary">Create</Button>
				</Link>
			</Grid>
		</Grid>
	)
}

export default Dashboard