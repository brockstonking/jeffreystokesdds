import React, { Component } from 'react';
import './AboutUs.css';
import DrStokes from './DrStokes.jpg';
import SandraStokes from './SandraStokes.jpg'

class AboutUs extends Component {
    constructor(props){
        super(props);

        this.state = {
            biographies: [
                {
                    img: DrStokes,
                    name: 'Dr. Jeffrey Stokes, DDS',
                    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eros in cursus turpis massa tincidunt dui ut ornare lectus. Tempor nec feugiat nisl pretium fusce id velit ut. Molestie nunc non blandit massa. Dolor magna eget est lorem ipsum dolor. Ultricies mi quis hendrerit dolor magna eget est. Potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed. Ultricies mi quis hendrerit dolor magna eget est lorem ipsum. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Curabitur gravida arcu ac tortor dignissim convallis aenean et tortor. Commodo ullamcorper a lacus vestibulum. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Eu volutpat odio facilisis mauris sit amet. Morbi non arcu risus quis varius quam. Eu turpis egestas pretium aenean pharetra magna ac. Sed vulputate mi sit amet. Facilisis sed odio morbi quis commodo. Quis varius quam quisque id diam vel quam elementum pulvinar.'
                }, {
                    img: SandraStokes,
                    name: 'Sandra Stokes',
                    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc. Fermentum posuere urna nec tincidunt praesent semper feugiat nibh sed. Lacus suspendisse faucibus interdum posuere. Libero enim sed faucibus turpis in eu mi bibendum. Magna fringilla urna porttitor rhoncus dolor purus non enim. Dui sapien eget mi proin sed libero enim sed faucibus. Ornare lectus sit amet est placerat in egestas. Sagittis eu volutpat odio facilisis mauris sit. Neque aliquam vestibulum morbi blandit cursus risus at ultrices mi. Pellentesque eu tincidunt tortor aliquam nulla. Fermentum leo vel orci porta non pulvinar neque laoreet suspendisse. Donec enim diam vulputate ut pharetra sit. Maecenas pharetra convallis posuere morbi leo urna molestie at. Nibh sed pulvinar proin gravida hendrerit lectus a. Aliquet nibh praesent tristique magna sit amet. Ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis. Elementum integer enim neque volutpat ac. A arcu cursus vitae congue mauris rhoncus aenean vel elit. In fermentum posuere urna nec tincidunt praesent semper.'
                }
            ],
            isMobile: window.innerWidth < 480 ? true : false
        }
    };

    checkIfMobileView = () => {
        this.setState({
            isMobile: window.innerWidth < 716 ? true : false
        })
    }

    render(){

        window.addEventListener('resize', this.checkIfMobileView);

        const bios = this.state.biographies.map( (e, i) => {
            return <div className={this.state.isMobile ? `individualBioParentMobile bioFor${i}Mobile` : `individualBioParent bioFor${i}`}>
                <img src={ e.img } alt='' className={this.state.isMobile ? 'bioImgMobile' : 'bioImg'} />
                <h1 className='bioName' >{ e.name }</h1>
                <p className='bioDescription' >{ e.bio }</p>
            </div>
        });

        return (
            <div className={this.state.isMobile ? 'aboutUsParentMobile' : 'aboutUsParent'}>
                <h1 className='aboutUsTitle'>Our Team</h1>
                { bios }
            </div>
        )
    };
}

export default AboutUs;