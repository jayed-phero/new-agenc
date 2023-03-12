import React from 'react';
import CTA from '../CTA/CTA';
import HomeContent from '../HomeContent/HomeContent';
import Portfolio from '../Portfolio/Portfolio';
import Pricing from '../Pricing/Pricing';
import Services from '../Services/Services';
import ShortDetails from '../ShortDetails/ShortDetails';
import ExTeam from '../Team/ExTeam';
import Team from '../Team/Team';
import TeamMember from '../Team/TeamMember';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <HomeContent />
            <Services />
            <ShortDetails />
            <CTA />
            {/* <Team /> */}
            {/* <ExTeam /> */}
            <TeamMember />
            <Portfolio />
            <Testimonials />
            <Pricing />
        </div>
    );
};

export default Home;