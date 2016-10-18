import React from 'react'
import styles from './styles.module.css'

export class Callback extends React.Component {

    render() {
        return (
            <div className={styles.root}>
                <h2>Callback</h2>
                <p>I wish I could get a JWT on this page but all I can get is this silly:</p>
                <p><code>?code={this.props.location.query.code}</code></p>
            </div>
        )
    }
}

export default Callback;
