/**
 * Mock retrieval of the job list.
 */
import _jobList from './jobList.json';

const TIMEOUT = 100;

export default {
  getJobList: (cb, timeout) => setTimeout(() => cb(_jobList), timeout || TIMEOUT)
}