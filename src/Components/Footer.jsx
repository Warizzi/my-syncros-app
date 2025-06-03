import React from "react";

function Footer() {
    return (
        <footer style={styles.footer}>
            <p style={styles.text}>
                © {new Date().getFullYear()} Syncros Tracker — Built with 💪 by Warona Louw
            </p>
            <div style={styles.links}>
                <a href="/about" style={styles.link}>About</a>
                <a href="/community" style={styles.link}>Community</a>
                <a href="/journal" style={styles.link}>Journal</a>
            </div>
        </footer>
    );
}

const styles = {
    footer: {
        marginTop: '2rem',
        padding: '1rem',
        textAlign: 'center',
        backgroundColor: '#222',
        color: '#eee',
        fontSize: '0.9rem',
    },
    text: {
        marginBottom: '0.5rem',
    },
    links: {
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem',
    },
    link: {
        color: '#90ee90',
        textDecoration: 'none',
    }
};

export default Footer;
