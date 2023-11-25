function Home () {
    const ctx = React.useContext(UserContext)

    return (
        <Card 
            bgcolor='primary-subtle'
            txtcolor='black'
            header="Lasgidi Bank"
            title="Welcome"
            text="At Lasgidi, your business is our passion.  And like our passion for simplicity and transparency,
            we will work day and night to ensure clear skies for your investments!"
            body={(<img src="./images/desert_small.jpg" className="img-fluid" alt="Clear skies"/>)}
        />
    )
}