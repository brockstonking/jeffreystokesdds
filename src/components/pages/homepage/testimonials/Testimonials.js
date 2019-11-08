import React, { Component } from 'react';
import './Testimonials.css';

class Testimonials extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        let testimonials = [
            {
                review: `I never thought I'd meet another dentist like the one I left in Jersey - he was amazing.  Then I found Dr. Stokes!  He has the best bedside manner and always takes great care of me.  The staff at this office is also amazing.  I live in the far reaches of the northwest but I will travel as far as it takes to keep this one!`,
                firstName: 'Dana'
            },
            {
                review: `Dr. Stokes has been my dentist for 8 years. He is kind, understanding, and a good listener. He is by far the best Dentist I have ever been to, and I'm a senior, so I've been to a few. His office runs very smoothly, and his employees are great also.`,
                firstName: 'Patty'
            },
            {
                review: `Best dental experience I've ever had....and I'm going on 60.  I showed up without an appointment with a bad wisdom tooth.  They took me right in, even though there was an issue with verifying my insurance and extracted the the tooth. The staff were very friendly and professional.  I look forward to returning here for all of my future dental needs.`,
                firstName: 'Gary'
            },
            {
                review: `Hadn't been to the dentist in a long while. Nervous to come. They made it fun even!! Great staff and super easy experience! Highly recommend.`,
                firstName: 'Benjamin'
            },
            {
                review: `Dr. Stokes and the entire staff are always friendly. He truly listens to you and explains things in a way you can understand. He is also always on time for appointments. I’ve never found a dentist that I didn’t dread coming to until I found Dr. Stokes office!`,
                firstName: 'Tiffany'
            },
            {
                review: `Dr Jeffrey Stokes is a very kind and gentle dentist. His office staff are wonderful to work with. I would recommend Dr.Stokes dental office to anyone who is looking for a dentist. He is great!`,
                firstName: 'Rebekah'
            }
        ];

        return (
            <div>
                <h1 className="testimonialsTitle">Testimonials</h1>
                
            </div>
        )
    }
}

export default Testimonials;