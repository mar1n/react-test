import React from 'react';
import { expect } from 'chai';
import MusicArtists from './MusicArtists';

import { shallow } from 'enzyme';

describe('Display a list of music artist', () => {
    [{
        it: 'MusicArtists displays the first album for M. Fleetwood',
        artists: [
            { name: 'S. Fox', firstAlbum: 'Samantha Fox', showDetails: false },
            { name: 'M. Fleetwood', firstAlbum: 'Rumours', showDetails: true }
        ]
    }, {
        it: 'MusicArtists displays the details of both J. Bieber and Oasis',
        artists: [
            { name: 'Oasis', firstAlbum: 'M. of the Sun', showDetails: true },
            { name: 'J. Bieber', firstAlbum: 'My World', showDetails: true }
        ]
    }].forEach(scenario => {
        it(scenario.it, () => {

            const wrapper = shallow(<MusicArtists list={scenario.artists} />);
            const getArtists = () => wrapper.find('.artist');
            const getArtistName = artist => artist.find('.name');
            const getFirstAlbum = artist => artist.find('.firstAlbum');

            expect(getArtists()).to.have.length(scenario.artists.length);

            scenario.artists.forEach((artist, index) => {
                let artistEl = getArtists().at(index);
                let { name, firstAlbum, showDetails } = artist;
                expect(getArtistName(artistEl).text()).to.equal(name);
                expect(getFirstAlbum(artistEl).exists()).to.equal(showDetails);

                if(showDetails) {
                    expect(getFirstAlbum(artistEl).text()).to.equal(firstAlbum);
                }
            });
        });
    });
});