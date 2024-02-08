import React from 'react';
import '../assets/styles/App.css';

const About = () => {
    return (
        <div className="content">
            <section className="hero is-fullheight-with-navbar">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <h1 className="title">About Us</h1>
                        <div className="hero-image">
                            <img
                                src="src\assets\images\2nd-hand-fashion-style.jpg"
                                alt="Hero"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <div className="container">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer nec odio. Praesent libero. Sed cursus ante dapibus
                    diam. Sed nisi. Lorem, ipsum dolor sit amet consectetur
                    adipisicing elit. Nihil praesentium autem alias ducimus
                    dolorum voluptatum inventore expedita quisquam nam eius
                    corrupti, accusantium quis aperiam, esse porro assumenda,
                    adipisci deserunt dolorem! Aut, est quis quam impedit iure
                    vero aperiam dolores earum sunt obcaecati? Nisi culpa quae
                    officia sequi fugit, laborum quis optio repellendus vero
                    ipsum minima? Consectetur architecto veritatis recusandae
                    sunt! Magnam eveniet modi soluta repellendus, nam architecto
                    a impedit eius cum rem possimus amet recusandae quo
                    distinctio quis omnis atque ut, voluptate deserunt veniam
                    sed asperiores ipsum incidunt obcaecati. Accusantium.
                    Mollitia voluptatum doloremque esse. Earum rerum quo
                    possimus exercitationem corporis repellat! Ipsum aut quo
                    magni commodi inventore, aspernatur iusto accusantium error
                    modi voluptates, ullam quibusdam illum perferendis tempora
                    nulla voluptate. Doloribus quam optio itaque ut magni
                    similique molestias perspiciatis neque ipsam tempore,
                    inventore assumenda quibusdam illum ratione voluptatem
                    labore repellat explicabo totam ducimus, officiis error
                    obcaecati iusto odio. Eius, voluptatem.
                </p>
            </div>
            <div className="row">
                {Array.from({ length: 3 }).map((_, index) => (
                    <div className="col-sm-4" key={index}>
                        <div className="card">
                            <img
                                src="https://picsum.photos/id/237/100"
                                className="card-img-top"
                                alt="Card image cap"
                            />
                            <div className="card-body">
                                <h5 className="card-title">
                                    Card title {index + 1}
                                </h5>
                                <p className="card-text">
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default About;
