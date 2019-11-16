import React, { Component } from 'react';
import './AboutUs.css';
import DrStokes from './DrStokes.jpg';
import SandraStokes from './SandraStokes.jpg'
import JudyFahrner from './JudyFahrner.jpg';
import StokesTeam from './StokesTeam.jpg';
import * as Actions from './../../../ducks/reducer';
import connect from 'react-redux';

class AboutUs extends Component {
    constructor(props){
        super(props);

        this.state = {
            biographies: [
                {
                    img: DrStokes,
                    name: 'Dr. Jeffrey Stokes, DDS',
                    bio: 'Dr. Jeffrey Stokes was born and raised in South East Idaho and is a graduate of Brigham Young University. After acquiring his Bachelor of Science degree in 1989, Dr. Stokes was admitted into a special scholarship program whereby 10 students were able to complete their first year of dental school at the University of Utah Medical School. He then completed his dental education at Creighton University in Omaha, Nebraska, graduating among the top of his class in 1993. In October of that same year, Dr. Stokes opened his Dental Practice in Henderson, Nevada. Committed to staying on top of the latest advancements in dental techniques and technology, Dr. Stokes takes multiple days of continuing education classes each year. But what truly sets Dr. Stokes apart from other dentists? He maintains professionality yet also has a knack for easing the fears of those who are terrified to come to the dentist. He knows how to enhance a patient’s appearance by restoring teeth to their natural healthy condition. Patients not only look good, they feel good after their visit with Dr. Stokes.',
                    bio2: `Dr. Stokes loves spending time with his family. He has been married to his wife Sandra for 34 years, has 5 children (1 son and 4 daughters), and 5 grandchildren, with another on the way (2 girls and 3 boys). He enjoys running, biking, hiking, hunting, golfing and anything exciting in the outdoors. Dr. Stokes served a full-time mission for the Church of Jesus Christ of Latter-Day Saints in Taiwan from 1981-1983. Dr. Stokes and his wife Sandra are currently serving as BYU Worldwide Pathway Missionaries for the Church.`
                }, {
                    img: JudyFahrner,
                    name: 'Judy Fahrner',
                    bio: `Judy Newcomb Fahrner and her three sisters (Lyndee, Susan, and Jerry) were born and raised in Henderson, Nevada by Jerry and Freda. Married to Tim Fahrner, she and her husband have four children (Jonalee, Jillie, Kaitlyn, and Cole) as well as three beautiful grandchildren (Jillean, Ellie, and Warren). While growing up in Henderson, Judy attended Sewell Elementary, Burkholder Middle School and Basic High School.`,
                    bio2: `After completing her degree in Dental Hygiene at the College of Southern Nevada, Judy was hired to work at Dr. Jeffrey Stokes' dental office. She has enjoyed the opportunity to work for him and has been a wonderful staff member for more than 20 years. As our dental office is a family practice, she gets to see the same patients at each of their hygiene visits and form great relationships with them. Some of these have been patients for years, and Judy has expressed that the most delightful aspect of her job is talking with each patient and getting to know them better. "Dr. Stokes is an honest and charismatic person. These are important characteristics to have - not only as a person but as a dentist also. He is always honest with the patient and does what is needed so the patient can have the best treatment necessary. He has also created a great team to work with, which he respects & appreciates. It makes his office an excellent environment to work in. I am so thankful I have found such a great dentist to work with for the past 20 years."`
                }
            ],
            sandraObject: {
                img: SandraStokes,
                name: 'Sandra Stokes',
                bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc. Fermentum posuere urna nec tincidunt praesent semper feugiat nibh sed. Lacus suspendisse faucibus interdum posuere. Libero enim sed faucibus turpis in eu mi bibendum. Magna fringilla urna porttitor rhoncus dolor purus non enim. Dui sapien eget mi proin sed libero enim sed faucibus. Ornare lectus sit amet est placerat in egestas. Sagittis eu volutpat odio facilisis mauris sit. Neque aliquam vestibulum morbi blandit cursus risus at ultrices mi. Pellentesque eu tincidunt tortor aliquam nulla. Fermentum leo vel orci porta non pulvinar neque laoreet suspendisse. Donec enim diam vulputate ut pharetra sit. Maecenas pharetra convallis posuere morbi leo urna molestie at. Nibh sed pulvinar proin gravida hendrerit lectus a. Aliquet nibh praesent tristique magna sit amet. Ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis. Elementum integer enim neque volutpat ac. A arcu cursus vitae congue mauris rhoncus aenean vel elit. In fermentum posuere urna nec tincidunt praesent semper.'
            },
            isMobile: window.innerWidth < 480 ? true : false
        }
    };

    componentWillMount = () => {
        this.props.updateRoutePath('/aboutus');
    }

    componentDidMount = () => {
        window.scrollTo(0, 0);
      }

    checkIfMobileView = () => {
        this.setState({
            isMobile: window.innerWidth < 716 ? true : false
        })
    }

    render(){

        window.addEventListener('resize', this.checkIfMobileView);

        const bios = this.state.biographies.map( (e, i) => {
            let secondParagraph = e.bio2 ? <p className={this.state.isMobile ? 'bioDescriptionMobile' : 'bioDescription'} >{ e.bio2 }</p>: null
            return <div className={this.state.isMobile ? `individualBioParentMobile bioFor${i}Mobile` : `individualBioParent bioFor${i}`}>
                <img src={ e.img } alt='' className={this.state.isMobile ? 'bioImgMobile' : 'bioImg'} />
                <h1 className='bioName' >{ e.name }</h1>
                <p className={this.state.isMobile ? 'bioDescriptionMobile' : 'bioDescription'} >{ e.bio }</p>
                { secondParagraph }
            </div>
        });

        return (
            <div className={this.state.isMobile ? 'aboutUsParentMobile' : 'aboutUsParent'}>
                <img src={StokesTeam} alt='' className={this.state.isMobile ? 'aboutUsStokesTeamPhotoMobile' : 'aboutUsStokesTeamPhoto'} />
                <h1 className='aboutUsTitle'>Meet Our Team:</h1>
                { bios }
            </div>
        )
    };
}

export default connect(state => state, Actions)(AboutUs);