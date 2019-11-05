import React, { Component } from 'react';
import './AudioPlayer.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setTrack } from '../../actions/index';

export class AudioPlayer extends Component {
	componentWillUnmount = () => {
		this.props.setTrack('');
	};

	render() {
		const { currentTrack } = this.props;
		return (
			<audio controls className='audioPlayer'>
				<source src={currentTrack} type='audio/mpeg' />
			</audio>
		);
	}
}

const mapStateToProps = ({ currentTrack }) => ({
	currentTrack
});

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ setTrack }, dispatch);
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AudioPlayer);
