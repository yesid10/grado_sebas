import React from 'react';
import Hero from '../components/Hero';
import EventDetails from '../components/EventDetails';
import InvitationMessage from '../components/InvitationMessage';
import PhotoGallery from '../components/PhotoGallery';
import RSVP from '../components/RSVP';
import Footer from '../components/Footer';
import Decorations from '../components/Decorations';

const AppRouter = () => {
    return (
        <div className="min-h-screen">
            {/* Background Decorations */}
            <Decorations />

            {/* Main Content */}
            <main className="flex flex-col gap-9 z-10">
                <Hero />
                <EventDetails />
                <InvitationMessage />
                <PhotoGallery />
                <RSVP />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default AppRouter;