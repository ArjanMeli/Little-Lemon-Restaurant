export default function About() {
    return (
        <article className="about-us">
            <section className="hero-text">
                <h1>Little Lemon</h1>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <p className="about-subtext">
                    Little Lemon opened in 1970. 
                Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in New York. 
                The ownders were inspired to bring the flavors of their hometown in Italy to the people of New York.
                The ownders were inspired to bring the flavors of their hometown in Italy to the people of New York.</p>
            </section>

            <section className="double-image">
                <img className="about-1" src={require('../../../assets/food/food3.jpeg')} alt="Little Lemon restaurant cuisine 1"></img>
                <img className="about-2" src={require('../../../assets/food/food2.jpeg')} alt="Little Lemon restaurant cuisine 2"></img>
            </section>
    </article>
    );
}