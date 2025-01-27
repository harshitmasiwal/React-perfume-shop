// src/pages/About.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function About() {
  return (
    <div className="bg-zinc-900 text-white min-h-screen py-12 px-6">
      <Container className="max-w-4xl mx-auto">
        <Row className="justify-content-center">
          <Col md={8}>
            <h1 className="text-center text-5xl font-extrabold mb-8 leading-tight text-shadow-md">
              About Us
            </h1>
            <p className="text-center text-xl text-gray-200 mb-8">
              Welcome to Perfume Shop, your number one source for all things fragrance. We're dedicated to providing you the very best of perfumes, with an emphasis on quality, customer service, and uniqueness.
            </p>
            <p className="text-center text-xl text-gray-200 mb-8">
              Founded in 2023, Perfume Shop has come a long way from its beginnings. When we first started out, our passion for fragrances drove us to do intense research so that Perfume Shop can offer you the world's most advanced products.
            </p>
            <p className="text-center text-xl text-gray-200 mb-8">
              We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
            </p>

            {/* Added Personal Information Section */}
            <div className="mt-16 bg-zinc-800 text-white rounded-lg shadow-xl p-8">
              <h2 className="text-3xl  text-emerald-400 font-extrabold tracking-tight leading-none mb-4 text-center">
                Crafted by Harshit Masiwal
              </h2>
              <p className="text-lg text-gray-200 mb-4">
                I'm a 2nd-year IT engineering student at ABES Engineering College, Ghaziabad. My passion for technology fuels my desire to create engaging web experiences, solve complex problems, and continuously learn.
              </p>
              <p className="text-lg text-gray-200 mb-4">
                In addition to my college projects, I specialize in web development with React, Node.js, MongoDB, and other technologies. I enjoy collaborating on innovative projects and contributing to a better digital world.
              </p>
              <p className="text-lg text-gray-200 mb-4">
                I’m also involved in various clubs and tech events such as the CodeChef Club and 'Clash of Coders'—my aim is to grow as a developer while contributing to the community.
              </p>
              <p className="text-lg text-gray-200">
                I'm constantly striving to push my limits and make an impact through my work.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
