import React from 'react';
import Contact from '../Contact/Contact';
import CTA from '../CTA/CTA';
import HomeCon from '../HomeContent/HomeCon';
import HomeContent from '../HomeContent/HomeContent';
import Portfolio from '../Portfolio/Portfolio';
import Pricing from '../Pricing/Pricing';
import Service from '../Services/Service';
import Services from '../Services/Services';
import ShortDetails from '../ShortDetails/ShortDetails';
import ExTeam from '../Team/ExTeam';
import OurTeam from '../Team/OurTeam';
import Team from '../Team/Team';
import TeamMember from '../Team/TeamMember';
import Testiminial from '../Testimonials/Testiminial';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            {/* <HomeContent /> */}
            <HomeCon />
            <Service/>
            {/* <Services /> */}
            {/* <ShortDetails /> */}
            {/* <CTA /> */}
            {/* <Team /> */}
            {/* <ExTeam /> */}
            {/* <TeamMember /> */}
            <ShortDetails/>
            <OurTeam/>
            <Portfolio />
            <Testiminial/>
            {/* <Testimonials /> */}
            {/* <Pricing /> */}
            <Contact />
        </div>
    );
};

export default Home;