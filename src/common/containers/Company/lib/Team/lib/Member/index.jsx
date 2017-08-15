import React from 'react';
import PropTypes from 'prop-types';

import Typography from 'src/common/components/Typography';
import Icon from 'src/common/components/Icon';
import Link from 'src/common/components/Link';
// import Margin from 'src/common/components/Margin';

import injectSheet from 'react-jss';
import styles from './styles';




const Member = ({
    firstName,
    lastName,
    position,
    imageUrl,
    social,
    classes
}) => (
        <div className={classes.root}>
            <div className={classes.image} style={{ backgroundImage: `url(${imageUrl})` }} />

            <div className={classes.overlay}>
                <div className={classes.social}>
                    { social.map((contact, index) => (
                        <Link
                            target="_blank"
                            href={contact.url}
                            key={`${lastName}_${contact.type}`}
                            className={classes.icon}
                        >
                            <Icon name={contact.type} size={20} />
                        </Link>
                    )) }
                </div>

                <div className={classes.text}>
                    <Typography type="display1" color="gray-50">
                        {firstName + ' ' + lastName}
                    </Typography>
                    <Typography type="body" color="gray-50" noMargin>
                        {position}
                    </Typography>
                </div>
            </div>
        </div>
    );



Member.defaultProps = {
    social: []
}


Member.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    social: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        })
    ).isRequired,
}


export default injectSheet(styles)(Member);