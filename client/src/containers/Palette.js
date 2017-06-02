import { connect } from 'react-redux';
import Palette from '../components/Palette';

// Gets data from "API"s and stores them in the redux store using the

function mapStateToProps(state) {
  const { jobData } = state;

  return {
    jobMappings: jobData.jobMappings,
    jobs: jobData.jobs
  }
}

export default connect(mapStateToProps)(Palette);
