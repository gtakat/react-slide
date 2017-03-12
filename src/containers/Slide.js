import { connect } from 'react-redux'
import Slide from '../components/Slide'
import { nextPage, prevPage } from '../actions'

const mapStateToProps = (state) => (state)

const mapDispatchToProps = (dispatch) => (
  {
    nextPage: () => { dispatch(nextPage()) },
    prevPage: () => { dispatch(prevPage()) }
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(Slide)