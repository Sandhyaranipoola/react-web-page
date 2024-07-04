import React from 'react';

const Catalysts = () => (
    <section id="catalysts" style={styles.section}>
        <h2 style={styles.heading}>Catalysts</h2>
        <div style={styles.container}>
            <div style={styles.catalyst}>
                <h3 style={styles.catalystHeading}>Catalyst 1</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, omnis incidunt quo alias aliquam impedit harum eos fuga vitae quae, aut, distinctio quas explicabo odio quod dolores provident quos asperiores.</p>
            </div>
            <div style={styles.catalyst}>
                <h3 style={styles.catalystHeading}>Catalyst 2</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta adipisci earum, explicabo autem reiciendis quibusdam corporis culpa voluptatum impedit tempore, ex quasi quas error quos. Sed quis iste eum enim!</p>
            </div>
            <div style={styles.catalyst}>
                <h3 style={styles.catalystHeading}>Catalyst 3</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, quisquam nobis voluptatum culpa possimus odit molestias ipsum hic veritatis quaerat rem, maxime officia sapiente provident, nulla voluptatem dicta corrupti delectus?</p>
            </div>
        </div>
    </section>
);

const styles = {
    section: {
        backgroundColor: '#333',
        padding: '20px',
        margin: '20px 0',
        borderRadius: '8px',
    },
    heading: {
        color: '#333',
        textAlign: 'center',
    },
    container: {
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: '20px',
        backgroundColor:'#432587'
    },
    catalyst: {
        flex: '1',
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '4px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        margin: '0 10px',
    },
    catalystHeading: {
        fontSize: '1.2em',
        color:'purple',
        marginBottom: '10px',
        borderBottom: '1px solid #ccc',
        paddingBottom: '5px',
    },
};

export default Catalysts;
