/* eslint-disable react/jsx-sort-props */
/* eslint-disable padding-line-between-statements */
/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
"use client";

import Image from "next/image";
import card1 from "@/src/assets/images/card1.jpg";
import card2 from "@/src/assets/images/card2.jpg";
import card3 from "@/src/assets/images/card3.jpg";
import card4 from "@/src/assets/images/card4.jpg";

const AboutCards = () => {
  return (
    <div className="container mx-auto ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 p-24 bg-white">
        <div className="p-6">
          <h1 className="text-center text-green-600 font-semibold text-2xl">
            Design consultation
          </h1>
          <p className="text-center pt-2">
            The first step is to conduct a detailed site analysis and formulate
            a brief. This is normally carried out during a couple of meetings
            with our client.
          </p>
        </div>
        <div className="p-6">
          <h1 className="text-center text-green-600 font-semibold text-2xl">
            Planting plan
          </h1>
          <p className="text-center pt-2">
            The next stage is to prepare a detailed planting plan showing
            placement of plant varieties numbers and spacing and a planting
            schedule.
          </p>
        </div>
        <div className="p-6">
          <h1 className="text-center text-green-600 font-semibold text-2xl">
            Tenders
          </h1>
          <p className="text-center pt-2">
            In most cases, our clients are happy to accept our recommendation
            about who should execute and landscaping and build the garden.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-24">
        {/* Card 1: Our Mission */}
        <div className="bg-white w-full md:w-80  rounded-lg hover:shadow-lg overflow-hidden ">
          <Image
            className="w-full h-96 object-cover"
            src={card1} 
            alt="Mission"
            width={500}
            height={500}
          />
          <div className="p-6">
            <div className="flex justify-center mb-4">
              <i className="text-4xl text-blue-500 fas fa-bullseye" />{" "}
              {/* Replace with your icon */}
            </div>
            <h3 className="text-2xl font-semibold text-center mb-2">
              Our Mission
            </h3>
            <p className="text-gray-600 text-center">
              We aim to provide innovative solutions that help individuals and
              businesses grow with cutting-edge technology.
            </p>
          </div>
        </div>

        {/* Card 2: Our Values */}
        <div className="bg-white  w-full md:w-80  rounded-lg hover:shadow-lg overflow-hidden">
          <Image
            className="w-full h-96 object-cover"
            src={card2} // Replace with your image URL
            alt="Mission"
            width={500}
            height={500}
          />
          <div className="p-6">
            <div className="flex justify-center mb-4">
              <i className="text-4xl text-blue-500 fas fa-heart" />{" "}
              {/* Replace with your icon */}
            </div>
            <h3 className="text-2xl font-semibold text-center mb-2">
              Our Values
            </h3>
            <p className="text-gray-600 text-center">
              Integrity, respect, and commitment are at the core of everything
              we do. We value our relationships with customers.
            </p>
          </div>
        </div>

        {/* Card 3: Our Team */}
        <div className="bg-white  w-full md:w-80  rounded-lg hover:shadow-lg overflow-hidden">
          <Image
            className="w-full h-96 object-cover"
            src={card3} // Replace with your image URL
            alt="Mission"
            width={500}
            height={500}
          />
          <div className="p-6">
            <div className="flex justify-center mb-4">
              <i className="text-4xl text-blue-500 fas fa-users" />{" "}
              {/* Replace with your icon */}
            </div>
            <h3 className="text-2xl font-semibold text-center mb-2">
              Our Team
            </h3>
            <p className="text-gray-600 text-center">
              Our team consists of passionate professionals who work together to
              deliver the best results for our clients.
            </p>
          </div>
        </div>

        {/* Card 4: Our Vision */}
        <div className="bg-white  w-full md:w-80 rounded-lg hover:shadow-lg overflow-hidden">
          <Image
            className="w-full h-96 object-cover"
            src={card4} // Replace with your image URL
            alt="Mission"
            width={500}
            height={500}
          />
          <div className="p-6">
            <div className="flex justify-center mb-4">
              <i className="text-4xl text-blue-500 fas fa-eye" />{" "}
              {/* Replace with your icon */}
            </div>
            <h3 className="text-2xl font-semibold text-center mb-2">
              Our Vision
            </h3>
            <p className="text-gray-600 text-center">
              We envision a future where technology empowers people to achieve
              their greatest potential and make a lasting impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCards;
