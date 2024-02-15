import React from 'react';
import '../assets/styles/App.css';
import heroImage from '../assets/images/about-hero1.png';
import lisaImage from '../assets/images/lisa.jpg';
import marikeImage from '../assets/images/marike.jpg';
import warrenImage from '../assets/images/Warren1.jpg';

const About = () => {
    return (
        <>
            <>
                <div className="hero-image">
                    <img src={heroImage} alt="Hero" />
                </div>
            </>
            <div className="content">
                <div className="container">
                    <p>
                        Welcome to Thrift and Thrive, where second-hand
                        treasures meet thrifty enthusiasts! Founded by the
                        ever-savvy Lisa Powell-Kuyk, our platform is a haven for
                        those who appreciate the art of thrifting without
                        breaking the bank.
                    </p>
                    <p>
                        So, why did I dive headfirst into the world of online
                        thrifting? Well, let's just say I am a self-proclaimed
                        "thrifter" extraordinaire. Well, it's simple really. As
                        a self-proclaimed "thrifter" extraordinaire, I know the
                        thrill of scoring fantastic second-hand finds that won't
                        leave you penniless. Who needs to sacrifice an arm and a
                        leg for quality when you can find hidden gems at bargain
                        prices?
                    </p>
                    <p>
                        With this passion burning bright, I decided to take
                        matters into my own hands and create Thrift and Thrive.
                        But wait, there's a twist! Unlike your typical online
                        thrift shops. Oh no, we like to do things a little
                        differently around here.
                    </p>
                    <p>
                        You won't find any fancy carts or pesky payment points
                        cluttering up your browsing experience. Nope, we keep it
                        simple yet effective. Our platform serves as a meeting
                        ground for buyers and sellers to connect directly,
                        negotiate prices, and seal the deal. It's like the Wild
                        West of thrifting—minus the tumbleweeds and cowboy hats
                        (although, we wouldn't mind those either).
                    </p>
                    <p>
                        At Thrift and Thrive, we believe that every item has a
                        story to tell, and every purchase contributes to a more
                        sustainable and wallet-friendly lifestyle. So whether
                        you're on the hunt for vintage threads, quirky home
                        decor, or one-of-a-kind accessories, saddle up and join
                        us on this thrifting adventure!
                    </p>
                </div>
                <br />
                <h4 className="text-center">
                    <b>
                        Meet the vibrant minds behind the scenes at Thrift and
                        Thrive, where passion meets innovation in the world of
                        thrifting:
                    </b>
                    <br></br>
                    <br />
                </h4>
                <div className="row">
                    <div className="col-sm-4">
                        <div className="card">
                            <img
                                src={lisaImage}
                                className="card-img-top mx-auto d-block py-3"
                                alt="Card image cap"
                                style={{ height: '300px', width: '300px' }}
                            />
                            <div className="card-body">
                                <h5 className="card-title text-center">
                                    🌟 <b>Lisa Powell-Kuyk:</b>
                                    <br /> Founder & Frontend Extraordinaire:
                                </h5>
                                <p className="card-text text-center">
                                    As the visionary force behind Thrift and
                                    Thrive, Lisa Powell-Kuyk brings her
                                    boundless creativity and love for thrifting
                                    to the forefront. With an eye for design and
                                    a heart for second-hand treasures, Lisa
                                    leads the charge in crafting an
                                    unforgettable user experience that
                                    celebrates thriftiness in all its glory.
                                    <br />
                                    <br />
                                    <br />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card">
                            <img
                                src={marikeImage}
                                className="card-img-top mx-auto d-block py-3"
                                alt="Card image cap"
                                style={{ height: '300px', width: '300px' }}
                            />
                            <div className="card-body">
                                <h5 className="card-title text-center">
                                    <b>📣 Marike Powell-Taljaard:</b>
                                    <br /> Marketing and Social Media
                                    extraordinaire:
                                </h5>
                                <p className="card-text text-center">
                                    Meet Marike Powell-Taljaard, the creative
                                    genius behind our marketing magic and social
                                    media sparkle. With her finger firmly on the
                                    pulse of the latest trends and her knack for
                                    crafting compelling content, Marike
                                    captivates our audience and spreads the word
                                    far and wide about the thrifty treasures
                                    waiting to be discovered on Thrift and
                                    Thrive.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card">
                            <img
                                src={warrenImage}
                                className="card-img-top mx-auto d-block py-3"
                                alt="Card image cap"
                                style={{ height: '300px', width: '300px' }}
                            />
                            <div className="card-body">
                                <h5 className="card-title text-center">
                                    <b>🔧 Warren Kuyk:</b>
                                    <br /> General Manager & Backend Guru:
                                </h5>
                                <p className="card-text text-center">
                                    Warren is the mastermind behind the scenes,
                                    ensuring that everything runs smoothly on
                                    the backend of Thrift and Thrive. From
                                    managing operations to optimizing systems,
                                    Warren's expertise keeps our platform
                                    running like a well-oiled machine. With his
                                    keen attention to detail and problem-solving
                                    prowess, he's the backbone of our operation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default About;
